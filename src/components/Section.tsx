import type { ReactNode } from "react";
import Container from "./Container";

type Props = {
    id?: string;
    title?: string;
    eyebrow?: string;
    children: ReactNode;
};

export default function Section({ id, title, eyebrow, children }: Props) {
    return (
        <section id={id} className="py-16 sm:py-20">
            <Container>
                {(eyebrow || title) && (
                    <header className="mb-8">
                        {eyebrow && (
                            <div className="text-sm uppercase tracking-wide opacity-70">
                                {eyebrow}
                            </div>
                        )}
                        {title && <h2 className="mt-2 text-2xl font-semibold">{title}</h2>}
                    </header>
                )}
                {children}
            </Container>
        </section>
    );
}
