import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="font-mono text-2xl md:text-3xl text-cyan tracking-wider">
              <motion.span
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                &lt;RKN /&gt;
              </motion.span>
            </div>
            <div className="w-40 h-[3px] bg-navy-light rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-royal to-cyan"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <p className="text-slate-400 text-xs font-mono">compiling portfolio.jsx</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
