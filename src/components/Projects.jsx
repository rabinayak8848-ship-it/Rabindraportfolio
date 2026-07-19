import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiSearch } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

const projects = [
  {
    id: 'salon-master',
    title: 'Salon Master',
    description:
      'A modern salon management website with a clean booking-friendly interface, built to streamline how salons showcase services and manage appointments.',
    tech: ['React.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
    demo: 'https://salon-master-virid.vercel.app/',
    github: 'https://github.com/rabinayak8848-ship-it/Salon-Master',
    accent: 'from-royal to-cyan',
  },
  {
    id: 'health-master',
    title: 'Health Minister',
    description:
      'A healthcare-related web application focused on presenting patient and service information through a simple, accessible interface.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    demo: 'https://health-master-omega.vercel.app/',
    github: 'https://github.com/rabinayak8848-ship-it',
    accent: 'from-cyan to-royal',
  },
]

const allTech = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tech)))]

export default function Projects() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === 'All' || p.tech.includes(filter)
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of projects where I've applied React, Django, and modern frontend tooling to solve real problems."
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-11 pr-4 py-3 rounded-xl glass text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                data-cursor="link"
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors ${
                  filter === tech
                    ? 'bg-gradient-to-r from-royal to-cyan text-white'
                    : 'glass text-slate-600 dark:text-slate-300'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className={`h-36 bg-gradient-to-br ${project.accent} relative flex items-center justify-center`}>
                  <span className="font-display text-white/90 text-2xl font-bold tracking-tight">
                    {project.title}
                  </span>
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-royal/10 text-royal dark:bg-cyan/10 dark:text-cyan-light"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-royal dark:text-cyan-light hover:underline"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:underline"
                    >
                      <FiGithub /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 mt-10 font-mono text-sm">
            No projects match "{query}".
          </p>
        )}
      </div>
    </section>
  )
}
