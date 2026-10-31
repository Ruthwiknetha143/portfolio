import { Fragment } from 'react'
import useInView from '../hooks/useInView.js'

// Big display heading: words slide up out of a mask, then a hand-drawn underline strokes in.
export default function SectionHeading({ id, title, sub, align = 'start', tone = 'dark' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const words = title.split(' ')
  return (
    <div ref={ref} className={`sec-heading text-${align} tone-${tone} ${inView ? 'is-in' : ''}`}>
      <h2 id={id}>
        {words.map((w, i) => (
          <Fragment key={`${w}-${i}`}>
            <span className="word-mask">
              <span className="word" style={{ '--i': i }}>
                {w}
              </span>
            </span>
            {i < words.length - 1 && ' '}
          </Fragment>
        ))}
      </h2>
      <svg className="sec-underline" viewBox="0 0 220 18" aria-hidden="true" preserveAspectRatio="none">
        <path d="M3 13 C 40 3, 80 3, 110 9 S 180 16, 217 5" pathLength="1" />
      </svg>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  )
}
