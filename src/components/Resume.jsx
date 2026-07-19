import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'

export default function Resume() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal to-cyan flex items-center justify-center shrink-0">
              <FiFileText className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                My Resume
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                A complete overview of my skills, education, and projects.
              </p>
            </div>
          </div>
          <a
            href="/resume/Rabindra_Kumar_Nayak_Resume.pdf"
            download
            data-cursor="link"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-royal to-cyan text-white font-medium shadow-glow hover:shadow-glow-cyan transition-shadow shrink-0"
          >
            <FiDownload /> Download Resume PDF
          </a>
        </motion.div>
      </div>
    </section>
  )
}
