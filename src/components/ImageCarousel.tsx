import { useEffect, useMemo, useState } from "react";

import type { MediaItem } from "../data/mediaTypes";

type NormalizedMediaItem = {
    type: "image" | "video";
    src: string;
    alt?: string;
    poster?: string;
};

type Props = {
    media: MediaItem[];
    altBase: string;
};

function inferMediaType(src: string): "image" | "video" {
    const cleanSrc = src.split("?")[0].toLowerCase();
    return /\.(mp4|webm|ogg|mov|m4v)$/.test(cleanSrc) ? "video" : "image";
}

function normalizeMedia(item: MediaItem): NormalizedMediaItem | null {
    if (typeof item === "string") {
        if (!item.trim()) return null;
        return {
            type: inferMediaType(item),
            src: item,
        };
    }

    if (!item?.src?.trim()) return null;

    return {
        type: item.type ?? inferMediaType(item.src),
        src: item.src,
        alt: item.alt,
        poster: item.poster,
    };
}

export default function ImageCarousel({ media, altBase }: Props) {
    const safeMedia = useMemo(
        () => media.map(normalizeMedia).filter(Boolean) as NormalizedMediaItem[],
        [media],
    );
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

    if (safeMedia.length === 0) return null;

    const current = safeMedia[index];

    const prev = () =>
        setIndex((i) => (i - 1 + safeMedia.length) % safeMedia.length);
    const next = () => setIndex((i) => (i + 1) % safeMedia.length);

    const defaultAlt = `${altBase} media ${index + 1}`;
    const currentAlt = current.alt ?? defaultAlt;

    return (
        <div className="w-full">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-bg">
                {current.type === "image" ? (
                    <img
                        src={current.src}
                        alt={currentAlt}
                        className="h-full w-full object-cover cursor-zoom-in"
                        loading="lazy"
                        draggable={false}
                        onClick={openModal}
                    />
                ) : (
                    <video
                        src={current.src}
                        poster={current.poster}
                        className="h-full w-full object-cover cursor-zoom-in"
                        preload="metadata"
                        muted
                        playsInline
                        onClick={openModal}
                    />
                )}

                {current.type === "video" && (
                    <span className="pointer-events-none absolute left-2 top-2 rounded-md border border-border bg-black/70 px-2 py-1 text-[10px] font-semibold tracking-wide text-white">
                        VIDEO
                    </span>
                )}

                {safeMedia.length > 1 && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous media"
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
                            aria-label="Next media"
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

            {safeMedia.length > 1 && (
                <div className="mt-2 flex justify-center gap-1">
                    {safeMedia.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to media ${i + 1}`}
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
                    aria-label={`${altBase} media viewer`}
                >
                    <div
                        className="relative max-h-[90vh] max-w-[90vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {current.type === "image" ? (
                            <img
                                src={current.src}
                                alt={currentAlt}
                                className="max-h-[90vh] max-w-[90vw] rounded-md"
                                draggable={false}
                            />
                        ) : (
                            <video
                                src={current.src}
                                poster={current.poster}
                                className="max-h-[90vh] max-w-[90vw] rounded-md"
                                controls
                                autoPlay
                                playsInline
                            />
                        )}

                        {current.type === "video" && (
                            <span className="pointer-events-none absolute left-2 top-2 rounded-md border border-border bg-black/70 px-2 py-1 text-[10px] font-semibold tracking-wide text-white">
                                VIDEO
                            </span>
                        )}

                        <button
                            type="button"
                            aria-label="Close media"
                            onClick={closeModal}
                            className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text shadow-sm transition hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                            X
                        </button>

                        {safeMedia.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    aria-label="Previous media"
                                    onClick={prev}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/70 text-text backdrop-blur transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                                >
                                    <ChevronLeft />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Next media"
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

