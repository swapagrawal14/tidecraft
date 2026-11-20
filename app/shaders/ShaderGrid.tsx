"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LibraryItem } from "@/lib/data";
import { Pill } from "@/components/ui";
import TideShader from "@/components/shader/TideShader";

/** Client-side searchable grid of shader cards with live previews. */
export default function ShaderGrid({ items }: { items: LibraryItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) =>
      [item.name, item.tagline, item.description, ...item.tags]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [items, query]);

  return (
    <div>
      <div className="mx-auto flex max-w-xl flex-col gap-3">
        <label htmlFor="shader-search" className="sr-only">
          Search shaders
        </label>
        <input
          id="shader-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search shaders by name or tag…"
          className="w-full rounded-full border border-line bg-panel px-5 py-3 text-sm text-snow placeholder:text-mist focus:border-tide focus:outline-none"
        />
        <p className="text-center text-sm text-mist" aria-live="polite">
          {filtered.length === items.length
            ? `${items.length} shader${items.length === 1 ? "" : "s"} in the library`
            : `${filtered.length} of ${items.length} shaders match “${query.trim()}”`}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-line bg-panel p-8 text-center">
          <p className="text-lg font-semibold text-snow">No shaders match that search</p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Try a different word — for example “aurora”, “metal” or “background”.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-6 inline-flex items-center rounded-full bg-tide px-5 py-2.5 text-sm font-semibold text-abyss transition hover:bg-foam"
          >
            Clear search
          </button>
        </div>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/shaders/${item.slug}`}
                className="card-hover group block overflow-hidden rounded-2xl border border-line bg-panel"
              >
                <div className="relative aspect-video overflow-hidden bg-deep">
                  <TideShader
                    variant={item.shader ?? "aurora"}
                    className="absolute inset-0 h-full w-full"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-abyss/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-snow backdrop-blur">
                    Live preview
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-snow group-hover:text-tide">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{item.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                  <p className="mt-4 text-sm font-medium text-tide">
                    View shader <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
