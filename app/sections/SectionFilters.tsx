"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LibraryItem } from "@/lib/data";
import { Pill } from "@/components/ui";

const FALLBACK_GRADIENT: [string, string] = ["#2dd4bf", "#a78bfa"];

/** Card for one section: gradient preview, name, tagline, tags. */
function SectionCard({ item }: { item: LibraryItem }) {
  const [first, second] = item.gradient ?? FALLBACK_GRADIENT;

  return (
    <Link
      href={`/sections/${item.slug}`}
      aria-label={`${item.name} — ${item.tagline}`}
      className="card-hover group block overflow-hidden rounded-2xl border border-line bg-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tide"
    >
      <div
        className="relative h-44 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${first} 0%, ${second} 100%)`,
        }}
        aria-hidden="true"
      >
        {/* Subtle dot pattern over the gradient. */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Tide lines. */}
        <svg
          className="absolute inset-x-0 bottom-0 h-12 w-full"
          viewBox="0 0 400 48"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 24 C 60 8, 120 40, 200 24 S 340 8, 400 24"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
          />
          <path
            d="M0 36 C 60 22, 120 48, 200 36 S 340 22, 400 36"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
        </svg>
        {/* Oversized initial as a watermark. */}
        <span className="absolute bottom-2 left-4 select-none font-display text-6xl italic text-white/25">
          {item.name.charAt(0)}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-snow transition-colors group-hover:text-tide">
          {item.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-mist">{item.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-tide">
          View section
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

/** Client-side search over the section list. */
export default function SectionFilters({ items }: { items: LibraryItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((item) => {
      const haystack = [item.name, item.tagline, item.description, ...item.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [items, query]);

  const countLine =
    filtered.length === items.length
      ? `${items.length} sections`
      : `Showing ${filtered.length} of ${items.length} sections`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label htmlFor="section-search" className="sr-only">
          Search sections
        </label>
        <input
          id="section-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search sections…"
          className="w-full rounded-full border border-line bg-panel px-5 py-2.5 text-sm text-snow placeholder:text-mist/60 focus:border-tide focus:outline-none sm:max-w-sm"
        />
        <p
          className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-mist"
          aria-live="polite"
        >
          {countLine}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <SectionCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-line bg-panel p-10 text-center">
          <p className="text-lg font-medium text-snow">No sections match your search.</p>
          <p className="mt-2 text-sm text-mist">Try a different keyword.</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-6 inline-flex items-center rounded-full bg-tide px-5 py-2.5 text-sm font-semibold text-abyss transition hover:bg-foam"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
