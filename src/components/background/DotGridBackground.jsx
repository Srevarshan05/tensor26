import { useEffect, useRef } from 'react'

/**
 * DotGridBackground — interactive canvas-based dot grid.
 * Dots react to mouse proximity and cursor velocity (shockwave effect).
 *
 * Props match the reactbits DotGrid config exactly:
 * dotSize, gap, baseColor, activeColor, proximity,
 * speedTrigger, shockRadius, shockStrength, maxSpeed,
 * resistance, returnDuration
 */
export default function DotGridBackground({
  dotSize = 4,
  gap = 18,
  baseColor = '#dad5e1',
  activeColor = '#5227FF',
  proximity = 120,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  opacity = 0.55,
}) {
  const canvasRef = useRef(null)
  const stateRef = useRef({
    dots: [],
    mouse: { x: -9999, y: -9999 },
    lastMouse: { x: -9999, y: -9999 },
    speed: 0,
    animId: null,
    shockwaves: [],
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const s = stateRef.current

    const cell = dotSize + gap

    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return { r, g, b }
    }
    const base = hexToRgb(baseColor)
    const active = hexToRgb(activeColor)

    function lerpColor(t) {
      const clamp = Math.max(0, Math.min(1, t))
      return `rgb(${Math.round(base.r + (active.r - base.r) * clamp)},${Math.round(base.g + (active.g - base.g) * clamp)},${Math.round(base.b + (active.b - base.b) * clamp)})`
    }

    function buildGrid() {
      s.dots = []
      const cols = Math.ceil(canvas.width / cell) + 1
      const rows = Math.ceil(canvas.height / cell) + 1
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          s.dots.push({ x: col * cell, y: row * cell, scale: 1, vel: { x: 0, y: 0 } })
        }
      }
    }

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      buildGrid()
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      const nx = e.clientX - rect.left
      const ny = e.clientY - rect.top
      const dx = nx - s.lastMouse.x
      const dy = ny - s.lastMouse.y
      s.speed = Math.sqrt(dx * dx + dy * dy)
      s.lastMouse = { x: s.mouse.x, y: s.mouse.y }
      s.mouse = { x: nx, y: ny }

      if (s.speed > speedTrigger) {
        s.shockwaves.push({ x: nx, y: ny, r: 0, born: performance.now() })
      }
    }

    function draw(now) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update shockwaves
      s.shockwaves = s.shockwaves.filter(sw => {
        sw.r += shockStrength * 4
        return sw.r < shockRadius
      })

      for (const dot of s.dots) {
        const dx = dot.x - s.mouse.x
        const dy = dot.y - s.mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Proximity attraction
        let t = 0
        if (dist < proximity) {
          t = 1 - dist / proximity
        }

        // Shockwave influence
        for (const sw of s.shockwaves) {
          const sdx = dot.x - sw.x
          const sdy = dot.y - sw.y
          const sd = Math.sqrt(sdx * sdx + sdy * sdy)
          const front = Math.abs(sd - sw.r)
          if (front < 30) {
            const shock = (1 - front / 30) * shockStrength * 0.06
            dot.vel.x += (sdx / (sd || 1)) * shock
            dot.vel.y += (sdy / (sd || 1)) * shock
          }
        }

        // Physics: dampen velocity
        dot.vel.x *= 0.85
        dot.vel.y *= 0.85
        dot.x += dot.vel.x
        dot.y += dot.vel.y

        const radius = (dotSize / 2) * (1 + t * 0.6)
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = lerpColor(t)
        ctx.fill()
      }

      s.animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouseMove)
    // Also track on the window so the mouse works across the hero
    window.addEventListener('mousemove', onMouseMove)
    resize()
    s.animId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(s.animId)
    }
  }, [dotSize, gap, baseColor, activeColor, proximity, speedTrigger, shockRadius, shockStrength])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity, pointerEvents: 'none' }}
    />
  )
}
