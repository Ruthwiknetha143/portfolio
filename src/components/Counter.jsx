import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'
import useReducedMotion from '../hooks/useReducedMotion.js'

// Counts up from 0 once it scrolls into view (ease-out).
export default function Counter({ value, decimals = 0, suffix = '', duration = 1600 }) {
  const [ref, inView] = useInView({ threshold: 0.6 })
  const reduced = useReducedMotion()
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduced) {
      setShown(value)
      return undefined
    }
    let raf = 0
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 4)
      setShown(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, value, duration])

  return (
    <span ref={ref} className="counter">
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  )
}
