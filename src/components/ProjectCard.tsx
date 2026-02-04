import type { Project } from "../data/projects";
import ImageCarousel from "./ImageCarousel";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
    return (
        <article className="rounded-lg border border-accent p-6 space-y-6">
            {/* Header / Overview */}
            <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-md opacity-80">{project.description}</p>

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
            </div>

            {/* Body: Highlights + Media */}
            <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
                <ul className="list-disc space-y-2 pl-5 opacity-85">
                    {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                    ))}
                </ul>

                {project.images && project.images.length > 0 && (
                    <div className="rounded-lg border border-accent p-3">
                        <ImageCarousel
                            images={project.images}
                            altBase={project.title}
                        />
                    </div>
                )}
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm font-medium">
                {project.links.map((l) => (
                    <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 opacity-90 hover:opacity-100 hover:text-accent"
                    >
                        {l.label}
                    </a>
                ))}
            </div>
        </article>
    );
}
