import Container from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Name */}
                    <a
                        href="#top"
                        className="text-xl text-accent font-semibold tracking-tight"
                    >
                        Chandler Lee
                    </a>

                    {/* Desktop nav only */}
                    <nav className="hidden items-center gap-6 text-sm md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-accent hover:underline text-muted transition"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="/Chandler_Lee_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-text/20 rounded-md border border-border  px-3 py-1.5 font-medium text-text transition"
                        >
                            Resume
                        </a>

                        <ThemeToggle />
                    </nav>

                    {/* Mobile: theme toggle only */}
                    <div className="md:hidden">
                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </header>
    );
}
