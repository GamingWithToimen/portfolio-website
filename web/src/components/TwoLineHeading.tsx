// Section title in two lines: a thin, spaced-out word above a heavy one,
// e.g. "SELECTED" / "WORK". `tone` picks the muted colour for a dark or white section.
export default function TwoLineHeading({
  light,
  bold,
  tone = "dark",
  id,
  className = "",
}: {
  light: string;
  bold: string;
  tone?: "dark" | "light";
  id?: string;
  className?: string;
}) {
  return (
    <h2 id={id} className={`font-display leading-none uppercase ${className}`}>
      <span
        className={`block text-[1.75rem] font-light tracking-[0.08em] ${
          tone === "dark" ? "text-muted" : "text-[#555]"
        }`}
      >
        {light}
      </span>
      <span className="block hyphens-auto break-words text-5xl font-black tracking-[-0.01em] sm:text-[4rem]">
        {bold}
      </span>
    </h2>
  );
}
