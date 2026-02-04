export type Project = {
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
    links: { label: string; href: string }[];
    images?: string[];
};

export const projects: Project[] = [
    {
        title: "AI Jeopardy",
        description:
            "A real-time, multiplayer Jeopardy-style game with a server-authoritative backend, live buzzing, and AI-powered content generation and evaluation.",
        tech: [
            "React",
            "TypeScript",
            "Node.js",
            "WebSockets",
            "LLMs",
            "Realtime Systems",
        ],
        highlights: [
            "Designed a server-authoritative multiplayer architecture with deterministic game state and zero client trust.",
            "Implemented a low-latency buzzer system over WebSockets with race-condition handling and first-press resolution.",
            "Built a host-versus-contestant permission model with enforced backend validation and distinct UI flows.",
            "Implemented an automatic AI host capable of announcing categories, clues, and transitions in real time.",
            "Integrated multiple LLM providers for speech-to-text and answer validation, with custom gating to prevent hallucinations.",
            "Engineered a message-driven state machine to manage all game phases without polling or background loops.",
            "Built asset storage and replay support with deduplication to avoid redundant uploads and enable fast playback.",
        ],
        links: [
            { label: "Live", href: "https://ai-jeopardy.com/" },
            { label: "GitHub", href: "https://github.com/Reldnahc/ai-jeopardy" },
        ],
    },
    {
        title: "Zen Zaibatsu",
        description:
            "An idle incremental game focused on extreme number scaling and mobile-first progression.",
        tech: ["React", "TypeScript", "Node.js"],
        highlights: [
            "Designed a client-side, offline-first gameplay loop using local storage for persistence.",
            "Implemented custom large-number handling to support values exceeding 60 digits without precision loss.",
            "Built a mobile-first UI optimized for long play sessions and incremental interaction patterns.",
            "Balanced progression curves and upgrades to maintain engagement at very large numeric scales.",
        ],
        links: [
            { label: "Live", href: "https://zenzaibatsu.com/" },
        ],
        images: ["/img/zenzaibatsu/1.png", "/img/zenzaibatsu/2.png"],
    },
    {
        title: "3M Midoff",
        description:
            "A competitive platform fighting game built on a heavily modified platform fighter engine, with online multiplayer and rollback netcode.",
        tech: ["GameMaker", "Online Multiplayer", "Rollback Netcode"],
        highlights: [
            "Extensively modified the original platform fighter engine, including gameplay systems, character logic, and networking behavior.",
            "Implemented and tuned rollback netcode, with additional custom changes to synchronization.",
            "Designed and balanced over 15 unique playable characters, each with distinct move sets and mechanics.",
            "Performed significant backend and engine-level refactors to support competitive online play and reduce desyncs.",
            "Shipped a fully playable multiplayer build with real-world testing and iteration.",
        ],
        links: [
            { label: "Download", href: "https://drive.google.com/file/d/18wyG0x0Z22DcZTxe4tSvaIfs2YPSswzT/view?usp=sharing" },
        ],
        images: ["/img/midoff/1.png"],
    },
];
