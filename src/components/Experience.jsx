import { useEffect, useRef, useState } from 'react'
import { BsAward, BsBriefcase, BsCalendar3, BsMortarboard } from 'react-icons/bs'
import { certifications, education, experience } from '../data/portfolioData.js'
import useInView from '../hooks/useInView.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function TimelineItem({ job, i }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const side = i % 2 === 0 ? 'left' : 'right'
  return (
    <li ref={ref} className={`tl-item tl-${side} ${inView ? 'is-in' : ''}`}>
      <span className="tl-dot" aria-hidden="true">
        <BsBriefcase />
      </span>
      <article className="tl-card">
        <p className="tl-date">
          <BsCalendar3 aria-hidden="true" /> {job.date}
        </p>
        <h3>{job.role}</h3>
        <p className="tl-org">{job.org}</p>
        <ul className="tl-points">
          {job.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <ul className="tag-list list-unstyled">
          {job.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </article>
    </li>
  )
}

export default function Experience() {
  const listRef = useRef(null)
  const [fill, setFill] = useState(0)

  // The timeline's centre line fills in as you scroll through it.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = listRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const anchor = window.innerHeight * 0.6
      setFill(Math.min(1, Math.max(0, (anchor - r.top) / r.height)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="experience" className="section section-white experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" title="Work experience" align="center" sub="Internships and project-based work, most recent first." />

        <div className="timeline" ref={listRef}>
          <span className="tl-line" aria-hidden="true">
            <span className="tl-line-fill" style={{ transform: `scaleY(${fill})` }} />
          </span>
          <ol className="list-unstyled mb-0">
            {experience.map((job, i) => (
              <TimelineItem job={job} i={i} key={`${job.org}-${job.role}`} />
            ))}
          </ol>
        </div>

        <div className="row g-4 edu-certs">
          <div className="col-lg-5">
            <Reveal as="h3" className="sub-title" variant="left">
              <BsMortarboard aria-hidden="true" /> Education
            </Reveal>
            {education.map((ed) => (
              <Reveal variant="left" delay={120} key={ed.degree}>
                <article className="edu-card">
                  <span className="edu-date">{ed.date}</span>
                  <h4>{ed.degree}</h4>
                  <p>{ed.school}</p>
                  <p className="edu-gpa">{ed.points.join(' ')}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="col-lg-7">
            <Reveal as="h3" className="sub-title" variant="right">
              <BsAward aria-hidden="true" /> Certifications
            </Reveal>
            <ul className="list-unstyled cert-list">
              {certifications.map(({ title, issuer, icon: Icon }, i) => (
                <Reveal as="li" variant="right" delay={120 + i * 120} key={title}>
                  <div className="cert-card">
                    <span className="cert-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span>
                      <strong>{title}</strong>
                      <small>{issuer}</small>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
