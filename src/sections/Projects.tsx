import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <Section id="projects" eyebrow="Projects" title="Highlighted Projects">
            <div className="space-y-6">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </Section>
    );
}
