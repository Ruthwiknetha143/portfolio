import { iconFor } from '../data/portfolioData.js'

// Logo + name pill. Brand colour is applied to the icon only.
export default function SkillBadge({ name, className = '', style }) {
  const { Icon, color } = iconFor(name)
  return (
    <span className={`skill-badge ${className}`} style={style}>
      <Icon className="skill-badge-icon" style={color ? { color } : undefined} aria-hidden="true" />
      <span>{name}</span>
    </span>
  )
}
