import type { ArtKind } from "@/data/media";

// Engraving-style line art (white hatching on dark) for projects without a public
// screenshot. Fills its box; `id` keeps the SVG pattern ids unique on the page.
export default function HatchArt({ kind, id }: { kind: ArtKind; id: string }) {
  const p = (name: string) => `${id}-${name}`;
  const url = (name: string) => `url(#${p(name)})`;

  return (
    <svg
      viewBox="0 0 160 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <pattern id={p("sparse")} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#fff" strokeWidth="0.6" />
        </pattern>
        <pattern id={p("dense")} width="2.5" height="2.5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="2.5" stroke="#fff" strokeWidth="0.7" />
        </pattern>
        <pattern id={p("flat")} width="3" height="3" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="3" y2="0" stroke="#fff" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="160" height="100" fill="#141414" />

      {kind === "dashboard" && (
        <g stroke="#fff" strokeWidth="0.8" fill="none">
          <rect x="8" y="8" width="30" height="84" fill={url("sparse")} />
          <rect x="46" y="8" width="106" height="12" fill="#000" />
          <rect x="46" y="26" width="32" height="20" fill={url("dense")} />
          <rect x="83" y="26" width="32" height="20" fill={url("flat")} />
          <rect x="120" y="26" width="32" height="20" fill={url("sparse")} />
          <rect x="46" y="52" width="106" height="40" fill="#000" />
          <path d="M52 84 L68 72 L82 78 L98 62 L114 66 L130 56 L146 60" strokeWidth="1.4" />
          <circle cx="130" cy="56" r="2.2" fill="#fff" stroke="none" />
        </g>
      )}

      {kind === "target" && (
        <g stroke="#fff" strokeWidth="0.7" fill="none">
          <line x1="80" y1="4" x2="80" y2="96" strokeDasharray="2 3" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="150" y2="50" strokeDasharray="2 3" strokeWidth="0.5" />
          <circle cx="80" cy="50" r="42" />
          <circle cx="80" cy="50" r="31" />
          <circle cx="80" cy="50" r="21" fill={url("flat")} />
          <circle cx="80" cy="50" r="8" fill="#fff" stroke="none" />
          <rect x="114" y="14" width="22" height="14" fill={url("dense")} />
          <rect x="22" y="70" width="18" height="12" fill={url("sparse")} />
        </g>
      )}

      {kind === "devices" && (
        <g stroke="#fff" strokeWidth="0.8" fill="none">
          <rect x="10" y="10" width="140" height="8" fill="#000" />
          <rect x="10" y="24" width="64" height="66" fill={url("dense")} />
          <rect x="82" y="26" width="58" height="10" fill="#fff" stroke="none" />
          <rect x="82" y="40" width="40" height="10" fill="#fff" stroke="none" />
          <line x1="82" y1="60" x2="148" y2="60" />
          <line x1="82" y1="66" x2="140" y2="66" />
          <line x1="82" y1="72" x2="146" y2="72" />
          <rect x="82" y="80" width="34" height="10" />
        </g>
      )}
    </svg>
  );
}
