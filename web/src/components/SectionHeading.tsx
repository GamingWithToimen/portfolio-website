import ScrambleText from "@/components/ScrambleText";

export default function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-14 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {label}
      </p>
      <h2 className="font-display font-black mt-3 text-4xl uppercase leading-none sm:text-6xl xl:text-8xl">
        <ScrambleText text={title} />
      </h2>
    </div>
  );
}
