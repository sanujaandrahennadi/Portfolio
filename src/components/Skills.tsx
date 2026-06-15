import { skillsPage } from '../data/portfolio'
import { SkillIcon } from './SkillIcon'

export function Skills() {
  const { learning } = skillsPage

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {skillsPage.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {skillsPage.subtitle}
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {skillsPage.categories.map((category) => (
            <div key={category.title}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-cyan-400" />
                <h2 className="text-lg font-semibold text-white">
                  {category.title}
                </h2>
              </div>
              <div className="glass-card rounded-2xl px-6 py-8 sm:px-10">
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
                  {category.skills.map((skill) => (
                    <SkillIcon key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-to-r from-accent to-cyan-500 p-8 text-center sm:p-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {learning.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-50/90">
            {learning.text}
          </p>
        </div>
      </div>
    </div>
  )
}
