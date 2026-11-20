"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { components, type LibraryItem } from "@/lib/data";
import { Pill, SectionHeading } from "@/components/ui";

/**
 * Components library list.
 *
 * NOTE: this file carries the page and its small client-side search filter
 * together, because the filter must live in this file and a "use client"
 * boundary applies per module. The data is static seed data, so rendering
 * the grid on the client costs nothing and keeps search instant.
 */

const FALLBACK_GRADIENT: [string, string] = ["#2dd4bf", "#0ea5e9"];

function gradientOf(item: LibraryItem): [string, string] {
  return item.gradient ?? FALLBACK_GRADIENT;
}

function matches(item: LibraryItem, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [item.name, item.tagline, item.description, ...item.tags]
    .join(" ")
    .toLowerCase();
  return q.split(/\s+/).every((word) => haystack.includes(word));
}

function ComponentCard({ item }: { item: LibraryItem }) {
  const [from, to] = gradientOf(item);
  return (
    <Link
      href={`/components/${item.slug}`}
      className="card-hover group block overflow-hidden rounded-2xl border border-line bg-panel"
    >
      <div
        className="relative h-36"
        style={{
          background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/50 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 font-mono text-xs uppercase tracking-[0.25em] text-white/90">
          Component
        </span>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-snow transition group-hover:text-tide">
          {item.name}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-mist">{item.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </div>
    </Link>
  );
}

function ComponentFilter({ items }: { items: LibraryItem[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => items.filter((item) => matches(item, query)),
    [items, query],
  );

  return (
    <div>
      <div className="mx-auto mt-10 max-w-xl">
        <label htmlFor="component-search" className="sr-only">
          Search components
        </label>
        <input
          id="component-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search components by name or tag…"
          className="w-full rounded-full border border-line bg-panel px-5 py-3 text-sm text-snow placeholder:text-mist/60 focus:border-tide focus:outline-none"
        />
        <p className="mt-3 text-center text-sm text-mist" aria-live="polite">
          {filtered.length === items.length
            ? `${items.length} components in the library`
            : `${filtered.length} of ${items.length} components match “${query.trim()}”`}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ComponentCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-line bg-panel p-10 text-center">
          <p className="text-lg font-semibold text-snow">No components found</p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Nothing matches “{query.trim()}”. Try a different word, or browse
            the full library.
          </p>
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

export default function ComponentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Components"
        title="One piece at a time"
        copy="Small, focused pieces you can drop into a page you are already building. Every component ships with a rebuild prompt — copy it, paste it into your AI, and make it yours."
      />
      <ComponentFilter items={components} />
    </main>
  );
}
