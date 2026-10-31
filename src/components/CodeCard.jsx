import { useEffect, useMemo, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'

// A small editor window that types out a JS object describing Ruthwik, with syntax colours.
const LINES = [
  [['k', 'const '], ['v', 'dev'], ['p', ' = {']],
  [['p', '  '], ['a', 'name'], ['p', ': '], ['s', '"Ruthwik Pendem"'], ['p', ',']],
  [['p', '  '], ['a', 'stack'], ['p', ': ['], ['s', '"React"'], ['p', ', '], ['s', '"FastAPI"'], ['p', ', '], ['s', '"MySQL"'], ['p', '],']],
  [['p', '  '], ['a', 'deploys'], ['p', ': ['], ['s', '"Vercel"'], ['p', ', '], ['s', '"Render"'], ['p', '],']],
  [['p', '  '], ['a', 'openToWork'], ['p', ': '], ['k', 'true'], ['p', ',']],
  [['p', '};']],
]

export default function CodeCard({ startDelay = 1900, speed = 22 }) {
  const reduced = useReducedMotion()
  const total = useMemo(() => LINES.reduce((n, l) => n + l.reduce((m, [, t]) => m + t.length, 0), 0), [])
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) {
      setCount(total)
      return undefined
    }
    let interval = 0
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= total) {
            clearInterval(interval)
            return c
          }
          return c + 1
        })
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [reduced, total, speed, startDelay])

  let left = count
  return (
    <figure className="code-card" aria-label="Code snippet: Ruthwik's stack is React, FastAPI and MySQL, deployed on Vercel and Render">
      <div className="code-card-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <em>ruthwik.js</em>
      </div>
      <pre aria-hidden="true">
        {LINES.map((line, li) => {
          const parts = []
          for (const [cls, text] of line) {
            if (left <= 0) break
            const shown = text.slice(0, left)
            left -= shown.length
            parts.push(
              <span className={`tk-${cls}`} key={parts.length}>
                {shown}
              </span>,
            )
          }
          const active = left <= 0 && parts.length > 0
          return (
            <span className="code-line" key={li}>
              <span className="ln">{li + 1}</span>
              {parts}
              {active && <span className="code-caret" />}
              {'\n'}
            </span>
          )
        })}
      </pre>
    </figure>
  )
}
