"use client";

import { useRef, useEffect } from "react";

// Plays the Fox Marketo logo build animation. Muted, autoplays when scrolled
// into view, loops. Falls back to the poster image if video can't play.
export default function LogoAnimation({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src="/video/logo-anim.mp4"
      poster="/video/logo-anim-poster.jpg"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Fox Marketo animated logo"
    />
  );
}
