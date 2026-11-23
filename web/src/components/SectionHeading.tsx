export default function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">{label}</p>
      <h2 className="font-display mt-2 text-4xl uppercase leading-none sm:text-6xl">
        {title}
      </h2>
    </div>
  );
}
