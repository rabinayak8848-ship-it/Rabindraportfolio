import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

const achievements = [
  'Secured OJEE Rank 470 for MCA admission.',
  'Pursuing MCA with focus on Python Full Stack Development.',
  'Strong foundation in Python, React, Django, and MySQL.',
  'Continuous improvement through consistent coding practice.',
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Achievements" title="Milestones along the way" />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal to-cyan flex items-center justify-center shrink-0">
                <FiAward className="text-white" size={17} />
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1.5">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
