import Container from "../components/Container";

export default function Hero() {
    return (
        <section id="top" className="py-16 sm:py-24">
            <Container>
                <div className="max-w-[750px]">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Building fast, reliable web applications.
                    </h1>

                    <p className="mt-5 text-lg leading-relaxed opacity-80">
                        React, TypeScript, and Node.js — focused on clean UI, real-world
                        engineering, and shipping.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
                        >
                            View Projects
                        </a>
                        <a
                            href="/Chandler_Lee_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border px-4 py-2 text-sm font-medium"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                        <span>Frontend + Full-stack</span>
                        <span>Realtime / WebSockets</span>
                        <span>API integrations</span>
                        <span>Performance-minded</span>
                        <span>Product-focused</span>
                        <span>End-to-end features</span>
                        <span>UI + state management</span>
                        <span>Accessibility-aware</span>
                        <span>Responsive design</span>

                    </div>
                </div>
            </Container>
        </section>
    );
}
