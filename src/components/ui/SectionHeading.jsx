import Reveal from '../animation/Reveal'

export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight text-brand sm:text-4xl dark:text-white">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed">{text}</p>}
    </Reveal>
  )
}
