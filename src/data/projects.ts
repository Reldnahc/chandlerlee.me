export type Project = {
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
    links: { label: string; href: string }[];
    image?: string; // e.g. "/img/jeopardy.png"
};

export const projects: Project[] = [
    {
        title: "AI Jeopardy (Multiplayer)",
        description:
            "Online multiplayer Jeopardy-style game with a host role and realtime game state.",
        tech: ["React", "TypeScript", "WebSockets", "Node.js"],
        highlights: [
            "Access to cutting edge LLMs from various providers.",
            "Designed host vs contestant permissions and UI flows.",
            "Built realtime buzzer + state sync over WebSockets.",
            "Focused on low-latency UX and deterministic state updates.",
        ],
        links: [
            { label: "Live", href: "https://ai-jeopardy.com/" },
            { label: "GitHub", href: "https://github.com/Reldnahc/AI-Jeopardy" },
        ],
        image: "/img/placeholder.png",
    },
    {
        title: "Zen Zaibatsu",
        description:
            "Online Idle incremental game with very large numbers.",
        tech: ["React", "TypeScript", "Node.js"],
        highlights: [
            "Designed host vs contestant permissions and UI flows.",
        ],
        links: [
            { label: "Live", href: "https://zenzaibatsu.com/" },
            { label: "GitHub", href: "#" },
        ],
        image: "/img/placeholder.png",
    },
];
