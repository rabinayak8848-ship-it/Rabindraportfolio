import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-lg">
          <button
            onClick={() => handleClick('home')}
            className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white"
            data-cursor="link"
          >
            <span className="text-gradient">RKN</span>
            <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-mono text-sm ml-2">
              /dev
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1 font-medium text-sm">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleClick(link.id)}
                  data-cursor="link"
                  className={`relative px-3 py-2 rounded-lg transition-colors ${
                    active === link.id
                      ? 'text-cyan'
                      : 'text-slate-600 dark:text-slate-300 hover:text-royal dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-royal to-cyan rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              data-cursor="link"
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-cyan hover:bg-slate-200/40 dark:hover:bg-white/5 transition-colors"
            >
              {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-white"
              aria-label="Toggle menu"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              <ul className="flex flex-col p-3 gap-1">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleClick(link.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                        active === link.id
                          ? 'text-cyan bg-white/5'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
