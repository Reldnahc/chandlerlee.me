import Section from "../components/Section";

export default function About() {
    return (
        <Section id="about" eyebrow="About" title="A bit about me">
            <div className="max-w-[750px] space-y-4 leading-relaxed opacity-85">
                <p>
                    I’m a web developer who cares about building software that feels clean,
                    fast, and reliable. I'm willing and capable of learning any technology.
                    I like solving real problems with simple designs and maintainable code.
                </p>
                <p>
                    I’m strongest in React + TypeScript, and I’m comfortable building the
                    backend integrations needed to ship complete features.
                </p>
            </div>
        </Section>
    );
}
