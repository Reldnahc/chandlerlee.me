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
            className="rounded-md border border-border bg-surface p-2 text-muted hover:text-text transition"
            onClick={toggle}
        >
            {resolvedTheme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}
