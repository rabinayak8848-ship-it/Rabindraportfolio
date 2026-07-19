import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import GitHubStats from './components/GitHubStats'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-navy text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Loader show={loading} />
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <GitHubStats />
        <Resume />
        <Contact />
        <Footer />
      </motion.main>

      <ScrollToTop />
    </div>
  )
}
