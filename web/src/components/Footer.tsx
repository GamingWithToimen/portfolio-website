import Magnetic from "@/components/Magnetic";
import { contactLinks } from "@/data/media";
import type { Dictionary } from "@/i18n/types";

// Contact block at the bottom of every page (target of the "#contact" links).
export default function Footer({
  contact,
  rights,
}: {
  contact: Dictionary["contact"];
  rights: string;
}) {
  const external = [
    { href: contactLinks.linkedin, label: "LinkedIn" },
    { href: contactLinks.github, label: "GitHub" },
  ];

  return (
    <footer id="contact" className="scroll-mt-20 border-t-4 border-accent bg-surface">
      <div className="mx-auto grid max-w-[110rem] gap-14 px-6 py-24 md:grid-cols-[1.3fr_1fr] md:items-end md:px-10 xl:px-16 2xl:px-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {contact.label}
          </p>
          <h2 className="mt-4 hyphens-auto break-words font-display font-black text-5xl uppercase leading-[0.92] sm:text-7xl xl:text-8xl">
            {contact.title}
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted xl:text-lg">
            {contact.text}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-extrabold uppercase">
            <Magnetic>
              <a
                href={`mailto:${contactLinks.email}?subject=${encodeURIComponent(contactLinks.mailSubject)}`}
                className="group block bg-accent px-6 py-4 text-black transition-colors hover:bg-white"
              >
                {contact.email}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={contactLinks.cv}
                download
                className="block border-2 border-line px-6 py-3.5 transition-colors hover:border-accent hover:text-accent"
              >
                {contact.cv} (PDF)
              </a>
            </Magnetic>
          </div>
        </div>

        <ul className="space-y-1 text-lg font-semibold md:justify-self-end">
          <li>
            <a
              href={`mailto:${contactLinks.email}?subject=${encodeURIComponent(contactLinks.mailSubject)}`}
              className="block break-all py-2 transition-colors hover:text-accent"
            >
              {contactLinks.email}
            </a>
          </li>
          {external.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 transition-colors hover:text-accent"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[110rem] flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-muted md:px-10 xl:px-16 2xl:px-20">
          <p className="font-display font-black text-xl uppercase text-[var(--text)]">
            Tijme<span className="text-accent">.</span>
          </p>
          <p>© 2026 Tijme Vervoort. {rights}</p>
        </div>
      </div>
    </footer>
  );
}
