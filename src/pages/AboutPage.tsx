import { useEffect } from 'react'
import { About } from '../components/About'

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="section-gradient min-h-screen pt-16">
      <About />
    </main>
  )
}
