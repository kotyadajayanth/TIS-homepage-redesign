import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useFinePointer from '../../hooks/useFinePointer'

const INTERACTIVE = 'a, button, input, select, textarea, label'

export default function CustomCursor() {
  const isFine = useFinePointer()
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40 })
  const springY = useSpring(y, { stiffness: 500, damping: 40 })

  useEffect(() => {
    if (!isFine) return

    const onMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const onOver = (event) => setHovering(Boolean(event.target.closest(INTERACTIVE)))

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [isFine, x, y])

  if (!isFine) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.6 : 1 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[80] -ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-accent"
    />
  )
}
