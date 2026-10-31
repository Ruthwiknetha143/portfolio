import { useCallback, useRef } from 'react'
import useReducedMotion from './useReducedMotion.js'

const finePointer = () => typeof window.matchMedia === 'function' && window.matchMedia('(pointer: fine)').matches

// 3D tilt: writes --rx / --ry / --mx / --my on the element; CSS does the rest.
export function useTilt(max = 8) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || reduced || !finePointer()) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`)
      el.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`)
      el.style.setProperty('--mx', `${x * 100}%`)
      el.style.setProperty('--my', `${y * 100}%`)
    },
    [max, reduced],
  )
  const onPointerLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }, [])
  return { ref, onPointerMove, onPointerLeave }
}

// Magnetic hover: the element leans a few pixels toward the cursor.
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el || reduced || !finePointer()) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    },
    [strength, reduced],
  )
  const onPointerLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = ''
  }, [])
  return { ref, onPointerMove, onPointerLeave }
}
