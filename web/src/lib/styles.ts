// Shared Tailwind class strings, so every page uses the same widths and buttons.

/** Centred content column (1280px at the default font size). */
export const container = "mx-auto w-full max-w-[80rem] px-6 md:px-10";

/** Outlined white button that inverts on hover. */
export const btnOutline =
  "inline-flex min-h-12 items-center gap-2.5 border-[1.5px] border-white px-6 font-display text-[0.8125rem] font-extrabold tracking-[0.14em] text-white uppercase transition-colors hover:bg-white hover:text-black";

/** Small uppercase text link (CV, LinkedIn, "all projects →"). */
export const linkCaps =
  "inline-flex min-h-11 items-center px-2 font-display text-[0.8125rem] font-extrabold tracking-[0.14em] uppercase transition-colors";

/** Small monospace label above a block. */
export const monoLabel = "font-mono text-xs tracking-[0.1em] uppercase";
