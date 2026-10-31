import { BsDownload, BsEnvelope } from 'react-icons/bs'
import { about, images, profile, stats } from '../data/portfolioData.js'
import { scrollToSection } from '../utils/scroll.js'
import Counter from './Counter.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import SkillMarquee from './SkillMarquee.jsx'

const RING_TEXT = 'Full stack developer • React • FastAPI • MySQL • '

export default function About() {
  return (
    <section id="about" className="section section-paper about" aria-labelledby="about-title">
      <SkillMarquee />

      <div className="container">
        <div className="row align-items-center gy-5 gx-lg-5">
          <div className="col-lg-5">
            <div className="about-media">
              <Reveal variant="clip" className="about-photo">
                <img src={images.about} alt="Laptop on a desk showing a code editor" loading="lazy" width="1200" height="800" />
              </Reveal>
              <Reveal variant="zoom" delay={500} className="about-ring" aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path id="ring-path" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                  </defs>
                  <text>
                    <textPath href="#ring-path">{RING_TEXT}</textPath>
                  </text>
                </svg>
                <span className="about-ring-core">{profile.initials}</span>
              </Reveal>
            </div>
          </div>

          <div className="col-lg-7">
            <SectionHeading id="about-title" title="About me" />
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={p.slice(0, 20)} delay={i * 120} className="lead-copy">
                {p}
              </Reveal>
            ))}

            <ul className="about-highlights list-unstyled stagger">
              {about.highlights.map(({ icon: Icon, text }, i) => (
                <Reveal as="li" variant="left" delay={200 + i * 110} key={text}>
                  <span className="hl-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  {text}
                </Reveal>
              ))}
            </ul>

            <Reveal className="d-flex flex-wrap gap-3" delay={420}>
              <a className="btn btn-glow" href={profile.resumeFile} download>
                <BsDownload aria-hidden="true" /> Download resume
              </a>
              <a
                className="btn btn-outline-ink"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                <BsEnvelope aria-hidden="true" /> Get in touch
              </a>
            </Reveal>
          </div>
        </div>

        <ul className="row g-3 g-md-4 stats list-unstyled">
          {stats.map((s, i) => (
            <Reveal as="li" variant="zoom" delay={i * 110} className="col-6 col-lg-3" key={s.label}>
              <div className="stat-card">
                <span className="stat-value">
                  <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
