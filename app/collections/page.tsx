import type { Metadata } from "next";
import Link from "next/link";
import { collections, templates } from "@/lib/data";
import { Pill, SectionHeading } from "@/components/ui";
import LivePreview from "@/components/library/LivePreview";

export const metadata: Metadata = {
  title: "Collections — Tidecraft",
  description:
    "Moodboard collections of templates grouped by vibe — coastal calm, neon nights, botanical, dark editorial, warm craft, and playful pop.",
};

export default function CollectionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24">
      <div className="pt-16">
        <SectionHeading
          eyebrow="Collections"
          title="Start from a feeling, not a layout"
          copy="Every collection is a moodboard: templates grouped by the vibe they give off. Pick the feeling your site should have, then steal the template inside it."
        />
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => {
          const coverTemplate = templates.find(
            (t) => t.slug === collection.templates[0]
          )!;
          return (
          <Link
            key={collection.slug}
            href={`/collections/${collection.slug}`}
            className="card-hover group block overflow-hidden rounded-3xl border border-line bg-panel"
          >
            <div className="relative h-52 overflow-hidden">
              <LivePreview
                item={coverTemplate}
                className="h-full w-full transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.2em] text-snow/80">
                {collection.templates.length} templates
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-snow transition-colors group-hover:text-tide">
                {collection.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {collection.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {collection.mood.map((m) => (
                  <Pill key={m}>{m}</Pill>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-tide">
                Open collection &rarr;
              </p>
            </div>
          </Link>
          );
        })}
      </div>
    </main>
  );
}
