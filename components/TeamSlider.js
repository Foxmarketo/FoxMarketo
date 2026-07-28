"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TEAM = [
  { name: "Osama", role: "Growth Marketing Manager", img: "/team/osama.jpg" },
  { name: "Zeeshan", role: "Operations Manager", img: "/team/zeeshan.jpg" },
  { name: "Zaryab", role: "Creative Designer", img: "/team/zaryab.jpg" },
  { name: "Inam", role: "Finance Manager", img: "/team/inam.jpg" },
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
          <Card key={m.name} m={m} />
        ))}
      </div>

      {/* arrows: useful on mobile / small screens */}
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
    </div>
  );
}

function Card({ m }) {
  return (
    <div className="flex w-56 shrink-0 snap-center flex-col items-center px-2">
      <div className="relative h-44 w-44 overflow-hidden rounded-full shadow-lg ring-4 ring-fox-orange/30 md:h-48 md:w-48">
        <Image src={m.img} alt={m.name} fill className="object-cover" sizes="192px" />
      </div>
      <div className="mt-5 text-center">
        <h3 className="font-display text-lg font-700 text-ink">{m.name}</h3>
        <p className="mt-1 text-sm text-teal">{m.role}</p>
      </div>
    </div>
  );
}
