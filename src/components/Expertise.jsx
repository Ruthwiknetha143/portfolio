import { useEffect, useRef } from 'react'
import { expertise } from '../data/portfolioData.js'
import useReducedMotion from '../hooks/useReducedMotion.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import SkillBadge from './SkillBadge.jsx'

// Image drifts slightly against the scroll direction (parallax) while its row is on screen.
function ParallaxImage({ src, alt }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return undefined
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
      el.style.setProperty('--py', `${Math.max(-1, Math.min(1, p)) * -28}px`)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [reduced])
  return (
    <div className="xp-img" ref={ref}>
      <img src={src} alt={alt} loading="lazy" width="1100" height="733" />
    </div>
  )
}

export default function Expertise() {
  return (
    <section id="expertise" className="section section-paper expertise" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeading id="expertise-title" title="What I work on" sub="Four areas, each backed by projects or internship work." />
        {expertise.map((e, i) => {
          const Icon = e.icon
          const reverse = i % 2 === 1
          return (
            <div className={`row align-items-center gy-4 gx-lg-5 xp-row ${reverse ? 'flex-lg-row-reverse' : ''}`} key={e.title}>
              <div className="col-lg-6">
                <Reveal variant="clip" className="xp-media">
                  <ParallaxImage src={e.image} alt={`${e.title}: illustrative photo`} />
                  <span className="xp-badge" aria-hidden="true">
                    <Icon />
                  </span>
                </Reveal>
              </div>
              <div className="col-lg-6">
                <Reveal variant={reverse ? 'left' : 'right'} delay={120}>
                  <h3 className="xp-title">{e.title}</h3>
                  <p className="xp-text">{e.text}</p>
                  <ul className="xp-tech list-unstyled">
                    {e.tech.map((t, k) => (
                      <li key={t} style={{ '--i': k }}>
                        <SkillBadge name={t} />
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
