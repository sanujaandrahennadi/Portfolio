import { useEffect } from 'react'
import { Contact } from '../components/Contact'

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="section-gradient min-h-screen pt-16">
      <Contact />
    </main>
  )
}
