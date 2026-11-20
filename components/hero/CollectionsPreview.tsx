import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui";
import type { Collection } from "@/lib/data";

/** Homepage preview of the moodboard collections. */
export default function CollectionsPreview({
  items,
}: {
  items: Collection[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Collections"
          title="Pick a vibe, not a layout"
          copy="Six moodboards, each a feeling first and a template second. Open one and the templates inside already match."
        />
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((collection, index) => (
          <Reveal key={collection.slug} delay={index * 0.06}>
            <Link
              href={`/collections/${collection.slug}`}
              className="card-hover group block overflow-hidden rounded-3xl border border-line bg-panel"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={collection.cover}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-snow transition-colors group-hover:text-tide">
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {collection.tagline}
                </p>
                <p className="mt-4 text-sm font-semibold text-tide">
                  {collection.templates.length} templates &rarr;
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-12 text-center">
          <Link
            href="/inspiration"
            className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-panel px-8 text-base font-semibold text-snow transition hover:border-tide/60"
          >
            Browse the inspiration wall
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
