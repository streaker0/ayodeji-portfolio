// app/page.tsx
import Navigation from '../components/Navigation'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  )
}