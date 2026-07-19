import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import profile from '../assets/images/profile.jpeg'

const roles = [
  'Python Full Stack Developer',
  'React Developer',
  'Django Developer',
  'Software Engineer',
]

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full glass text-cyan mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            open to internship opportunities
          </span>

          <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
            Hi, I&apos;m <span className="text-gradient">Rabindra Kumar Nayak</span>
          </h1>

          <div className="mt-4 h-9 font-mono text-lg sm:text-xl text-royal dark:text-cyan-light">
            {typed}
            <span className="type-caret h-6 align-middle" />
          </div>

          <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            I am an MCA student passionate about software development, building modern
            web applications, solving problems, and continuously learning new
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor="link"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-royal to-cyan text-white font-medium shadow-glow hover:shadow-glow-cyan transition-shadow"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume/Rabindra_Kumar_Nayak_Resume.pdf"
              download
              data-cursor="link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium text-slate-800 dark:text-white hover:border-cyan/50 transition-colors"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/rabinayak8848-ship-it', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:nayakrabindrakumar023@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-cyan hover:border-cyan/50 transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-royal/40 to-cyan/30 blur-2xl" />
              <div className="relative glass rounded-3xl p-3 shadow-glow">
                <img
                  src={profile}
                  alt="Rabindra Kumar Nayak"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Floating terminal card — signature element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden sm:block absolute -bottom-8 -left-10 w-64 glass rounded-xl overflow-hidden shadow-xl"
            >
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-2 text-[11px] font-mono text-slate-400">status.py</span>
              </div>
              <div className="p-3 font-mono text-[11px] leading-relaxed text-slate-300">
                <p><span className="text-cyan">student</span> = <span className="text-yellow-300">"MCA"</span></p>
                <p><span className="text-cyan">stack</span> = [<span className="text-yellow-300">"Python"</span>, <span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Django"</span>]</p>
                <p><span className="text-cyan">available</span> = <span className="text-royal-light">True</span></p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
