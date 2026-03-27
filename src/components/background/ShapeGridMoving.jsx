import { useEffect, useRef } from 'react';

/**
 * ShapeGridMoving — Event page exclusive.
 * Full diagonal-scrolling grid (tiles move at `speed × 60 px/s` diagonally)
 * PLUS hover-fill interaction on top of the moving tiles.
 */
export default function ShapeGridMoving({
  speed = 0.5,
  squareSize = 60,
  direction = 'diagonal',
  borderColor = '#bfc4c0',
  hoverFillColor = '#241334',
  shape = 'square',
  hoverTrailAmount = 0,
  className = '',
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  // Persistent diagonal offset (increases every frame)
  const offsetRef = useRef(0);
  // Per-cell hover alpha map: key = "col,row", value = alpha 0..1
  const hoverAlphaRef = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // px per second for the scroll; speed=0.6 → ~36 px/s feels natural
    const PX_PER_SECOND = speed * 60;

    let lastTime = null;

    const draw = (timestamp) => {
      if (lastTime === null) lastTime = timestamp;
      const dt = (timestamp - lastTime) / 1000; // seconds
      lastTime = timestamp;

      // Advance the diagonal offset (wraps seamlessly per squareSize)
      offsetRef.current = (offsetRef.current + PX_PER_SECOND * dt) % squareSize;
      const off = offsetRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Extend grid one extra cell in each direction so scrolling wraps seamlessly
      const cols = Math.ceil(canvas.width  / squareSize) + 2;
      const rows = Math.ceil(canvas.height / squareSize) + 2;

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          // Apply the same diagonal offset to both x and y
          const sx = c * squareSize + (direction === 'diagonal' ? off : 0);
          const sy = r * squareSize + (direction === 'diagonal' ? off : 0);

          const cx = sx + squareSize / 2;
          const cy = sy + squareSize / 2;
          const dist = Math.hypot(cx - mx, cy - my);
          const hoverRadius = squareSize * 2.5;
          const isHovered = dist < hoverRadius;

          const key = `${c},${r}`;
          const prev = hoverAlphaRef.current[key] ?? 0;
          const target = isHovered ? 1 : 0;
          const next = prev + (target - prev) * Math.min(speed * 0.15, 1);
          hoverAlphaRef.current[key] = next;

          // Draw border
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = 0.35;
          ctx.strokeRect(sx + 0.5, sy + 0.5, squareSize - 1, squareSize - 1);

          // Draw hover fill
          if (next > 0.005) {
            ctx.globalAlpha = next * 0.85;
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(sx + 1, sy + 1, squareSize - 2, squareSize - 2);
          }

          ctx.globalAlpha = 1;
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    animRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [squareSize, speed, borderColor, hoverFillColor, direction]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
