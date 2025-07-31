import { useState } from 'react'
import { Header, HeroSection, ProjectsSection, AboutSection, ContactSection } from './components'

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
