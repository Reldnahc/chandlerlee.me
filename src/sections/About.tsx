import Section from "../components/Section";

export default function About() {
    return (
        <Section id="about" eyebrow="About" title="A bit about me">
            <div className="max-w-[750px] space-y-4 leading-relaxed opacity-85">
                <p>
                    I&apos;m a frontend-focused web developer with a passion for building
                    things that are genuinely fun to use. My strongest work lives at the
                    intersection of real-time systems, AI integration, and clean UI.
                    I love problems where the technical complexity is invisible to users
                    but obvious to anyone who looks at the code.
                </p>
                <p>
                    Most recently I built AI Jeopardy from the ground up: a fully deployed
                    multiplayer game with WebSocket architecture, voice-based gameplay,
                    AI-generated boards, and a cost-optimized asset layer that never
                    generates the same content twice. It started as a side project and
                    turned into the most fun I&apos;ve had writing code.
                </p>
                <p>
                    I&apos;m strongest in React and TypeScript, comfortable owning the full
                    stack when needed, and genuinely excited about where AI tooling is
                    taking the craft of software development.
                </p>
            </div>
        </Section>
    );
}
