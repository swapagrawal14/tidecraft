"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { uiScreens, type LibraryItem } from "@/lib/data";
import { Pill, SectionHeading } from "@/components/ui";

const FALLBACK_GRADIENT: [string, string] = ["#2dd4bf", "#0ea5e9"];

/**
 * CSS-only browser-chrome mock of a UI screen. The gradient content area is
 * built from the item's gradient, with translucent bars suggesting a sidebar,
 * header and content blocks. Decorative only — the card text carries the
 * real information.
 */
function ScreenMock({ item }: { item: LibraryItem }) {
  const gradient = item.gradient ?? FALLBACK_GRADIENT;
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-line bg-panel"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-deep px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-glow/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-tide/70" />
        <span className="ml-2 truncate font-mono text-[10px] text-mist">
          tidecraft.app/ui/{item.slug}
        </span>
      </div>
      <div
        className="relative h-40"
        style={{
          background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <div className="absolute inset-y-0 left-0 w-10 bg-abyss/25" />
        <div className="absolute left-14 right-4 top-4 h-3 w-2/5 rounded-full bg-white/50" />
        <div className="absolute left-14 top-10 flex gap-2">
          <span className="h-8 w-16 rounded-md bg-white/30" />
          <span className="h-8 w-16 rounded-md bg-white/30" />
          <span className="h-8 w-16 rounded-md bg-white/20" />
        </div>
        <div className="absolute inset-x-4 bottom-4 left-14 h-14 rounded-md bg-abyss/25" />
      </div>
    </div>
  );
}

function UiCard({ item }: { item: LibraryItem }) {
  return (
    <Link
      href={`/ui/${item.slug}`}
      className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel"
    >
      <ScreenMock item={item} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h2 className="text-xl font-semibold text-snow transition group-hover:text-tide">
          {item.name}
        </h2>
        <p className="text-sm leading-relaxed text-mist">{item.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function UiScreensPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return uiScreens;
    return uiScreens.filter((item) =>
      [item.name, item.tagline, item.description, item.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <SectionHeading
        eyebrow="UI screens"
        title="The screen behind the landing page"
        copy="Dashboards, wallets and consoles — the part of the product people actually live in once they have signed up. Real data shapes, real states, laid out to a reference."
      />

      <div className="mx-auto mt-10 max-w-xl">
        <label htmlFor="ui-search" className="sr-only">
          Search UI screens
        </label>
        <input
          id="ui-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search screens, tags, or topics…"
          className="glass w-full rounded-full px-5 py-3 text-sm text-snow outline-none placeholder:text-mist focus:border-tide/60"
        />
      </div>

      <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-mist">
        {filtered.length} {filtered.length === 1 ? "screen" : "screens"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <UiCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="glass mx-auto mt-8 max-w-xl rounded-2xl p-8 text-center">
          <p className="text-lg font-semibold text-snow">
            No UI screens match “{query}”.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Try a different search, or browse the full library instead.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-5 inline-flex items-center rounded-full bg-tide px-5 py-2.5 text-sm font-semibold text-abyss transition hover:bg-foam"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
