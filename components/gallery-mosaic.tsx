"use client";

import { useEffect, useState } from "react";

type Shot = readonly [string, string];

export function GalleryMosaic({ shots }: { shots: readonly Shot[] }) {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="gallery-mosaic">
        {shots.map(([src, alt]) => (
          <a
            key={src}
            href={src}
            onClick={(e) => {
              e.preventDefault();
              setActive({ src, alt });
            }}
          >
            <img src={src} alt={alt} />
          </a>
        ))}
      </div>
      {active ? (
        <div className="lightbox is-open" onClick={() => setActive(null)}>
          <button className="lightbox-close" type="button" aria-label="Close">
            ×
          </button>
          <img src={active.src} alt={active.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
