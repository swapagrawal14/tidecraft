"use client";

import { useMemo, useState } from "react";
import type { TemplateCategory, TemplateItem } from "@/lib/data";
import TemplateCard from "@/components/library/TemplateCard";

type CategoryFilter = "All" | TemplateCategory;

const CATEGORY_ORDER: TemplateCategory[] = [
  "Landing",
  "Portfolio",
  "Commerce",
  "SaaS",
  "Editorial",
  "Experimental",
];

/** Client-side search + category filter over the template list. */
export default function TemplateFilters({ items }: { items: TemplateItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");

  const categories = useMemo<CategoryFilter[]>(() => {
    const present = new Set(items.map((item) => item.category));
    return ["All", ...CATEGORY_ORDER.filter((c) => present.has(c))];
  }, [items]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== "All" && item.category !== category) return false;
      if (!needle) return true;
      const haystack = [item.name, item.tagline, item.description, item.category, ...item.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [items, query, category]);

  const countLine =
    filtered.length === items.length
      ? `${items.length} templates`
      : `Showing ${filtered.length} of ${items.length} templates`;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label htmlFor="template-search" className="sr-only">
          Search templates
        </label>
        <input
          id="template-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search templates…"
          className="w-full rounded-full border border-line bg-panel px-5 py-2.5 text-sm text-snow placeholder:text-mist/60 focus:border-tide focus:outline-none sm:max-w-sm"
        />
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-mist" aria-live="polite">
          {countLine}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              category === c
                ? "border-tide bg-tide text-abyss"
                : "border-line text-mist hover:border-tide hover:text-snow"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <TemplateCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-line bg-panel p-10 text-center">
          <p className="text-lg font-medium text-snow">No templates match your search.</p>
          <p className="mt-2 text-sm text-mist">
            Try a different keyword or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-6 inline-flex items-center rounded-full bg-tide px-5 py-2.5 text-sm font-semibold text-abyss transition hover:bg-foam"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
