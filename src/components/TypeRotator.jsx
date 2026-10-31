import { useEffect, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'

// Types each phrase, holds it, deletes it, moves on. Screen readers get the full list once.
export default function TypeRotator({ words, typeMs = 70, deleteMs = 35, holdMs = 1800 }) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return undefined
    const word = words[index]
    let delay = deleting ? deleteMs : typeMs
    if (!deleting && text === word) delay = holdMs
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs, reduced])

  return (
    <span className="type-rotator">
      <span className="visually-hidden">{words.join(', ')}</span>
      <span aria-hidden="true">
        {reduced ? words[0] : text}
        <span className="type-caret" />
      </span>
    </span>
  )
}
