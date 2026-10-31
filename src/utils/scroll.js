// Smooth-scrolls to a section, leaving room for the fixed navbar.
export function scrollToSection(id) {
  const reduce = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const el = document.getElementById(id)
  if (!el) return
  const top = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
}
