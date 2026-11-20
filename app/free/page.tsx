import Link from "next/link";
import { Pill, SectionHeading } from "@/components/ui";
import { components, templates } from "@/lib/data";

// The free starter set: every template and component in the current seed
// data, labelled free on this page only. (No item carries a "free" tag in
// lib/data — this page is the only place the free label is applied.)
const FREE_TEMPLATES = templates;
const FREE_COMPONENTS = components;

export default function FreePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24">
      <SectionHeading
        eyebrow="Free starter set"
        title="Start building for free."
        copy="A small set of templates and components you can copy today — no account, no card, no expiry. The prompts are the same full rebuild prompts paying members get; the free set is simply smaller."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-snow">What you get</h2>
          <ul className="mt-4 flex flex-col gap-3 leading-relaxed text-mist">
            <li>Full rebuild prompts for every free item — not samples or teasers.</li>
            <li>Use the finished sites for personal and client work.</li>
            <li>Keep the source code you generate, forever.</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-snow">How it works</h2>
          <ol className="mt-4 flex list-decimal flex-col gap-3 pl-5 leading-relaxed text-mist">
            <li>Pick a template or component below.</li>
            <li>Copy its rebuild prompt from the detail page.</li>
            <li>Paste it into your AI tool and launch your site.</li>
          </ol>
        </div>
      </div>

      <section aria-labelledby="free-templates-heading" className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 id="free-templates-heading" className="text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
            Free templates
          </h2>
          <Link href="/templates" className="shrink-0 text-sm font-semibold text-tide underline-offset-4 hover:underline">
            Browse all templates
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FREE_TEMPLATES.map((item) => (
            <Link
              key={item.slug}
              href={`/templates/${item.slug}`}
              className="card-hover group block overflow-hidden rounded-2xl border border-line bg-panel"
            >
              <div
                aria-hidden="true"
                className="h-36 w-full"
                style={{
                  background: `linear-gradient(135deg, ${item.palette[0]}, ${item.palette[1]} 55%, ${item.palette[2]})`,
                }}
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-snow group-hover:text-foam">
                    {item.name}
                  </h3>
                  <Pill>Free</Pill>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist">{item.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>{item.category}</Pill>
                  <Pill>{item.difficulty}</Pill>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="free-components-heading" className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 id="free-components-heading" className="text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
            Free components
          </h2>
          <Link href="/components" className="shrink-0 text-sm font-semibold text-tide underline-offset-4 hover:underline">
            Browse all components
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {FREE_COMPONENTS.map((item) => (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className="card-hover group block overflow-hidden rounded-2xl border border-line bg-panel"
            >
              <div
                aria-hidden="true"
                className="h-28 w-full"
                style={{
                  background: item.gradient
                    ? `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[1]})`
                    : undefined,
                }}
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-snow group-hover:text-foam">
                    {item.name}
                  </h3>
                  <Pill>Free</Pill>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist">{item.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="upgrade-heading" className="mt-20">
        <div className="glass rounded-3xl px-8 py-12 text-center">
          <h2 id="upgrade-heading" className="text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
            Want the whole library?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mist">
            The free set is a taste. A paid plan unlocks every template,
            component, shader, section, and UI screen — plus new drops every
            week and higher fair-use limits for copying premium items.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center rounded-full bg-tide px-6 py-3 text-sm font-semibold text-abyss transition hover:bg-foam"
          >
            See plans and go unlimited
          </Link>
        </div>
      </section>
    </main>
  );
}
