import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { personalities } from '../../data/siteData'

function initials(name) {
  return name.split(' ').slice(0, 2).map((part) => part[0]).join('')
}

export default function Personalities() {
  return (
    <section id="personalities" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Influential Personalities On Campus"
          title="Sports Person / Social Media Influencers"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalities.map((person, index) => (
            <li key={person.name}>
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-lg font-bold text-accent">
                    {initials(person.name)}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand dark:text-white">{person.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed">({person.note})</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
