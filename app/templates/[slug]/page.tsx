import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { templates } from "@/lib/data";
import { Pill } from "@/components/ui";
import LivePreview from "@/components/library/LivePreview";
import PromptPanel from "@/components/library/PromptPanel";

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  if (!template) return { title: "Template not found" };
  return {
    title: `${template.name} — Tidecraft`,
    description: template.tagline,
  };
}

const included = [
  "Full source code for the template",
  "The complete rebuild prompt, ready to paste",
  "Personal and client use license",
  "New templates added every week",
];

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = templates.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const template = templates[index];
  const prev = index > 0 ? templates[index - 1] : null;
  const next = index < templates.length - 1 ? templates[index + 1] : null;
  const gradient = `linear-gradient(135deg, ${template.palette[0]}, ${template.palette[1]} 55%, ${template.palette[2]})`;

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      {/* Preview band — the template's concept, playing live */}
      <div
        className="relative mt-10 flex min-h-[320px] items-end overflow-hidden rounded-3xl sm:min-h-[400px]"
        style={{ background: gradient }}
      >
        <LivePreview item={template} className="absolute inset-0" />
        <div className="absolute inset-0 bg-abyss/45" aria-hidden="true" />
        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-snow/80">
            Template
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-snow sm:text-6xl">
            {template.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-snow/90">
            {template.tagline}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-10">
        <div className="flex flex-wrap items-center gap-2">
          <Pill>{template.category}</Pill>
          <Pill>{template.difficulty}</Pill>
          {template.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mist">
          {template.description}
        </p>
      </div>

      {/* Prompt */}
      <div className="mt-12">
        <PromptPanel prompt={template.prompt} />
      </div>

      {/* What you get */}
      <section aria-label="What you get" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-snow">
          What you get
        </h2>
        <ul className="mt-5 space-y-3">
          {included.map((item) => (
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
        aria-label="More templates"
        className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          {prev ? (
            <Link
              href={`/templates/${prev.slug}`}
              className="group inline-flex flex-col"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-mist">
                Previous template
              </span>
              <span className="mt-1 text-lg font-semibold text-snow transition group-hover:text-tide">
                {prev.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/templates"
              className="text-lg font-semibold text-snow transition hover:text-tide"
            >
              All templates
            </Link>
          )}
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link
              href={`/templates/${next.slug}`}
              className="group inline-flex flex-col sm:items-end"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-mist">
                Next template
              </span>
              <span className="mt-1 text-lg font-semibold text-snow transition group-hover:text-tide">
                {next.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/templates"
              className="text-lg font-semibold text-snow transition hover:text-tide"
            >
              All templates
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
