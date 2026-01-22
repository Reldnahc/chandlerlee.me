import { useEffect, useMemo, useState } from "react";

type ThemeMode = "system" | "light" | "dark";

function readStoredTheme(): ThemeMode {
    if (typeof window === "undefined") return "system";
    const v = localStorage.getItem("theme");
    return v === "light" || v === "dark" || v === "system" ? v : "system";
}

function getSystemTheme(): "light" | "dark" {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
    const [mode, setMode] = useState<ThemeMode>(() => readStoredTheme());
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() => {
        if (typeof window === "undefined") return "light";
        return getSystemTheme();
    });

    // Keep systemTheme updated (only matters when mode === "system")
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => setSystemTheme(mq.matches ? "dark" : "light");

        // Initialize and subscribe
        handler();
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const resolvedTheme = useMemo<"light" | "dark">(() => {
        return mode === "system" ? systemTheme : mode;
    }, [mode, systemTheme]);

    // Apply to DOM + persist
    useEffect(() => {
        const root = document.documentElement;

        if (mode === "system") {
            root.removeAttribute("data-theme");
            localStorage.removeItem("theme");
        } else {
            root.setAttribute("data-theme", mode);
            localStorage.setItem("theme", mode);
        }
    }, [mode]);

    // Toggle should flip what the user *currently sees*
    const toggle = () => {
        setMode(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            title={resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"}
            className="hover:bg-text/20 hover:cursor-pointer rounded-md border border-border p-2 text-muted hover:text-text transition"
            onClick={toggle}
        >
            {resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
    );
}

function SunIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z" />
        </svg>
    );
}
