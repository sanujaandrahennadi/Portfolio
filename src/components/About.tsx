import {
  Award,
  Briefcase,
  CircleCheck,
  Download,
  GraduationCap,
} from 'lucide-react'
import { aboutPage, personal } from '../data/portfolio'

const metricColors = {
  blue: 'text-blue-400',
  teal: 'text-cyan-400',
  green: 'text-emerald-400',
  lime: 'text-lime-400',
}

const timelineIcons = {
  internship: Briefcase,
  education: GraduationCap,
  school: Award,
}

export function About() {
  const { intro, highlights } = aboutPage

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {aboutPage.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {aboutPage.subtitle}
          </p>
          <a
            href={personal.cvUrl}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-accent/10"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="glass-card mt-14 rounded-2xl p-8 sm:p-10">
          <p className="text-base leading-relaxed text-slate-300">
            I&apos;m{' '}
            <strong className="text-white">{personal.name}</strong>, an
            undergraduate{' '}
            <strong className="text-white">
              {intro.role} @ {intro.institution}
            </strong>{' '}
            {intro.paragraph}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ul className="space-y-4">
              {highlights.left.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-400">
                  <CircleCheck
                    className="mt-0.5 shrink-0 text-cyan-400"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {highlights.right.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-400">
                  <CircleCheck
                    className="mt-0.5 shrink-0 text-cyan-400"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Achievement Metrics
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-card rounded-2xl px-6 py-8 text-center transition hover:border-accent/40"
              >
                <p
                  className={`text-3xl font-bold ${metricColors[metric.color]}`}
                >
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            {aboutPage.timelineHeading}
          </h2>

          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="timeline-line absolute top-0 bottom-0 left-[19px] w-0.5 sm:left-[23px]" />

            <ul className="space-y-8">
              {aboutPage.timeline.map((item) => {
                const Icon = timelineIcons[item.type]
                return (
                  <li key={item.title} className="relative pl-14 sm:pl-16">
                    <span className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-navy-900 sm:h-12 sm:w-12">
                      <Icon className="text-accent-light" size={20} />
                    </span>

                    <div className="glass-card rounded-2xl p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-cyan-400">
                            {item.subtitle}
                          </p>
                        </div>
                        <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
