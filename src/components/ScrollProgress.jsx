// Thin gradient bar at the very top that fills as the page is scrolled.
export default function ScrollProgress({ progress }) {
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
}
