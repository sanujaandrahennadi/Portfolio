import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { TerminalFab } from './TerminalFab'

type Props = {
  activeSection: string
  isLight: boolean
  onToggleTheme: () => void
}

export function Layout({ activeSection, isLight, onToggleTheme }: Props) {
  return (
    <>
      <Navbar
        activeSection={activeSection}
        isLight={isLight}
        onToggleTheme={onToggleTheme}
      />
      <Outlet />
      <Footer />
      <TerminalFab />
    </>
  )
}
