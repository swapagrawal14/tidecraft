import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-tide">
        404 &middot; Page not found
      </p>
      <h1 className="mt-6 font-display text-6xl tracking-tight text-snow sm:text-7xl">
        Lost at sea.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
        This page drifted off with the tide. It may have been moved, renamed,
        or never existed at all. Head back to shore and pick up where you left
        off.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-tide px-6 py-3 text-sm font-semibold text-abyss transition hover:bg-foam"
        >
          Back home
        </Link>
        <Link
          href="/templates"
          className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-snow transition hover:bg-panel"
        >
          Browse templates
        </Link>
      </div>
    </main>
  );
}
