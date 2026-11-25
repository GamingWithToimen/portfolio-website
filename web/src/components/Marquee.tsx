// Orange band with words that keep scrolling sideways (decorative).
export default function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="overflow-hidden bg-accent py-4 text-black" aria-hidden>
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0">
            {[...items, ...items].map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center px-6 text-lg font-black uppercase"
              >
                {item}
                <span className="ml-12">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
