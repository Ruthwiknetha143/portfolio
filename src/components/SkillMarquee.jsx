import { marqueeRows } from '../data/portfolioData.js'
import SkillBadge from './SkillBadge.jsx'

// Two crossing ribbons of logos scrolling in opposite directions. Pauses on hover.
export default function SkillMarquee() {
  return (
    <div className="marquee-wrap" aria-label="Technologies I work with">
      {marqueeRows.map((row, r) => (
        <div className={`marquee marquee-${r + 1}`} key={r}>
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul className="marquee-group list-unstyled" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                {row.map((name) => (
                  <li key={name}>
                    <SkillBadge name={name} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
