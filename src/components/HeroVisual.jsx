import { hero, iconFor, profile } from '../data/portfolioData.js'
import { useTilt } from '../hooks/usePointerFx.js'
import CodeCard from './CodeCard.jsx'

function Orbit({ names, className }) {
  return (
    <ul className={`orbit ${className} list-unstyled`} aria-hidden="true">
      {names.map((name, i) => {
        const { Icon, color } = iconFor(name)
        return (
          <li className="orbit-item" key={name} style={{ '--a': `${(360 / names.length) * i}deg` }}>
            <span className="orbit-icon" title={name}>
              <Icon style={color ? { color } : undefined} />
            </span>
          </li>
        )
      })}
    </ul>
  )
}

// Portrait inside a morphing gradient blob, two counter-rotating orbits of tech logos, and floating cards.
export default function HeroVisual() {
  const tilt = useTilt(6)
  return (
    <div className="hero-visual" {...tilt}>
      <div className="hero-visual-inner">
        <span className="orbit-ring ring-outer" aria-hidden="true" />
        <span className="orbit-ring ring-inner" aria-hidden="true" />
        <Orbit names={hero.orbitOuter} className="orbit-outer" />
        <Orbit names={hero.orbitInner} className="orbit-inner" />
        <div className="portrait">
          <div className="portrait-blob" aria-hidden="true" />
          <img src={profile.image} alt={profile.imageAlt} width="720" height="847" fetchPriority="high" />
        </div>
        <div className="float-chip chip-grad">
          <strong>B.Tech CSE</strong>
          <span>Cybersecurity, 2026</span>
        </div>
        <div className="float-chip chip-live">
          <span className="live-dot" aria-hidden="true" />
          <span>4 projects live</span>
        </div>
      </div>
      <CodeCard />
    </div>
  )
}
