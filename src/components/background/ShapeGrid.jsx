import { useEffect, useRef } from 'react';

/**
 * ShapeGrid — static hover-interaction grid (no scrolling movement).
 * Used on Home, About, FAQ, Prizes, and other pages.
 * Tiles light up on hover; the grid itself stays fixed in place.
 */
export default function ShapeGrid({
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
  const stateRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initGrid();
    };

    const initGrid = () => {
      const cols = Math.ceil(canvas.width / squareSize) + 1;
      const rows = Math.ceil(canvas.height / squareSize) + 1;
      stateRef.current = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          stateRef.current.push({
            x: c * squareSize,
            y: r * squareSize,
            fill: 0,
            alpha: 0,
            offset: direction === 'diagonal' ? (c + r) * 0.15 : 0,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      stateRef.current.forEach((sq) => {
        const cx = sq.x + squareSize / 2;
        const cy = sq.y + squareSize / 2;
        const dist = Math.hypot(cx - mx, cy - my);
        const hoverRadius = squareSize * 2.5;
        const isHovered = dist < hoverRadius;

        // Drive alpha toward target
        const target = isHovered ? 1 : 0;
        sq.alpha += (target - sq.alpha) * (speed * 0.12);

        // Border
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.35;
        ctx.strokeRect(sq.x + 0.5, sq.y + 0.5, squareSize - 1, squareSize - 1);

        // Fill
        if (sq.alpha > 0.005) {
          ctx.globalAlpha = sq.alpha * 0.85;
          ctx.fillStyle = hoverFillColor;
          ctx.fillRect(sq.x + 1, sq.y + 1, squareSize - 2, squareSize - 2);
        }

        ctx.globalAlpha = 1;
      });

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
