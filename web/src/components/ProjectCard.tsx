import Image from "next/image";
import type { Project } from "@/data/media";

// Screenshot + title + description. Not clickable (these have no detail page),
// so no zoom/glow that would suggest a link; the description is always visible.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full overflow-hidden border border-line bg-surface">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-white">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
        />
      </div>
      <div className="p-5 sm:p-6">
        <span className="mb-3 block h-1 w-8 bg-accent" aria-hidden />
        <h3 className="hyphens-auto break-words font-display font-black text-xl uppercase sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted xl:text-base">
          {project.description}
        </p>
      </div>
    </article>
  );
}
