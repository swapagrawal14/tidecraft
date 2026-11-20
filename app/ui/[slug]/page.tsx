import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { uiScreens, type LibraryItem } from "@/lib/data";
import { CopyButton, Pill } from "@/components/ui";

const FALLBACK_GRADIENT: [string, string] = ["#2dd4bf", "#0ea5e9"];

export function generateStaticParams() {
  return uiScreens.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = uiScreens.find((screen) => screen.slug === slug);
  if (!item) return { title: "UI screen not found — Tidecraft" };
  return {
    title: `${item.name} — Tidecraft UI screens`,
    description: item.tagline,
  };
}

/**
 * CSS-only browser-chrome mock of a UI screen. The gradient content area is
 * built from the item's gradient, with translucent bars suggesting a sidebar,
 * KPI row and chart block. Decorative only.
 */
function ScreenMock({ item }: { item: LibraryItem }) {
  const gradient = item.gradient ?? FALLBACK_GRADIENT;
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-line bg-panel"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-deep px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-coral/70" />
        <span className="h-3 w-3 rounded-full bg-amber-glow/70" />
        <span className="h-3 w-3 rounded-full bg-tide/70" />
        <span className="ml-2 truncate font-mono text-xs text-mist">
          tidecraft.app/ui/{item.slug}
        </span>
      </div>
      <div
        className="relative h-64 sm:h-80"
        style={{
          background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <div className="absolute inset-y-0 left-0 w-14 bg-abyss/25 sm:w-20" />
        <div className="absolute left-20 top-5 h-4 w-2/5 rounded-full bg-white/50 sm:left-28" />
        <div className="absolute left-20 top-14 flex gap-3 sm:left-28">
          <span className="h-12 w-20 rounded-lg bg-white/30 sm:w-28" />
          <span className="h-12 w-20 rounded-lg bg-white/30 sm:w-28" />
          <span className="hidden h-12 w-20 rounded-lg bg-white/20 sm:block sm:w-28" />
        </div>
        <div className="absolute bottom-6 left-20 right-6 top-32 rounded-lg bg-abyss/25 sm:left-28" />
        <div className="absolute bottom-10 left-24 right-10 h-px bg-white/40 sm:left-32" />
      </div>
    </div>
  );
}

export default async function UiScreenPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = uiScreens.find((screen) => screen.slug === slug);
  if (!item) notFound();

  const others = uiScreens.filter((screen) => screen.slug !== item.slug);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Link
        href="/ui"
        className="text-sm font-medium text-tide transition hover:text-foam"
      >
        ← All UI screens
      </Link>

      <div className="mt-8">
        <ScreenMock item={item} />
      </div>

      <div className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-tide">
          UI screen
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-snow sm:text-5xl">
          {item.name}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-mist">{item.tagline}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-mist">
          {item.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </div>

      {/*
        Prompt panel. NOTE: CONTRACTS.md names the shared
        components/library/PromptPanel.tsx (owned by W4), but that file does
        not exist in the repo yet. This inline panel serves the same role
        with the existing CopyButton; swap it for the shared PromptPanel
        once W4 lands it.
      */}
      <section className="mt-12 rounded-2xl border border-line bg-panel p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-snow">Rebuild prompt</h2>
          <CopyButton text={item.prompt} label="Copy prompt" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          Copy this prompt into your AI tool and it will rebuild this screen
          for your own project.
        </p>
        <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-xl border border-line bg-deep p-5 font-mono text-sm leading-relaxed text-snow">
          {item.prompt}
        </pre>
      </section>

      {others.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-snow">More UI screens</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/ui/${other.slug}`}
                className="card-hover group rounded-2xl border border-line bg-panel p-5"
              >
                <span className="block text-lg font-semibold text-snow transition group-hover:text-tide">
                  {other.name}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-mist">
                  {other.tagline}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
