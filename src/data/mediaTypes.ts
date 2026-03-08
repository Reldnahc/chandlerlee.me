export type MediaItem =
    | string
    | {
          type?: "image" | "video";
          src: string;
          alt?: string;
          poster?: string;
      };
