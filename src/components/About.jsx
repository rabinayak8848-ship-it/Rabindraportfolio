import { motion } from 'framer-motion'
import { FiTarget, FiUser, FiTrendingUp } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

const cards = [
  {
    icon: FiUser,
    title: 'Who I Am',
    text: 'I am Rabindra Kumar Nayak, an MCA student with a strong interest in software development and problem-solving. I enjoy building modern, responsive, and user-friendly web applications while continuously improving my programming and development skills.',
  },
  {
    icon: FiTarget,
    title: 'Career Objective',
    text: 'To secure an internship or entry-level opportunity as a Python Full Stack Developer where I can apply my knowledge of React and Django, contribute to real-world projects, and grow into a skilled software engineer.',
  },
  {
    icon: FiTrendingUp,
    title: 'Developer Journey',
    text: 'From learning core programming fundamentals to building full stack applications with React and Django, my journey has been driven by curiosity, consistent practice, and a habit of building projects to reinforce every new concept.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="About Me"
          title="Turning ideas into working software"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-royal to-cyan flex items-center justify-center mb-5">
                <card.icon className="text-white" size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2.5">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
