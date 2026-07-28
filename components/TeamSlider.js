"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const TEAM = [
  {
    name: "Osama",
    role: "Director Marketing & Strategy",
    img: "/team/osama.jpg",
    linkedin: "https://www.linkedin.com/in/osamazulqarnain",
  },
  {
    name: "Zeeshan",
    role: "Director Operations & Client Success",
    img: "/team/zeeshan.jpg",
    linkedin: "https://www.linkedin.com/in/zahid-zeeshan",
  },
  {
    name: "Zaryab",
    role: "Creative Head",
    img: "/team/zaryab.jpg",
    linkedin: null,
  },
  {
    name: "Inam",
    role: "Director HR & Finance",
    img: "/team/inam.jpg",
    linkedin: "https://www.linkedin.com/in/inam-ul-haq-63530514b",
  },
];

export default function TeamSlider() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-4 md:justify-center md:overflow-visible"
      >
        {TEAM.map((m) => (
          <FlipCard key={m.name} m={m} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
        <button onClick={() => scrollBy(-1)} aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-teal/30 text-teal-deep transition hover:bg-teal hover:text-white">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => scrollBy(1)} aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-teal/30 text-teal-deep transition hover:bg-teal hover:text-white">
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">
        Hover or tap a photo to connect on LinkedIn
      </p>
    </div>
  );
}

function FlipCard({ m }) {
  const inner = (
    <div className="group relative h-44 w-44 [perspective:1000px] md:h-48 md:w-48">
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* front: photo */}
        <div className="absolute inset-0 overflow-hidden rounded-full shadow-lg ring-4 ring-fox-orange/30 [backface-visibility:hidden]">
          <Image src={m.img} alt={m.name} fill className="object-cover" sizes="192px" />
        </div>
        {/* back: LinkedIn */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-deep text-center text-white shadow-lg ring-4 ring-fox-orange/30 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Linkedin size={36} className="fill-white" />
          <span className="mt-2 px-2 font-display text-sm font-700">
            {m.linkedin ? "View Profile" : m.name}
          </span>
          {!m.linkedin && <span className="mt-1 text-[11px] text-mist/80">Creative Head</span>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-56 shrink-0 snap-center flex-col items-center px-2">
      {m.linkedin ? (
        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}>
          {inner}
        </a>
      ) : (
        inner
      )}
      <div className="mt-5 text-center">
        <h3 className="font-display text-lg font-700 text-ink">{m.name}</h3>
        <p className="mt-1 text-sm text-teal">{m.role}</p>
      </div>
    </div>
  );
}
