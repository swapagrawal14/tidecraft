import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, templates } from "@/lib/data";
import { Pill, SectionHeading } from "@/components/ui";
import TemplateCard from "@/components/library/TemplateCard";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) return { title: "Collection not found" };
  return {
    title: `${collection.name} — Tidecraft`,
    description: collection.tagline,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = collections.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const collection = collections[index];
  const members = collection.templates
    .map((templateSlug) => templates.find((t) => t.slug === templateSlug))
    .filter((t): t is (typeof templates)[number] => Boolean(t));
  const prev = index > 0 ? collections[index - 1] : null;
  const next = index < collections.length - 1 ? collections[index + 1] : null;
  const [c1, c2, c3] = collection.palette;

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24">
      <div className="pt-16">
        <Link
          href="/collections"
          className="text-sm font-medium text-tide transition hover:text-foam"
        >
          &larr; All collections
        </Link>
        <div className="mt-6">
          <SectionHeading
            eyebrow="Collection"
            title={collection.name}
            copy={collection.description}
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {collection.mood.map((m) => (
            <Pill key={m}>{m}</Pill>
          ))}
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{
              background: `linear-gradient(135deg, ${c1}, ${c2} 55%, ${c3})`,
              color: "#04060d",
            }}
          >
            {members.length} templates inside
          </span>
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((item) => (
          <TemplateCard key={item.slug} item={item} />
        ))}
      </div>

      <nav
        aria-label="More collections"
        className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          {prev ? (
            <Link href={`/collections/${prev.slug}`} className="group inline-flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-mist">
                Previous collection
              </span>
              <span className="mt-1 text-lg font-semibold text-snow transition group-hover:text-tide">
                {prev.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/collections"
              className="text-lg font-semibold text-snow transition hover:text-tide"
            >
              All collections
            </Link>
          )}
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link
              href={`/collections/${next.slug}`}
              className="group inline-flex flex-col sm:items-end"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-mist">
                Next collection
              </span>
              <span className="mt-1 text-lg font-semibold text-snow transition group-hover:text-tide">
                {next.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/collections"
              className="text-lg font-semibold text-snow transition hover:text-tide"
            >
              All collections
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
