import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Pill, SectionHeading } from "@/components/ui";
import LivePreview from "@/components/library/LivePreview";
import type { TemplateItem } from "@/lib/data";

/**
 * Local featured card. TemplateCard (components/library/TemplateCard.tsx)
 * is owned by another agent; this card is intentionally self-contained
 * and links to /templates/[slug] the same way.
 */
function FeaturedCard({ item }: { item: TemplateItem }) {
  return (
    <Link
      href={`/templates/${item.slug}`}
      className="card-hover group block overflow-hidden rounded-3xl border border-line bg-panel"
    >
      <LivePreview item={item} className="h-44 transition duration-500 group-hover:scale-[1.03]" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-snow">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">{item.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>{item.category}</Pill>
          <Pill>{item.difficulty}</Pill>
        </div>
        <p className="mt-5 text-sm font-semibold text-tide">
          View template &rarr;
        </p>
      </div>
    </Link>
  );
}

export default function FeaturedTemplates({ items }: { items: TemplateItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Featured"
          title="Start with something that already moves"
          copy="Three templates from the library, ready to copy. Each one ships with its full rebuild prompt and source."
        />
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.08}>
            <FeaturedCard item={item} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-12 text-center">
          <Link
            href="/templates"
            className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-panel px-8 text-base font-semibold text-snow transition hover:border-tide/60"
          >
            Browse all templates
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
