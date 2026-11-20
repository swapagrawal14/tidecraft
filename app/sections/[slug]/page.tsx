import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sections } from "@/lib/data";
import { CopyButton, Pill } from "@/components/ui";
import TideShader from "@/components/shader/TideShader";
import PromptPanel from "@/components/library/PromptPanel";

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = sections.find((item) => item.slug === slug);
  if (!section) return { title: "Section not found" };
  return {
    title: `${section.name} — Tidecraft`,
    description: section.tagline,
  };
}

export default async function SectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = sections.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const section = sections[index];
  const prev = index > 0 ? sections[index - 1] : null;
  const next = index < sections.length - 1 ? sections[index + 1] : null;
  const [first, second] = section.gradient ?? ["#2dd4bf", "#a78bfa"];
  const gradient = `linear-gradient(135deg, ${first}, ${second})`;

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      {/* Preview band */}
      <div
        className="relative mt-10 flex min-h-[320px] items-end overflow-hidden rounded-3xl sm:min-h-[400px]"
        style={{ background: gradient }}
      >
        {section.shader ? (
          <TideShader variant={section.shader} className="absolute inset-0" />
        ) : null}
        <div className="absolute inset-0 bg-abyss/30" aria-hidden="true" />
        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-snow/80">
            Section
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-snow sm:text-6xl">
            {section.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-snow/90">
            {section.tagline}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-10">
        <div className="flex flex-wrap items-center gap-2">
          {section.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mist">
          {section.description}
        </p>
        <div className="mt-6">
          <CopyButton text={section.prompt} label="Copy rebuild prompt" />
        </div>
      </div>

      {/* Prompt */}
      <div className="mt-12">
        <PromptPanel prompt={section.prompt} />
      </div>

      {/* What you get */}
      <section aria-label="What you get" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-snow">
          What you get
        </h2>
        <ul className="mt-5 space-y-3">
          {[
            "The complete rebuild prompt, ready to paste",
            "A page band that drops into what you are already building",
            "Personal and client use license",
            "New sections added every week",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-mist">
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tide"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Prev / next */}
      <nav
        aria-label="More sections"
        className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          {prev ? (
            <Link
              href={`/sections/${prev.slug}`}
              className="group inline-flex flex-col"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-mist">
                Previous section
              </span>
              <span className="mt-1 text-lg font-semibold text-snow transition group-hover:text-tide">
                {prev.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/sections"
              className="text-lg font-semibold text-snow transition hover:text-tide"
            >
              All sections
            </Link>
          )}
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link
              href={`/sections/${next.slug}`}
              className="group inline-flex flex-col sm:items-end"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-mist">
                Next section
              </span>
              <span className="mt-1 text-lg font-semibold text-snow transition group-hover:text-tide">
                {next.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/sections"
              className="text-lg font-semibold text-snow transition hover:text-tide"
            >
              All sections
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
