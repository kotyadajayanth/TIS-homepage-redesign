export default function Marquee({ words }) {
  const group = Array.from({ length: 4 }, () => words).flat()

  return (
    <div className="overflow-hidden border-y border-white/20 bg-accent py-3 text-brand" aria-hidden="true">
      <div className="marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-8 pr-8">
            {group.map((word, index) => (
              <span key={`${copy}-${index}`} className="whitespace-nowrap text-2xl font-extrabold uppercase">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
