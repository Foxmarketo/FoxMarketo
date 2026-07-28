"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoTestimonial({ name, role, file }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="group overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-slate-200">
      <div className="relative aspect-[9/12] w-full">
        <video
          ref={ref}
          className="h-full w-full object-cover"
          src={`/testimonials/${file}.mp4`}
          poster={`/testimonials/${file}.jpg`}
          playsInline
          preload="none"
          onEnded={() => setPlaying(false)}
          onClick={toggle}
        />
        {!playing && (
          <button
            onClick={toggle}
            aria-label={`Play ${name}'s testimonial`}
            className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/10"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-fox-red text-white shadow-xl transition-transform group-hover:scale-110">
              <Play size={26} className="ml-1 fill-white" />
            </span>
          </button>
        )}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="font-display text-sm font-700 text-white">{name}</p>
          <p className="text-xs text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
}
