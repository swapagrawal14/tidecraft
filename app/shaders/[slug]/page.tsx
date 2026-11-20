import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { shaders } from "@/lib/data";
import { CopyButton, Pill } from "@/components/ui";
import TideShader from "@/components/shader/TideShader";
import PromptPanel from "@/components/library/PromptPanel";

export function generateStaticParams() {
  return shaders.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = shaders.find((shader) => shader.slug === slug);
  if (!item) {
    return { title: "Shader not found — Tidecraft" };
  }
  return {
    title: `${item.name} — Tidecraft Shaders`,
    description: item.tagline,
  };
}

export default async function ShaderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = shaders.find((shader) => shader.slug === slug);
  if (!item) {
    notFound();
  }

  const variant = item.shader ?? "aurora";

  return (
    <div>
      {/* Full-bleed live shader background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <TideShader variant={variant} className="h-full w-full" />
        </div>
        <div
          className="absolute inset-0 bg-abyss/55"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28">
          <Link
            href="/shaders"
            className="inline-flex items-center gap-2 text-sm font-medium text-foam transition hover:text-snow"
          >
            <span aria-hidden="true">←</span> All shaders
          </Link>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-tide">
            Shader · {variant}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-snow sm:text-6xl">
            {item.name}
          </h1>
          <p className="text-gradient mt-4 text-2xl font-medium">{item.tagline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-snow/90">
            {item.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          <div className="glass mt-12 rounded-2xl p-6 sm:p-8">
            <PromptPanel prompt={item.prompt} />
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CopyButton text={item.prompt} label="Copy prompt" />
              <p className="text-sm text-mist">
                Paste the prompt into your AI tool and it rebuilds this shader
                for your own site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
