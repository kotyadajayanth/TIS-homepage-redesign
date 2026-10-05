import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About TIS"
            title="Boarding and Day School Excellence"
            text="We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally."
          />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed">
              Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.
              Explore our programs, campus life, achievements, and why TIS is the preferred choice for parents across India.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-3xl bg-brand p-8 text-white shadow-xl sm:p-10">
            <p className="text-5xl font-extrabold text-accent">2012</p>
            <p className="mt-4 text-lg leading-relaxed">
              Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to
              impart education through seamless opportunities.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
