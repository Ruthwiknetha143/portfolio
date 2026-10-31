import { useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'

// Drifting "network" of points joined by faint lines; points near the cursor link to it.
// Pauses when off-screen or the tab is hidden. Draws a single still frame for reduced motion.
export default function ParticleField({ colors = ['255,122,24', '61,214,245'] }) {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let w = 0
    let h = 0
    let points = []
    let raf = 0
    let visible = true
    const mouse = { x: -9999, y: -9999 }
    const LINK = 130

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, (w * h) / 16000))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        c: colors[Math.random() < 0.7 ? 0 : 1],
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${p.c},${(1 - d / LINK) * 0.22})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (dm < LINK * 1.4) {
          ctx.strokeStyle = `rgba(${p.c},${(1 - dm / (LINK * 1.4)) * 0.55})`
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
        ctx.fillStyle = `rgba(${p.c},0.85)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      draw()
      if (visible && !document.hidden && !reduced) raf = requestAnimationFrame(loop)
    }
    const restart = () => {
      cancelAnimationFrame(raf)
      if (visible && !document.hidden && !reduced) raf = requestAnimationFrame(loop)
    }

    const host = canvas.parentElement
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      if (reduced) draw()
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    draw()
    restart()
    const ro = new ResizeObserver(() => {
      resize()
      draw()
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      restart()
    })
    io.observe(canvas)
    document.addEventListener('visibilitychange', restart)
    host?.addEventListener('pointermove', onMove)
    host?.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', restart)
      host?.removeEventListener('pointermove', onMove)
      host?.removeEventListener('pointerleave', onLeave)
    }
    // colors is a constant default; re-running on every render would reset the field.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
