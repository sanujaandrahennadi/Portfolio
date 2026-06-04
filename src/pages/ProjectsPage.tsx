import { useEffect } from 'react'
import { Projects } from '../components/Projects'

export function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="section-gradient min-h-screen pt-16">
      <Projects />
    </main>
  )
}
