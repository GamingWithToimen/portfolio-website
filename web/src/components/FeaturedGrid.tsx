import FeaturedCard from "@/components/FeaturedCard";
import Reveal from "@/components/Reveal";
import { featured } from "@/data/media";
import type { Dictionary } from "@/i18n/types";

// The three highlighted projects (CRM work, Data-Defence, this site).
export default function FeaturedGrid({ texts }: { texts: Dictionary["featured"] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {featured.map((f, i) => (
        <Reveal key={f.key} delay={i * 120} className="h-full">
          <FeaturedCard
            index={i}
            title={texts.items[f.key].title}
            description={texts.items[f.key].description}
            tags={f.tags}
            github={f.github}
            githubLabel={texts.github}
            privateLabel={texts.private}
          />
        </Reveal>
      ))}
    </div>
  );
}
