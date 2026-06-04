import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'

const homeSectionIds = ['home', 'stats']

const pageActiveMap: Record<string, string> = {
  '/about': 'about',
  '/contact': 'contact',
  '/projects': 'projects',
  '/skills': 'skills',
}

function AppRoutes() {
  const { isLight, toggle } = useTheme()
  const location = useLocation()
  const homeActive = useActiveSection(homeSectionIds)
  const activeSection =
    pageActiveMap[location.pathname] ?? homeActive

  return (
    <Routes>
      <Route
        element={
          <Layout
            activeSection={activeSection}
            isLight={isLight}
            onToggleTheme={toggle}
          />
        }
      >
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
