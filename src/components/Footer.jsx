import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-8 pt-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-slate-900 dark:text-white">
            Rabindra Kumar Nayak
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Python Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-3">
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
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan hover:bg-white/5 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs font-mono text-slate-500 dark:text-slate-500 text-center sm:text-right">
          © {year} Rabindra Kumar Nayak.
          <br className="sm:hidden" /> Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
