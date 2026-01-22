import type { Project } from "../data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
    return (
        <article className="rounded-lg border p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="md:flex-1">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 opacity-80">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="rounded-full border px-3 py-1 text-xs opacity-80"
                            >
                {t}
              </span>
                        ))}
                    </div>

                    <ul className="mt-5 list-disc space-y-2 pl-5 opacity-85">
                        {project.highlights.map((h) => (
                            <li key={h}>{h}</li>
                        ))}
                    </ul>

                    <div className="mt-6 flex gap-4 text-sm font-medium">
                        {project.links.map((l) => (
                            <a
                                key={l.href} href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 opacity-90 hover:opacity-100 hover:text-accent"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>

                {project.image && (
                    <div className="md:w-[360px]">
                        <div className="aspect-[16/10] overflow-hidden rounded-md border bg-gray-50">
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
