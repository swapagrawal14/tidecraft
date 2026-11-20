import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { components } from "@/lib/data";
import { CopyButton, Pill } from "@/components/ui";
import PromptPanel from "@/components/library/PromptPanel";

/** Static detail pages for every component in the library. */
export function generateStaticParams() {
  return components.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = components.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} — Tidecraft Components`,
    description: item.tagline,
  };
}

const FALLBACK_GRADIENT: [string, string] = ["#2dd4bf", "#0ea5e9"];

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = components.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const [from, to] = item.gradient ?? FALLBACK_GRADIENT;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Link
        href="/components"
        className="text-sm font-medium text-tide transition hover:text-foam"
      >
        &larr; All components
      </Link>

      {/* Preview band */}
      <div
        className="relative mt-8 overflow-hidden rounded-3xl border border-line"
        style={{
          background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/60 via-abyss/10 to-transparent" />
        <div className="relative px-8 py-16 sm:px-12 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/80">
            Component
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {item.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/85">
            {item.tagline}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-2xl font-semibold text-snow">About this component</h2>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            {item.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          <div className="mt-10">
            <PromptPanel prompt={item.prompt} />
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-line bg-panel p-6">
          <h2 className="text-base font-semibold text-snow">Take it with you</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Copy the rebuild prompt and paste it into your AI to recreate this
            component in your own project.
          </p>
          <div className="mt-5">
            <CopyButton text={item.prompt} label="Copy rebuild prompt" />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-mist/70">
            The prompt covers behaviour, motion, and the reduced-motion
            fallback, so the result should feel the same without copying any
            source.
          </p>
        </aside>
      </div>
    </main>
  );
}
