import { Moon, Sun } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks, personal, type NavLink } from '../data/portfolio'

type Props = {
  activeSection: string
  isLight: boolean
  onToggleTheme: () => void
}

function isPageLink(link: NavLink): link is { id: string; label: string; path: string } {
  return 'path' in link
}

export function Navbar({ activeSection, isLight, onToggleTheme }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleSectionNav = (sectionId: string) => {
    if (isHome) {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    navigate(sectionId === 'home' ? '/' : `/#${sectionId}`)
  }

  const isActive = (link: NavLink) => {
    if (isPageLink(link)) return location.pathname === link.path
    return isHome && activeSection === link.section
  }

  const linkClass = (active: boolean) =>
    `relative text-sm font-medium transition-colors ${
      active
        ? 'text-white nav-link-active'
        : isLight
          ? 'text-slate-600 hover:text-slate-900'
          : 'text-slate-400 hover:text-white'
    }`

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            {personal.initials}
          </span>
          <span
            className={`text-sm font-semibold ${isLight ? 'text-accent' : 'text-cyan-400'}`}
          >
            Portfolio
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              {isPageLink(link) ? (
                <Link to={link.path} className={linkClass(isActive(link))}>
                  {link.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSectionNav(link.section)}
                  className={linkClass(isActive(link))}
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onToggleTheme}
          className={`rounded-lg p-2 transition-colors ${
            isLight
              ? 'text-slate-600 hover:bg-slate-200'
              : 'text-slate-400 hover:bg-white/10 hover:text-white'
          }`}
          aria-label="Toggle theme"
        >
          {isLight ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </nav>
    </header>
  )
}
