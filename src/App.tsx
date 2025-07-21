import { useState } from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'

function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('home');

  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      <Header activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default App
