// Shape separators between sections. `from` and `to` are colour token names from :root (e.g. "ink", "paper").
// wave: three layered waves drifting at different speeds. tilt / curve: static shapes.
export default function SectionDivider({ variant = 'wave', from, to, flip = false }) {
  const style = { '--from': `var(--${from})`, '--to': `var(--${to})` }
  if (variant === 'wave') {
    return (
      <div className="divider divider-wave" style={style} aria-hidden="true">
        <span className="wave-layer l1" />
        <span className="wave-layer l2" />
        <span className="wave-layer l3" />
      </div>
    )
  }
  const paths = {
    tilt: 'M0,100 L1440,0 L1440,100 Z',
    curve: 'M0,100 C360,0 1080,0 1440,100 Z',
  }
  return (
    <div className={`divider divider-${variant} ${flip ? 'is-flipped' : ''}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d={paths[variant]} style={{ fill: 'var(--to)' }} />
      </svg>
    </div>
  )
}
