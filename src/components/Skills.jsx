import { useLayoutEffect, useRef, useState } from 'react'
import { iconFor, skillGroups, strengths } from '../data/portfolioData.js'
import { useTilt } from '../hooks/usePointerFx.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function SkillTile({ name, i }) {
  const { Icon, color } = iconFor(name)
  const tilt = useTilt(10)
  return (
    <li className="skill-tile" style={{ '--i': i, '--brand': color ?? '#e9ecf5' }} {...tilt}>
      <span className="skill-tile-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="skill-tile-name">{name}</span>
    </li>
  )
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const group = skillGroups[active]

  // Slide the highlight pill under the selected tab.
  useLayoutEffect(() => {
    const measure = () => {
      const el = tabRefs.current[active]
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  const onKeyDown = (e) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + skillGroups.length) % skillGroups.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="skills" className="section section-ink skills" aria-labelledby="skills-title">
      <div className="skills-glow" aria-hidden="true" />
      <div className="container position-relative">
        <SectionHeading id="skills-title" title="Skills & tools" tone="light" sub="Grouped the way they appear on my resume. Pick a group to see the tools in it." />

        <Reveal className="skill-tabs-wrap">
          <div className="skill-tabs" role="tablist" aria-label="Skill groups" onKeyDown={onKeyDown}>
            <span className="skill-tabs-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width }} aria-hidden="true" />
            {skillGroups.map((g, i) => {
              const Icon = g.icon
              return (
                <button
                  key={g.title}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="skills-panel"
                  tabIndex={active === i ? 0 : -1}
                  className={`skill-tab ${active === i ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <Icon aria-hidden="true" /> {g.title}
                  <span className="skill-tab-count">{g.items.length}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div id="skills-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
          {/* key forces a remount so the tiles replay their entrance on every tab change */}
          <ul className="skill-grid list-unstyled" key={group.title}>
            {group.items.map((name, i) => (
              <SkillTile name={name} i={i} key={name} />
            ))}
          </ul>
        </div>

        <div className="strengths">
          <Reveal as="h3" className="strengths-title">
            What I bring to a project
          </Reveal>
          <ul className="row g-3 g-md-4 list-unstyled mb-0">
            {strengths.map(({ label, icon: Icon }, i) => (
              <Reveal as="li" variant="up" delay={i * 90} className="col-sm-6 col-lg-4" key={label}>
                <div className="strength-card">
                  <span className="strength-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
