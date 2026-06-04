import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProjects, projectsPage } from '../../data/portfolio'
import { GitHubIcon } from '../icons/SocialIcons'

export function FeaturedProjects() {
  const projects = projectsPage.projects.slice(0, featuredProjects.count)

  return (
    <section className="section-gradient py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {featuredProjects.heading}
          </h2>
          <p className="mt-4 text-slate-400">{featuredProjects.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card overflow-hidden rounded-2xl transition hover:border-accent/40"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.imageGradient ?? 'from-blue-600/40 to-navy-900/60'}`}
              >
                <span className="text-5xl opacity-30" aria-hidden>
                  📊
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-5">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    <GitHubIcon size={16} />
                    Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-light"
          >
            View All Projects
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
