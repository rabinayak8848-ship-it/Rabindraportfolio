import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiFolder, FiUsers, FiStar } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

const USERNAME = 'rabinayak8848-ship-it'

export default function GitHubStats() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((json) => setData(json))
      .catch(() => setError(true))
  }, [])

  const stats = [
    { icon: FiFolder, label: 'Public Repos', value: data?.public_repos ?? '—' },
    { icon: FiUsers, label: 'Followers', value: data?.followers ?? '—' },
    { icon: FiStar, label: 'Following', value: data?.following ?? '—' },
  ]

  return (
    <section id="github" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="GitHub" title="Open source activity" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            {data?.avatar_url && (
              <img
                src={data.avatar_url}
                alt="GitHub avatar"
                className="w-16 h-16 rounded-2xl border border-white/10"
              />
            )}
            <div className="text-center sm:text-left">
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white flex items-center gap-2 justify-center sm:justify-start">
                <FiGithub /> {data?.name || 'Rabindra Kumar Nayak'}
              </h3>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="text-sm text-royal dark:text-cyan-light hover:underline"
              >
                github.com/{USERNAME}
              </a>
              {error && (
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  live stats unavailable right now — visit the profile directly
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl py-5 bg-royal/5 dark:bg-white/5"
              >
                <stat.icon className="mx-auto mb-2 text-cyan" size={18} />
                <p className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
