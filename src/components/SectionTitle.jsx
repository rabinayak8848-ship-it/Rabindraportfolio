import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <span className="font-mono text-xs tracking-widest uppercase text-cyan">
        {eyebrow}
      </span>
      <h2 className="section-heading text-3xl sm:text-4xl font-bold mt-3 text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
