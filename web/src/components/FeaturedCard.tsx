import GlowCard from "@/components/GlowCard";

// Highlighted project. With a GitHub link the whole card is a link (with a visible
// focus ring); without one it says the code is not public.
export default function FeaturedCard({
  index,
  title,
  description,
  tags,
  github,
  githubLabel,
  privateLabel,
}: {
  index: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  githubLabel: string;
  privateLabel: string;
}) {
  const body = (
    <GlowCard className="h-full overflow-hidden border-t-4 border-accent bg-surface">
      <div className="relative z-20 flex h-full flex-col p-6 sm:p-8">
        <p className="font-display font-black text-5xl text-line" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-4 hyphens-auto break-words font-display font-black text-2xl uppercase leading-tight sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech">
          {tags.map((t) => (
            <li key={t} className="border border-line px-3 py-1 text-xs font-semibold uppercase">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-8 text-sm font-extrabold uppercase">
          {github ? (
            <span className="text-accent">
              {githubLabel} <span aria-hidden>↗</span>
            </span>
          ) : (
            <span className="text-muted">{privateLabel}</span>
          )}
        </p>
      </div>
    </GlowCard>
  );

  if (!github) return <article className="h-full">{body}</article>;

  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
    >
      {body}
    </a>
  );
}
