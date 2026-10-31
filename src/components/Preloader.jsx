import { useEffect, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'

// Short intro: the RP monogram draws itself, then the curtain lifts. Skipped for reduced motion.
export default function Preloader() {
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState('in') // in -> out -> done

  useEffect(() => {
    const root = document.documentElement
    if (reduced) {
      root.classList.add('is-loaded')
      setPhase('done')
      return undefined
    }
    const t1 = setTimeout(() => {
      setPhase('out')
      root.classList.add('is-loaded') // hero entrance animations wait for this class
    }, 1300)
    const t2 = setTimeout(() => setPhase('done'), 2000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [reduced])

  if (phase === 'done') return null
  return (
    <div className={`preloader ${phase === 'out' ? 'is-out' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 160 90" className="preloader-mark">
        <text x="80" y="66" textAnchor="middle">RP</text>
      </svg>
      <div className="preloader-bar">
        <span />
      </div>
    </div>
  )
}
