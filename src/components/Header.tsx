import { useEffect, useState } from "react";
import Container from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    // Close menu on Escape
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // Prevent body scroll while menu is open (mobile)
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#top"
                        className="text-base font-semibold tracking-tight text-text text-xl"
                        onClick={() => setOpen(false)}
                    >
                        Chandler Lee
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-6 text-sm md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-muted hover:text-text transition"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="/resume.pdf"
                            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text hover:bg-surface/70 transition"
                        >
                            Resume
                        </a>

                        <ThemeToggle />
                    </nav>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />

                        <button
                            type="button"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            className="rounded-md border border-border bg-surface p-2 text-text"
                            onClick={() => setOpen((v) => !v)}
                        >
                            {/* Simple icon (no deps) */}
                            <span className="block h-5 w-5 leading-5">
                {open ? "✕" : "☰"}
              </span>
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile menu panel */}
            {open && (
                <div className="md:hidden border-t border-border bg-surface">
                    <Container>
                        <div className="flex flex-col gap-2 py-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-md px-3 py-2 text-base text-text hover:bg-surface/70 transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a
                                href="/resume.pdf"
                                className="rounded-md px-3 py-2 text-base font-medium text-text hover:bg-surface/70 transition"
                                onClick={() => setOpen(false)}
                            >
                                Resume
                            </a>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
