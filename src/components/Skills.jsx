import { motion } from 'framer-motion'
import {
  SiPython, SiJavascript, SiMysql, SiHtml5, SiCss, SiReact, SiBootstrap,
  SiTailwindcss, SiDjango, SiNodedotjs, SiExpress, SiPhp, SiGit, SiGithub,
  SiPostman, SiVercel, SiNetlify,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { FiLayout, FiServer } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

const groups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 85, icon: SiPython },
      { name: 'JavaScript', level: 80, icon: SiJavascript },
      { name: 'SQL', level: 78, icon: SiMysql },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90, icon: SiHtml5 },
      { name: 'CSS3', level: 85, icon: SiCss },
      { name: 'React.js', level: 82, icon: SiReact },
      { name: 'Bootstrap', level: 78, icon: SiBootstrap },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
      { name: 'Responsive Design', level: 85, icon: FiLayout },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', level: 78, icon: SiDjango },
      { name: 'Node.js', level: 70, icon: SiNodedotjs },
      { name: 'Express.js', level: 68, icon: SiExpress },
      { name: 'PHP', level: 65, icon: SiPhp },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MySQL', level: 80, icon: SiMysql }],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 82, icon: SiGit },
      { name: 'GitHub', level: 85, icon: SiGithub },
      { name: 'VS Code', level: 90, icon: VscCode },
      { name: 'Postman', level: 75, icon: SiPostman },
      { name: 'XAMPP', level: 75, icon: FiServer },
      { name: 'Vercel', level: 80, icon: SiVercel },
      { name: 'Netlify', level: 78, icon: SiNetlify },
    ],
  },
]

function SkillBar({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          <skill.icon className="text-cyan group-hover:scale-110 transition-transform" size={16} />
          {skill.name}
        </span>
        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-300/40 dark:bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-royal to-cyan"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks, and tools I use to build full stack web applications."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass rounded-2xl p-7"
            >
              <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-6">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.06} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
