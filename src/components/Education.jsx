import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

const education = [
  {
    degree: 'MCA — Computer Science',
    institute: 'Roland Institute of Technology',
    university: 'BPUT',
    duration: '2025 – 2027',
    score: 'CGPA: 9.05',
  },
  {
    degree: 'BCA',
    institute: 'Science College (Autonomous), Hinjilicut',
    university: 'Berhampur University',
    duration: '2022 – 2025',
    score: 'Percentage: 8.79%',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Education" title="Academic background" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-royal via-cyan to-transparent" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-navy border-2 border-cyan flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              </span>

              <div className="glass rounded-2xl p-6 hover:border-cyan/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                    <FiBookOpen className="text-cyan" /> {edu.degree}
                  </h3>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-royal/10 text-royal dark:text-cyan-light dark:bg-cyan/10">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{edu.institute}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.university}</p>
                <p className="mt-3 font-mono text-sm text-cyan">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
