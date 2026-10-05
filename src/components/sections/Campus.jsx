import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { stats } from '../../data/siteData'

export default function Campus() {
  return (
    <section id="campus" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Boarding Life"
          title="At Tulas, we always ask, “What’s the secret to making school awesome?”"
          text="It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. There, we cracked it!"
        />
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <li key={stat.label}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:bg-slate-800">
                  <p className="text-4xl font-extrabold text-brand dark:text-accent">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide">{stat.label}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
