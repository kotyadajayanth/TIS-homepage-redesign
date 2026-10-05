import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'
import { applyUrl, navLinks } from '../../data/siteData'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-extrabold text-brand dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm text-accent">TIS</span>
          <span className="hidden sm:inline">Tulas International School</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-amber-600 dark:hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href={applyUrl} variant="dark" className="hidden sm:inline-flex">
            Apply Now
          </Button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 font-medium">
                  {link.label}
                </a>
              ))}
              <Button href={applyUrl} variant="dark" className="mt-2">
                Apply Now
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
