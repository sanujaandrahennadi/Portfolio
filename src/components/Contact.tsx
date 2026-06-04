import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { contact, personal } from '../data/portfolio'
import { LinkedInIcon } from './icons/SocialIcons'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    )
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(initialForm)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const infoCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: undefined,
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: personal.linkedinHandle,
      href: personal.linkedin,
    },
  ]

  return (
    <section className="relative py-16 pb-20 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(37,99,235,0.15),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {contact.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            {infoCards.map((card) => {
              const Icon = card.icon
              const content = (
                <div className="glass-card flex items-center gap-4 rounded-2xl p-5 transition hover:border-accent/40">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-light">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {card.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-white">
                      {card.value}
                    </p>
                  </div>
                </div>
              )

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={card.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              )
            })}

            <div className="mt-2 rounded-2xl bg-gradient-to-br from-accent to-cyan-500 p-6 shadow-lg shadow-accent/20">
              <h3 className="text-lg font-bold text-white">
                {contact.connectTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-50/90">
                {contact.connectText}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={contact.form.namePlaceholder}
                  required
                  className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={contact.form.emailPlaceholder}
                  required
                  className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder={contact.form.subjectPlaceholder}
                className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={contact.form.messagePlaceholder}
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:opacity-95 hover:shadow-accent/40"
            >
              <Send size={18} />
              {submitted ? 'Opening your email client...' : contact.form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
