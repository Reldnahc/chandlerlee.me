import Container from "../components/Container";

const items = [
    "React + TypeScript",
    "Node.js + WebSockets",
    "Clean UI systems",
    "Shipping-focused",
];

export default function ProofBar() {
    return (
        <div className="border-y py-6">
            <Container>
                <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm opacity-80">
                    {items.map((t) => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}
