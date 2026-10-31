import { useEffect, useState } from 'react'
import { BsDownload } from 'react-icons/bs'
import { navLinks, profile } from '../data/portfolioData.js'
import useActiveSection from '../hooks/useActiveSection.js'
import { scrollToSection } from '../utils/scroll.js'

const sectionIds = navLinks.map((l) => l.id)

// Bootstrap 5 navbar. Transparent over the hero, frosted glass once you scroll.
// The collapse is driven by React state, so Bootstrap's JS bundle isn't needed.
export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top site-nav ${scrolled || open ? 'is-scrolled' : ''}`} aria-label="Main navigation">
      <div className="container">
        <a className="navbar-brand brand" href="#home" onClick={(e) => go(e, 'home')}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <button
          type="button"
          className={`nav-toggle d-lg-none ${open ? 'is-open' : ''}`}
          aria-controls="primary-nav"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="primary-nav" className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link, i) => (
              <li key={link.id} className="nav-item" style={{ '--i': i }}>
                <a
                  className={`nav-link ${active === link.id ? 'active' : ''}`}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={(e) => go(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item nav-cta" style={{ '--i': navLinks.length }}>
              <a className="btn btn-glow btn-sm" href={profile.resumeFile} download>
                <BsDownload aria-hidden="true" /> Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
