import Image from "next/image";
import type { Project } from "@/data/profile";

// Stylised "browser window" cover used until a real screenshot is added.
function Cover({ project }: { project: Project }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${project.gradient} p-6`}>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white/85 shadow-xl ring-1 ring-white/60 backdrop-blur dark:bg-[#251b2b]/85 dark:ring-white/10">
        <div className="flex items-center gap-1.5 border-b border-pink-100 px-3 py-2 dark:border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f7a8c4]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fcd3a8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#b9e4c9]" />
          <span className="ml-3 truncate font-mono text-[10px] text-[#a98ea6]">{project.url ?? "localhost:3000"}</span>
        </div>
        <div className="flex flex-1 gap-3 p-3">
          <div className="hidden w-1/4 flex-col gap-2 sm:flex">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-2 rounded bg-pink-100/80 dark:bg-white/10" />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="text-2xl">{project.icon}</span>
            <span className="text-sm font-semibold text-[#3d2b3d] dark:text-[#f8ecf2]">{project.title}</span>
            <div className="mt-1 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className={`h-8 rounded-lg bg-gradient-to-br ${project.gradient} ${i === 0 ? "opacity-80" : "opacity-40"}`} />
              ))}
            </div>
            <span className="h-2 w-3/4 rounded bg-pink-100/80 dark:bg-white/10" />
            <span className="h-2 w-1/2 rounded bg-pink-100/80 dark:bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/40 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div className={`relative aspect-[16/10] overflow-hidden ${featured ? "md:aspect-auto md:w-1/2" : ""}`}>
        <div className="h-full w-full transition duration-500 group-hover:scale-[1.03]">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <Cover project={project} />
          )}
        </div>
      </div>

      <div className={`flex flex-1 flex-col gap-4 p-6 ${featured ? "md:p-8" : ""}`}>
        <div>
          {featured && <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">✦ Featured project</p>}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-2xl font-medium">{project.title}</h3>
            {project.team && (
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{project.team}</span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        </div>

        <ul className="space-y-2 text-sm">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="currentColor" aria-hidden>
                <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
              </svg>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-lavender-soft px-3 py-1 text-xs font-medium text-accent-2">
              {t}
            </li>
          ))}
        </ul>

        {(project.demo || project.github) && (
          <div className="mt-auto flex gap-3 pt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-soft rounded-full px-5 py-2 text-sm font-medium text-white transition hover:opacity-95"
              >
                Live demo ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
              >
                View code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
