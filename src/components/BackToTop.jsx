import { BsArrowUp } from 'react-icons/bs'
import { scrollToSection } from '../utils/scroll.js'

const R = 22
const C = 2 * Math.PI * R

// Floating button with a ring that fills with scroll progress. Appears after the hero.
export default function BackToTop({ progress, y }) {
  const show = y > 600
  return (
    <button
      type="button"
      className={`back-to-top ${show ? 'is-shown' : ''}`}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => scrollToSection('home')}
    >
      <svg viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r={R} className="btt-track" />
        <circle cx="26" cy="26" r={R} className="btt-fill" strokeDasharray={C} strokeDashoffset={C * (1 - progress)} />
      </svg>
      <BsArrowUp aria-hidden="true" />
    </button>
  )
}
