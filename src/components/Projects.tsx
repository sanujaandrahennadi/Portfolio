import { useMemo, useState } from 'react'
import { Filter } from 'lucide-react'
import {
  categoryBadgeStyles,
  filterProjects,
  projectsPage,
  type Project,
} from '../data/portfolio'
import { GitHubIcon } from './icons/SocialIcons'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card flex flex-col overflow-hidden rounded-2xl transition hover:border-accent/40">
      <div
        className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.imageGradient ?? 'from-blue-600/40 to-navy-900/60'}`}
      >
        <span className="text-6xl opacity-25" aria-hidden>
          📊
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryBadgeStyles[project.category]}`}
          >
            {project.category}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-slate-500">Completion</span>
            <span className="font-medium text-cyan-400">
              {project.completion}%
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400 transition-all"
              style={{ width: `${project.completion}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-accent/10"
        >
          <GitHubIcon size={18} />
          Code
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof projectsPage.filters)[number]>('All')

  const filtered = useMemo(
    () => filterProjects(projectsPage.projects, activeFilter),
    [activeFilter]
  )

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {projectsPage.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {projectsPage.subtitle}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Filter className="text-slate-500" size={18} aria-hidden />
          {projectsPage.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-slate-500">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}
