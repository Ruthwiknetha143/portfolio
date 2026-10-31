import { useEffect, useState } from 'react'

// Page scroll as a 0..1 fraction plus the raw scrollY, throttled to one update per frame.
export default function useScrollProgress() {
  const [state, setState] = useState({ progress: 0, y: 0 })
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setState({ progress: max > 0 ? window.scrollY / max : 0, y: window.scrollY })
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return state
}
