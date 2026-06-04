import { useEffect } from 'react'
import { Skills } from '../components/Skills'

export function SkillsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="section-gradient min-h-screen pt-16">
      <Skills />
    </main>
  )
}
