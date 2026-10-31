import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { useTilt } from '../hooks/usePointerFx.js'
import SkillBadge from './SkillBadge.jsx'

const host = (url) => {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

// Screenshot in a browser frame that tilts toward the cursor; a light glare follows the pointer.
export default function ProjectCard({ project }) {
  const { title, type, icon: Icon, tech, description, points, live, github, image } = project
  const tilt = useTilt(5)
  return (
    <article className="project-card" {...tilt}>
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <em>{live ? host(live) : title}</em>
        </div>
        <div className="browser-view">
          {image ? (
            <img src={image} alt={`${title} home page screenshot`} loading="lazy" width="1400" height="676" />
          ) : (
            <div className="project-placeholder" aria-hidden="true">
              <Icon />
            </div>
          )}
          {live && (
            <a className="browser-overlay" href={live} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
              <span>
                Visit live site <BsBoxArrowUpRight />
              </span>
            </a>
          )}
        </div>
        <span className="card-glare" aria-hidden="true" />
      </div>

      <div className="project-body">
        <p className="project-type">
          <Icon aria-hidden="true" /> {type}
        </p>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <ul className="project-points">
          {points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
        <ul className="project-tech list-unstyled">
          {tech.map((t) => (
            <li key={t}>
              <SkillBadge name={t} className="is-dark" />
            </li>
          ))}
        </ul>
        <div className="project-links">
          {live && (
            <a className="btn btn-glow btn-sm" href={live} target="_blank" rel="noopener noreferrer">
              <BsBoxArrowUpRight aria-hidden="true" /> Live site<span className="visually-hidden">: {title}</span>
            </a>
          )}
          {github && (
            <a className="btn btn-ghost btn-sm" href={github} target="_blank" rel="noopener noreferrer">
              <BsGithub aria-hidden="true" /> Source code<span className="visually-hidden">: {title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
