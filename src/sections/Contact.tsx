import Section from "../components/Section";

export default function Contact() {
    return (
        <Section id="contact" eyebrow="Contact" title="Let’s talk">
            <div className="max-w-[750px]">
                <p className="opacity-80">
                    Open to full-time roles. The fastest way to reach me:
                </p>

                <div className="mt-6 flex flex-col gap-3 text-sm font-medium">
                    <a className="underline underline-offset-4" href="mailto:hi@chandler.me">
                        hi@chandler.me
                    </a>
                    <a className="underline underline-offset-4" href="https://www.linkedin.com/">
                        LinkedIn
                    </a>
                    <a className="underline underline-offset-4" href="https://github.com/Reldnahc">
                        GitHub
                    </a>
                </div>
            </div>
        </Section>
    );
}
