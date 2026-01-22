export type Project = {
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
    links: { label: string; href: string }[];
    image?: string;
};

export const projects: Project[] = [
    {
        title: "AI Jeopardy",
        description:
            "Online multiplayer Jeopardy-style game with a host role and realtime game state.",
        tech: ["React", "TypeScript", "WebSockets", "Node.js", "Multiplayer"],
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
            "Client side local storage based gameplay.",
            "Numbers scale to over 60 digits.",
            "Mobile focused gameplay.",
        ],
        links: [
            { label: "Live", href: "https://zenzaibatsu.com/" },
        ],
        image: "/img/zenzaibatsu.png",
    },
    {
        title: "3M Midoff",
        description:
            "Platform fighting game created with platform fighter engine.",
        tech: ["Gamemaker", "Online",  "Multiplayer"],
        highlights: [
            "over 15 playable characters.",
            "Rollback Netcode.",
            "Significant backend and engine changes.",
        ],
        links: [
            { label: "Download", href: "https://drive.google.com/file/d/18wyG0x0Z22DcZTxe4tSvaIfs2YPSswzT/view?usp=sharing" },
        ],
        image: "/img/midoff.png",
    },
];
