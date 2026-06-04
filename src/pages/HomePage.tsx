import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Cta } from '../components/Cta'
import { FeaturedProjects } from '../components/home/FeaturedProjects'
import { HomeAbout } from '../components/home/HomeAbout'
import { HomeExperience } from '../components/home/HomeExperience'
import { Hero } from '../components/Hero'
import { Stats } from '../components/Stats'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(timer)
  }, [location.hash])

  return (
    <main>
      <Hero />
      <Stats />
      <HomeAbout />
      <FeaturedProjects />
      <HomeExperience />
      <Cta />
    </main>
  )
}
