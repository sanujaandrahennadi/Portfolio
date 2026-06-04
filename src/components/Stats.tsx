import { BarChart3, Brain, Code2, Layers } from 'lucide-react'
import { stats } from '../data/portfolio'

const iconMap = {
  chart: BarChart3,
  brain: Brain,
  layers: Layers,
  github: Code2,
}

export function Stats() {
  return (
    <section id="stats" className="section-gradient py-16">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap]
          return (
            <div
              key={stat.label}
              className="glass-card flex flex-col items-center rounded-2xl px-6 py-8 text-center transition hover:border-accent/40"
            >
              <Icon className="mb-4 text-accent-light" size={28} />
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="mt-2 text-sm text-slate-400">{stat.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
