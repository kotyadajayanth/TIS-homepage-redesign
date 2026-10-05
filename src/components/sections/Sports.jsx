import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { sports } from '../../data/siteData'

export default function Sports() {
  return (
    <section id="sports" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Beyond Academics"
          title="Sports?"
          text="It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and discipline to your life."
        />
        <ul className="flex flex-wrap gap-3">
          {sports.map((sport, index) => (
            <li key={sport}>
              <Reveal delay={(index % 8) * 0.05}>
                <motion.span
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="block rounded-full border border-slate-200 bg-white px-5 py-2.5 font-medium shadow-sm dark:border-slate-700 dark:bg-slate-800"
                >
                  {sport}
                </motion.span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
