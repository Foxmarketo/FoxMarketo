import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-7xl font-900 text-fox-red">404</p>
      <h1 className="mt-3 font-display text-2xl font-800 text-ink">Page not found</h1>
      <p className="mt-2 text-slate-500">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-6 rounded-full bg-teal px-7 py-3 font-display text-sm font-700 text-white">
        Back to Home
      </Link>
    </section>
  );
}
