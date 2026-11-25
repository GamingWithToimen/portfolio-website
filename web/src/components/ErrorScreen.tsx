import Link from "next/link";

// Shared look for the 404 and error pages: big code, title, text and buttons.
export default function ErrorScreen({
  code,
  title,
  text,
  homeHref,
  homeLabel,
  children,
}: {
  code: string;
  title: string;
  text: string;
  homeHref: string;
  homeLabel: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-[110rem] flex-col justify-center px-6 py-24 md:px-10 xl:px-16 2xl:px-20">
      <p className="font-display font-black text-7xl text-accent sm:text-9xl" aria-hidden>
        {code}
      </p>
      <h1 className="mt-4 hyphens-auto break-words font-display font-black text-4xl uppercase leading-none sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-muted xl:text-lg">{text}</p>
      <div className="mt-10 flex flex-wrap gap-4 text-sm font-extrabold uppercase">
        <Link
          href={homeHref}
          className="group block bg-accent px-6 py-4 text-black transition-colors hover:bg-white"
        >
          {homeLabel}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
        {children}
      </div>
    </section>
  );
}
