import Image from "next/image";
import type { Project } from "@/data/media";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent">
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl uppercase tracking-wide">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </article>
  );
}
