import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-accent text-brand hover:bg-yellow-400',
  outline: 'border border-white/70 text-white hover:bg-white/10',
  dark: 'bg-brand text-white hover:bg-blue-900',
}

export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  )
}
