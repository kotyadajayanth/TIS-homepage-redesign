import Reveal from '../animation/Reveal'
import { rankings } from '../../data/siteData'

export default function Rankings() {
  return (
    <section aria-label="Rankings" className="bg-brand py-16 text-white">
      <ul className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {rankings.map((item, index) => (
          <li key={item.text}>
            <Reveal delay={index * 0.08}>
              <p className="text-6xl font-extrabold text-accent">{item.rank}</p>
              <h3 className="mt-2 text-xl font-bold">{item.place}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
