import {useEffect, useMemo, useState} from "react";

type Props = {
    images: string[];
    altBase: string;
};

export default function ImageCarousel({ images, altBase }: Props) {
    const safeImages = useMemo(() => images.filter(Boolean), [images]);
    const [index, setIndex] = useState(0);

    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    if (safeImages.length === 0) return null;

    const prev = () =>
        setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    const next = () =>
        setIndex((i) => (i + 1) % safeImages.length);

    return (
        <div className="w-full">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-bg">
                <img
                    src={safeImages[index]}
                    alt={`${altBase} screenshot ${index + 1}`}
                    className="h-full w-full object-cover cursor-zoom-in"
                    loading="lazy"
                    draggable={false}
                    onClick={openModal}
                />

                {safeImages.length > 1 && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous image"
                            onClick={(e) => {
                                e.stopPropagation();
                                prev();
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface/80 text-text backdrop-blur transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            type="button"
                            aria-label="Next image"
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface/80 text-text backdrop-blur transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                            <ChevronRight />
                        </button>
                    </>
                )}
            </div>

            {safeImages.length > 1 && (
                <div className="mt-2 flex justify-center gap-1">
                    {safeImages.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to image ${i + 1}`}
                            onClick={() => setIndex(i)}
                            className={[
                                "h-1.5 w-6 rounded-full border border-border transition",
                                i === index ? "bg-text" : "bg-surface hover:bg-bg",
                            ].join(" ")}
                        />
                    ))}
                </div>
            )}

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${altBase} image viewer`}
                >
                    <div
                        className="relative max-h-[90vh] max-w-[90vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={safeImages[index]}
                            alt={`${altBase} full view ${index + 1}`}
                            className="max-h-[90vh] max-w-[90vw] rounded-md"
                            draggable={false}
                        />

                        <button
                            type="button"
                            aria-label="Close image"
                            onClick={closeModal}
                            className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text shadow-sm transition hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                            ✕
                        </button>

                        {safeImages.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    aria-label="Previous image"
                                    onClick={prev}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/70 text-text backdrop-blur transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                                >
                                    <ChevronLeft />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Next image"
                                    onClick={next}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/70 text-text backdrop-blur transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                                >
                                    <ChevronRight />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

}


function ChevronLeft() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M15 18l-6-6 6-6" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M9 6l6 6-6 6" />
        </svg>
    );
}