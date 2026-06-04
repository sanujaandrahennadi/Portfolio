import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'
import { personal } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {personal.name}. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          Made with <span className="text-red-400">♥</span> by {personal.name.split(' ')[0]}
        </p>
        <div className="flex gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-slate-500 transition hover:text-white"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
