import { BsArrowRight, BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs'
import { hero, images, profile } from '../data/portfolioData.js'
import { useMagnetic } from '../hooks/usePointerFx.js'
import { scrollToSection } from '../utils/scroll.js'
import HeroVisual from './HeroVisual.jsx'
import ParticleField from './ParticleField.jsx'
import SkillBadge from './SkillBadge.jsx'
import TypeRotator from './TypeRotator.jsx'

// Letters rise into place one after another (delay set per letter through --i).
function SplitName({ text, offset = 0 }) {
  return (
    <span className="name-line" aria-hidden="true">
      {[...text].map((ch, i) => (
        <span className="ch" style={{ '--i': i + offset }} key={i}>
          {ch}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const magnetic = useMagnetic(0.25)

  // Cursor spotlight: a soft glow that follows the pointer across the hero.
  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`)
  }

  return (
    <section id="home" className="hero" onPointerMove={onPointerMove} aria-label="Introduction">
      <div className="hero-photo" style={{ backgroundImage: `url(${images.hero})` }} aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-blob blob-a" aria-hidden="true" />
      <div className="hero-blob blob-b" aria-hidden="true" />
      <ParticleField />
      <div className="hero-spotlight" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="row align-items-center gy-4 gy-md-5">
          <div className="col-md-7 col-lg-7 hero-copy">
            <p className="hero-status hero-in" style={{ '--d': '0ms' }}>
              <span className="live-dot" aria-hidden="true" />
              Open to full stack and frontend roles
            </p>

            <p className="hero-hello hero-in" style={{ '--d': '120ms' }}>
              {hero.greeting}
            </p>
            <h1 className="hero-name">
              <span className="visually-hidden">{profile.name}</span>
              <SplitName text={profile.firstName} />
              <SplitName text={profile.lastName} offset={profile.firstName.length} />
            </h1>

            <p className="hero-role hero-in" style={{ '--d': '900ms' }}>
              <span className="role-prompt" aria-hidden="true">
                &gt;
              </span>
              <TypeRotator words={hero.roles} />
            </p>

            <p className="hero-intro hero-in" style={{ '--d': '1050ms' }}>
              {hero.intro}
            </p>

            <div className="hero-ctas hero-in" style={{ '--d': '1200ms' }}>
              <a
                {...magnetic}
                className="btn btn-glow"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                See my projects <BsArrowRight aria-hidden="true" />
              </a>
              <a className="btn btn-ghost" href={profile.resumeFile} download>
                <BsDownload aria-hidden="true" /> Download resume
              </a>
              <span className="hero-socials">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <BsGithub aria-hidden="true" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <BsLinkedin aria-hidden="true" />
                </a>
              </span>
            </div>

            <div className="hero-core">
              <p className="hero-core-label hero-in" style={{ '--d': '1350ms' }}>
                Core skills
              </p>
              <ul className="hero-core-list list-unstyled">
                {hero.coreSkills.map((s, i) => (
                  <li key={s} className="core-pop" style={{ '--i': i }}>
                    <SkillBadge name={s} className="is-dark" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-5 col-lg-5 order-first order-md-last hero-in hero-visual-col" style={{ '--d': '500ms' }}>
            <HeroVisual />
          </div>
        </div>
      </div>

      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to About"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('about')
        }}
      >
        <span className="mouse" aria-hidden="true">
          <span className="wheel" />
        </span>
      </a>
    </section>
  )
}
