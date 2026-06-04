import { GraduationCap } from 'lucide-react'
import { homeExperience } from '../../data/portfolio'

export function HomeExperience() {
  return (
    <section className="section-gradient py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {homeExperience.heading}
          </h2>
          <p className="mt-4 text-slate-400">{homeExperience.subtitle}</p>
        </div>

        <div className="relative mt-14">
          <div className="timeline-line absolute top-0 bottom-0 left-[11px] w-0.5" />

          <ul className="space-y-10">
            {homeExperience.items.map((item) => (
              <li key={item.title} className="relative pl-12">
                <span className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-navy-900">
                  <span className="h-2 w-2 rounded-full bg-accent-light" />
                </span>

                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-cyan-400">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">{item.period}</p>
                    </div>
                    <GraduationCap
                      className="shrink-0 text-accent-light"
                      size={22}
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
