import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

// Replace these with your own EmailJS credentials.
// See README.md -> "Configuring the contact form (EmailJS)" for setup steps.
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      if (SERVICE_ID.startsWith('YOUR_')) {
        // EmailJS not configured yet — simulate success so the UI can be tested.
        await new Promise((r) => setTimeout(r, 900))
        setStatus('success')
      } else {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          PUBLIC_KEY
        )
        setStatus('success')
      }
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const info = [
    { icon: FiMail, label: 'Email', value: 'nayakrabindrakumar023@gmail.com', href: 'mailto:nayakrabindrakumar023@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 6371912510', href: 'tel:+916371912510' },
    { icon: FiMapPin, label: 'Location', value: 'Berhampur, Odisha, India', href: null },
  ]

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together"
          description="Have an internship opportunity or a project in mind? Send a message and I'll get back to you soon."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass rounded-2xl p-7 space-y-6"
          >
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal to-cyan flex items-center justify-center shrink-0">
                  <Icon className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} data-cursor="link" className="text-sm text-slate-800 dark:text-slate-200 hover:text-cyan">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-800 dark:text-slate-200">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-7 space-y-4"
          >
            <div>
              <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/50"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/50"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              data-cursor="link"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-royal to-cyan text-white font-medium shadow-glow hover:shadow-glow-cyan transition-shadow disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : <> <FiSend /> Send Message </>}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-green-400 font-medium"
                >
                  <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 font-medium"
                >
                  <FiAlertCircle /> Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
