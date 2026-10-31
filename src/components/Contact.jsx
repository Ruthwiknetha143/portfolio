import { useActionState, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { BsCheck2Circle, BsClipboard, BsEnvelope, BsGithub, BsLinkedin, BsSend, BsTelephone } from 'react-icons/bs'
import { images, profile } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const empty = { name: '', email: '', message: '' }

// React 19 form action: validates, then opens the visitor's email app with the message pre-filled.
function sendAction(_prev, formData) {
  const values = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  }
  const errors = {}
  if (!values.name) errors.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter an email address like name@example.com.'
  if (values.message.length < 10) errors.message = 'Write at least 10 characters.'
  if (Object.keys(errors).length) return { values, errors, sent: false }

  const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
  const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  return { values: empty, errors: {}, sent: true }
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="btn btn-glow w-100 send-btn" disabled={pending}>
      <BsSend aria-hidden="true" /> {pending ? 'Opening email…' : 'Send message'}
    </button>
  )
}

function Field({ name, label, type = 'text', state, autoComplete, textarea = false }) {
  const err = state.errors[name]
  const common = {
    id: `c-${name}`,
    name,
    placeholder: label,
    defaultValue: state.values[name],
    autoComplete,
    className: `form-control ${err ? 'is-invalid' : ''}`,
    'aria-invalid': err ? 'true' : undefined,
    'aria-describedby': err ? `c-${name}-err` : undefined,
  }
  return (
    <div className="form-floating mb-3">
      {textarea ? <textarea {...common} style={{ height: 150 }} /> : <input type={type} {...common} />}
      <label htmlFor={`c-${name}`}>{label}</label>
      {err && (
        <div id={`c-${name}-err`} className="invalid-feedback">
          {err}
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  const [state, formAction] = useActionState(sendAction, { values: empty, errors: {}, sent: false })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const channels = [
    { icon: BsEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: BsTelephone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { icon: BsLinkedin, label: 'LinkedIn', value: 'ruthwik-pendem', href: profile.linkedin, external: true },
    { icon: BsGithub, label: 'GitHub', value: 'Ruthwiknetha143', href: profile.github, external: true },
  ]

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact-photo" style={{ backgroundImage: `url(${images.contact})` }} aria-hidden="true" />
      <div className="container position-relative">
        <div className="row gy-5 gx-lg-5 align-items-start">
          <div className="col-lg-6">
            <SectionHeading
              id="contact-title"
              title="Let’s work together"
              tone="light"
              sub="Open to full stack and frontend opportunities. Email is the quickest way to reach me."
            />
            <ul className="list-unstyled channel-list">
              {channels.map(({ icon: Icon, label, value, href, external }, i) => (
                <Reveal as="li" variant="left" delay={i * 100} key={label}>
                  <a className="channel" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <span className="channel-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span>
                      <small>{label}</small>
                      {value}
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={450}>
              <button type="button" className="btn btn-ghost btn-sm" onClick={copyEmail}>
                {copied ? <BsCheck2Circle aria-hidden="true" /> : <BsClipboard aria-hidden="true" />}{' '}
                {copied ? 'Email copied' : 'Copy email address'}
              </button>
              <span className="visually-hidden" role="status">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal variant="zoom" delay={150}>
              <form action={formAction} className="contact-form" noValidate>
                <h3>Send a message</h3>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <Field name="name" label="Your name" autoComplete="name" state={state} />
                  </div>
                  <div className="col-sm-6">
                    <Field name="email" label="Your email" type="email" autoComplete="email" state={state} />
                  </div>
                </div>
                <Field name="message" label="Message" textarea state={state} />
                <p className="form-note">This opens your email app with the message ready to send.</p>
                <SubmitButton />
                <p className="form-status" role="status">
                  {state.sent && (
                    <>
                      <BsCheck2Circle aria-hidden="true" /> Your email app should now be open with the message ready.
                    </>
                  )}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
