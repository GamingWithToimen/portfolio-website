// "TV" monogram in an engraved (hatched) ring. Decorative: the link around it is labelled.
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" aria-hidden className="shrink-0">
      <defs>
        <pattern
          id="logo-hatch"
          width="3"
          height="3"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="3" stroke="#fff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <circle cx="26" cy="26" r="25" fill="url(#logo-hatch)" stroke="#fff" strokeWidth="1.2" />
      <circle cx="26" cy="26" r="17" fill="#000" stroke="#fff" strokeWidth="1" />
      <text
        x="26"
        y="31"
        textAnchor="middle"
        fontFamily="var(--font-montserrat), sans-serif"
        fontWeight="900"
        fontSize="14"
        fill="#fff"
      >
        TV
      </text>
    </svg>
  );
}
