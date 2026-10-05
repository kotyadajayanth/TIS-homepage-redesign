import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Button from '../ui/Button'
import Marquee from '../animation/Marquee'
import { applyUrl, contact, heroImage, marqueeWords } from '../../data/siteData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title">
      <div
        className="relative flex min-h-[calc(100vh-7rem)] items-center bg-brand bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(11,42,91,0.92), rgba(11,42,91,0.45)), url(${heroImage})` }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-7xl px-4 py-20 text-white sm:px-6"
        >
          <motion.p variants={item} className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Boarding and Day School Excellence
          </motion.p>
          <motion.h1 id="hero-title" variants={item} className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Welcome to Tulas International School (TIS)
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-slate-200">
            TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum focuses on
            academic excellence, holistic development, and preparing students to be global leaders.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button href={applyUrl}>Apply Now</Button>
            <Button href="#enquire" variant="outline">Enquire Now</Button>
            <a href={`tel:${contact.helpline}`} className="flex min-h-11 items-center gap-2 text-sm font-medium hover:text-accent">
              <Phone size={16} /> Admissions Helpline {contact.helpline}
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Marquee words={marqueeWords} />
    </section>
  )
}
