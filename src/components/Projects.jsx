import { additionalProject, projects } from '../data/portfolioData.js'
import useInView from '../hooks/useInView.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// The Linux project is shown as a terminal whose lines print one by one when it scrolls into view.
function TerminalCard() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const lines = [
    { cmd: true, text: `cd ~/${additionalProject.title.toLowerCase().replaceAll(' ', '-')}` },
    ...additionalProject.points.map((p) => ({ text: p })),
    { cmd: true, text: `echo "${additionalProject.tech.join(', ')}"` },
  ]
  return (
    <article ref={ref} className={`terminal ${inView ? 'is-in' : ''}`} aria-labelledby="extra-project-title">
      <div className="terminal-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <em>bash</em>
      </div>
      <div className="terminal-body">
        <h3 id="extra-project-title">{additionalProject.title}</h3>
        <p className="terminal-sub">Additional technical project</p>
        <ul className="list-unstyled mb-0">
          {lines.map((l, i) => (
            <li key={l.text} className={l.cmd ? 'is-cmd' : 'is-out'} style={{ '--i': i }}>
              {l.cmd ? <span className="prompt" aria-hidden="true">$</span> : <span className="ok" aria-hidden="true">✓</span>}
              {l.text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section-ink projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" title="Selected projects" tone="light" sub="Deployed applications and websites, each with a live link." />
        <div className="row g-4 g-xl-5">
          {projects.map((p, i) => (
            <Reveal className="col-md-6" variant="up" delay={(i % 2) * 140} key={p.title}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Reveal variant="zoom" className="mt-5">
          <TerminalCard />
        </Reveal>
      </div>
    </section>
  )
}
