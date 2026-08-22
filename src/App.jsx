import { Routes, Route } from 'react-router-dom'

import CreatorPage from './components/creator/CreatorPage'
import CinematicHero from './components/experience/CinematicHero'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<CreatorPage />}
      />

      <Route
        path="/raksha/:name"
        element={<RakshaExperience />}
      />

      <Route
        path="*"
        element={<CreatorPage />}
      />
    </Routes>
  )
}

function RakshaExperience() {
  return <CinematicHeroRoute />
}

function CinematicHeroRoute() {
  const pathname = window.location.pathname

  const encodedName = pathname
    .split('/')
    .filter(Boolean)[1]

  let sisterName = ''

  try {
    sisterName = encodedName
      ? decodeURIComponent(encodedName)
      : ''
  } catch {
    sisterName = ''
  }

  sisterName = sisterName
    .trim()
    .replace(/\s+/g, ' ')

  if (!sisterName) {
    return <CreatorPage />
  }

  return (
    <CinematicHero
      sisterName={sisterName}
    />
  )
}

export default App