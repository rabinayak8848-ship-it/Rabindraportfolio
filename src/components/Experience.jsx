import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow="Experience" title="Where I stand today" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan/10 rounded-full blur-3xl" />

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal to-cyan flex items-center justify-center shrink-0">
              <FiBriefcase className="text-white" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                  Fresher
                </h3>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-royal/10 text-royal dark:text-cyan-light dark:bg-cyan/10">
                  currently learning
                </span>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Currently pursuing MCA and developing skills through academic projects,
                personal projects, coding practice, and learning modern technologies.
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Looking for internship and entry-level software development opportunities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
