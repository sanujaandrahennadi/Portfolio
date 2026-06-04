import { BarChart3, Brain, LineChart } from 'lucide-react'
import { homeAbout } from '../../data/portfolio'

const iconMap = {
  chart: BarChart3,
  brain: Brain,
  viz: LineChart,
}

export function HomeAbout() {
  return (
    <section className="section-gradient py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {homeAbout.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white">Technical Background</h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
              {homeAbout.background.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white">What I Do</h3>
            <ul className="mt-6 space-y-6">
              {homeAbout.whatIDo.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent-light">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-400">
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
    </section>
  )
}
