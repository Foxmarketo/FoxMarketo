"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

const accents = [
  "bg-teal/10 text-teal",
  "bg-fox-red/10 text-fox-red",
  "bg-fox-orange/15 text-fox-orange",
];

export default function ServicesGrid({ limit }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accents[i % 3]}`}>
              <Icon size={24} />
            </div>
            <h3 className="mb-2 font-display text-lg font-700 text-ink">{s.title}</h3>
            <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
