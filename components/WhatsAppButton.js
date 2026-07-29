"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname?.startsWith("/get-started")) return null;

  const href = `https://wa.me/${SITE.whatsappPrimary}?text=${encodeURIComponent(
    "Hi Fox Marketo, I'd like a free consultation."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110"
    >
      <Image src="/whatsapp-white.png" alt="WhatsApp" width={32} height={32} className="h-8 w-8" />
    </a>
  );
}
