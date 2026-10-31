import { BsEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { navLinks, profile } from '../data/portfolioData.js'
import { scrollToSection } from '../utils/scroll.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a
            className="brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            <span className="brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <ul className="footer-nav list-unstyled">
            {navLinks.slice(1).map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(l.id)
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer-social list-unstyled">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <BsGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <BsLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Send an email">
                <BsEnvelopeFill aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React 19, Bootstrap 5.3 and Vite 8.</p>
        </div>
      </div>
    </footer>
  )
}
