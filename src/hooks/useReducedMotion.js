import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'
const subscribe = (cb) => {
  if (typeof window.matchMedia !== 'function') return () => {}
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const getSnapshot = () => typeof window.matchMedia === 'function' && window.matchMedia(QUERY).matches

// True when the visitor asked their OS for less motion. Every animation checks this.
export default function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
