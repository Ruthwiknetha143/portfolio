import useInView from '../hooks/useInView.js'

// Scroll-triggered entrance. variant: up | down | left | right | zoom | blur | clip
// `delay` is in ms. Children can also use the CSS variable --i for staggering (see .stagger in main.css).
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
