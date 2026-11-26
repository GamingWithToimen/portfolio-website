import { contactLinks } from "@/data/media";
import type { Dictionary } from "@/i18n/types";
import { btnOutline, container, linkCaps } from "@/lib/styles";

// Contact block at the bottom of every page (target of the "#contact" links).
export default function Footer({
  contact,
  footer,
}: {
  contact: Dictionary["contact"];
  footer: Dictionary["footer"];
}) {
  const mailto = `mailto:${contactLinks.email}?subject=${encodeURIComponent(contactLinks.mailSubject)}`;
  const external = [
    { href: contactLinks.linkedin, label: "LinkedIn" },
    { href: contactLinks.github, label: "GitHub" },
  ];

  return (
    <footer>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="relative scroll-mt-20 border-t border-[#1e1e1e] bg-black"
      >
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div className={`${container} relative flex flex-col gap-10 pt-28 pb-24 md:pt-36 md:pb-28`}>
          <p className="max-w-2xl font-mono text-[0.8125rem] leading-relaxed text-muted">
            {"// "}
            {contact.text}
          </p>
          <h2
            id="contact-title"
            className="hyphens-auto break-words font-display text-[clamp(3.5rem,9vw,8.75rem)] leading-[0.9] font-black tracking-[-0.02em] uppercase"
          >
            {contact.title}
            <span className="text-accent">.</span>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a href={mailto} className={`${btnOutline} min-h-13 break-all tracking-[0.06em]`}>
              {contactLinks.email}
            </a>
            <a href={contactLinks.cv} download className={`${linkCaps} text-white hover:text-[#bdbdbd]`}>
              {contact.cv} (PDF) <span aria-hidden>↓</span>
            </a>
            {external.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkCaps} text-white hover:text-[#bdbdbd]`}
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
          <p className="font-mono text-[0.8125rem] text-muted">{contact.location}</p>
        </div>
      </section>

      <div className="border-t border-[#1e1e1e] bg-black">
        <div
          className={`${container} flex flex-wrap justify-between gap-4 py-7 font-mono text-xs text-[#8a8a8a]`}
        >
          <p>© 2026 Tijme Vervoort. {footer.rights}</p>
          <p>{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
