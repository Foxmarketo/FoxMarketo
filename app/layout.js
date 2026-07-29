import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import EbookPopup from "@/components/EbookPopup";
import TidioChat from "@/components/TidioChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, Full-Stack Digital Marketing Agency`,
    template: `%s, ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "digital marketing agency",
    "SEO",
    "PPC",
    "social media management",
    "web development",
    "video editing",
    "YouTube management",
    "Fox Marketo",
  ],
  openGraph: {
    title: `${SITE.name}, Full-Stack Digital Marketing Agency`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/logo-full.png", width: 1200, height: 630, alt: SITE.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}, Full-Stack Digital Marketing Agency`,
    description: SITE.description,
    images: ["/logo-full.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Warm up the connection to Tidio so the chat widget loads faster */}
        <link rel="preconnect" href="https://code.tidio.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://widget-v4.tidiochat.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://code.tidio.co" />
        <link rel="dns-prefetch" href="https://widget-v4.tidiochat.com" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <EbookPopup />
        <Analytics />
        <TidioChat />
      </body>
    </html>
  );
}
