import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className={`flex h-10 w-[4.5rem] items-center rounded-full bg-slate-200 p-1 dark:bg-slate-700 ${isDark ? 'justify-end' : 'justify-start'}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand shadow dark:bg-slate-900 dark:text-accent"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  )
}
