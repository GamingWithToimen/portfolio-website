import Image from "next/image";
import HatchArt from "@/components/HatchArt";
import type { Featured } from "@/data/media";

// A laptop outline holding either the screenshot or the drawn artwork.
function Laptop({ f, id, sizes }: { f: Featured; id: string; sizes: string }) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-md border-[6px] border-b-[10px] border-[#2e2e2e] bg-white">
        {f.image ? (
          <Image src={f.image} alt="" fill sizes={sizes} className="object-cover object-top" />
        ) : (
          f.art && <HatchArt kind={f.art} id={id} />
        )}
      </div>
      <div className="h-2 w-[118%] rounded-b-lg bg-[#2e2e2e]" />
    </div>
  );
}

// Highlighted project: device mockup, title, text, tech tags and a GitHub link
// (client work says the code is not public instead).
export default function WorkCard({
  f,
  number,
  title,
  description,
  githubLabel,
  privateLabel,
  size = "compact",
  idPrefix,
}: {
  f: Featured;
  /** 1-based position in the list */
  number: number;
  title: string;
  description: string;
  githubLabel: string;
  privateLabel: string;
  /** compact = home page (3 across), large = portfolio page (2 across, with year) */
  size?: "compact" | "large";
  /** Keeps SVG ids unique when the same project appears twice on a page */
  idPrefix: string;
}) {
  const large = size === "large";
  const id = `${idPrefix}-${f.key}`;
  const sizes = large ? "(min-width: 1024px) 40vw, 90vw" : "(min-width: 1024px) 26vw, 80vw";
  const label = String(number).padStart(2, "0") + (large ? ` · ${f.year}` : "");

  return (
    <article className="group flex flex-col gap-5">
      <div
        className={`relative flex items-center justify-center overflow-hidden border border-line bg-[#111] ${
          large ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <div
          className={`transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none ${
            large ? "w-[72%]" : "w-[78%]"
          } ${f.art === "devices" ? "flex items-end gap-4" : ""}`}
        >
          <Laptop f={f} id={id} sizes={sizes} />
          {f.art === "devices" && (
            // Phone next to the laptop for the responsive site
            <div className="relative aspect-[9/18] w-[24%] shrink-0 overflow-hidden rounded-[14px] border-[6px] border-[#2e2e2e]">
              <HatchArt kind="devices" id={`${id}-phone`} />
            </div>
          )}
        </div>
        <span className="absolute top-4 left-4 font-mono text-xs text-muted">{label}</span>
      </div>

      <div className="flex flex-col gap-3">
        <h3
          className={`hyphens-auto break-words font-display font-extrabold uppercase ${
            large ? "text-[1.375rem] tracking-[0.04em]" : "text-lg tracking-[0.06em]"
          }`}
        >
          {title}
        </h3>
        <p className={`leading-relaxed text-[#d0d0d0] ${large ? "" : "text-[0.9375rem]"}`}>
          {description}
        </p>
        <ul className="flex flex-wrap gap-2 font-mono text-xs" aria-label="Tech">
          {f.tags.map((t) => (
            <li key={t} className="border border-[#3a3a3a] px-2.5 py-1 text-[#d0d0d0]">
              {t}
            </li>
          ))}
        </ul>
        {f.github ? (
          <a
            href={f.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-8 items-center self-start font-display text-xs font-extrabold tracking-[0.14em] text-accent uppercase hover:text-white"
          >
            {githubLabel} <span aria-hidden>&nbsp;↗</span>
          </a>
        ) : (
          <p className="inline-flex min-h-8 items-center font-display text-xs font-extrabold tracking-[0.14em] text-muted uppercase">
            {privateLabel}
          </p>
        )}
      </div>
    </article>
  );
}
