import Image from "next/image";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import Parallax from "@/components/Parallax";
import ScrambleText from "@/components/ScrambleText";

export type HeroAction = { href: string; label: string };

type HeroImage = {
  src: string;
  alt: string;
  /** portrait = photo; screenshot = shown whole inside a browser-window frame */
  kind?: "portrait" | "screenshot";
  unoptimized?: boolean;
};

// The big two-column hero used at the top of every page:
// title (white line + orange line) with text and buttons, image with an offset orange block.
// Stacks into one column on small screens; without an image the text takes the full width.
export default function PageHero({
  eyebrow,
  line1,
  accent,
  text,
  actions,
  image,
}: {
  eyebrow: string;
  line1: string;
  accent: string;
  text?: string;
  actions: HeroAction[];
  image?: HeroImage;
}) {
  const hasImage = Boolean(image?.src);
  const portrait = (image?.kind ?? "portrait") === "portrait";

  // Long words need a smaller size so they never overflow the column.
  const longest = Math.max(...`${line1} ${accent}`.split(/\s+/).map((w) => w.length));
  const titleSize =
    longest <= 6
      ? "text-5xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] min-[2200px]:text-[10rem]"
      : "text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl min-[2200px]:text-[7rem]";

  return (
    <section
      className={`mx-auto grid min-h-[calc(100svh-5rem)] max-w-[110rem] items-center gap-16 px-6 py-16 md:px-10 xl:px-16 2xl:px-20 ${
        hasImage ? "md:grid-cols-[1.3fr_1fr]" : ""
      }`}
    >
      <div className="min-w-0">
        <p className="rise text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
          {eyebrow}
        </p>
        <h1
          className={`rise mt-4 hyphens-auto break-words font-display font-black uppercase leading-[0.92] ${titleSize}`}
          style={{ animationDelay: "0.1s" }}
        >
          {line1}
          <br />
          <span className="text-accent">
            <ScrambleText text={accent} />
          </span>
        </h1>
        {text && (
          <p
            className="rise mt-8 max-w-xl leading-relaxed text-muted xl:text-xl"
            style={{ animationDelay: "0.25s" }}
          >
            {text}
          </p>
        )}
        <div
          className="rise mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-extrabold uppercase"
          style={{ animationDelay: "0.4s" }}
        >
          {actions.map((a, i) => (
            <Magnetic key={a.href}>
              <Link
                href={a.href}
                className={
                  i === 0
                    ? "group block bg-accent px-6 py-4 text-black transition-colors hover:bg-white"
                    : "block border-2 border-line px-6 py-3.5 text-[var(--text)] transition-colors hover:border-accent hover:text-accent"
                }
              >
                {a.label}
                {i === 0 && (
                  <>
                    {" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </Link>
            </Magnetic>
          ))}
        </div>
      </div>

      {image && hasImage && (
        <div
          className={`rise relative mx-auto w-full ${
            portrait ? "max-w-sm xl:max-w-md 2xl:max-w-lg" : "max-w-xl 2xl:max-w-2xl"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <Parallax speed={-0.06} className="absolute -left-6 top-6 h-full w-full">
            <div className="h-full w-full bg-block" aria-hidden />
          </Parallax>
          <Parallax speed={0.08}>
            {portrait ? (
              <div className="relative aspect-[2/3] overflow-hidden bg-surface">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  unoptimized={image.unoptimized}
                  className="object-cover"
                />
              </div>
            ) : (
              // Browser-window mockup so screenshots are shown whole, not cropped
              <div className="overflow-hidden border border-line bg-surface shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative aspect-[16/10] bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </Parallax>
        </div>
      )}
    </section>
  );
}
