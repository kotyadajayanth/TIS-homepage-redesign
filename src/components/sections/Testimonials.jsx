import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { parentQuote, reviews } from '../../data/siteData'

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="From The Parents" title="Google Reviews" centered />

        <Reveal>
          <blockquote className="mx-auto mb-12 max-w-3xl text-center text-xl font-medium leading-relaxed text-brand dark:text-white">
            “{parentQuote}”
          </blockquote>
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <li key={review.name}>
              <Reveal delay={(index % 2) * 0.1} className="h-full">
                <figure className="h-full rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
                  <blockquote className="leading-relaxed">“{review.text}”</blockquote>
                  <figcaption className="mt-4">
                    <p className="font-bold text-brand dark:text-white">{review.name}</p>
                    <p className="text-sm">{review.relation}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
