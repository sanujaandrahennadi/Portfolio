import { ChevronDown, Download, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'
import { personal, typewriterPhrases } from '../data/portfolio'
import { Particles } from './Particles'
import { Typewriter } from './Typewriter'

export function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen pt-16"
    >
      <Particles />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="z-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            {personal.role} @ {personal.institution}
          </p>

          <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>

          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            {personal.status}
          </span>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300">
            {personal.bio}
          </p>

          <Typewriter phrases={typewriterPhrases} />

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={personal.cvUrl}
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-light"
            >
              <Download size={18} />
              Download CV
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              <Mail size={18} />
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="profile-placeholder relative flex h-[320px] w-[280px] items-end justify-center overflow-hidden rounded-2xl sm:h-[400px] sm:w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
            <div className="relative z-10 flex flex-col items-center pb-8 text-center">
              <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full border-2 border-accent/40 bg-navy-800 text-4xl font-bold text-accent-light">
                {personal.initials}
              </div>
              <p className="text-sm text-slate-400">Add your photo later</p>
            </div>
          </div>

          <aside className="absolute -right-2 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-accent/50 hover:bg-accent/20 hover:text-white"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-accent/50 hover:bg-accent/20 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-accent/50 hover:bg-accent/20 hover:text-white"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </aside>
        </div>
      </div>

      <a
        href="#stats"
        className="scroll-chevron absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>

    </section>
  )
}
