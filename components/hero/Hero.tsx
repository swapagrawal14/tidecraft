import Link from "next/link";
import TideShader from "@/components/shader/TideShader";
import Reveal from "@/components/motion/Reveal";

const stats = [
  { value: "12+", label: "templates ready to copy" },
  { value: "4", label: "collections to build from" },
  { value: "Weekly", label: "fresh drops, every week" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <TideShader variant="aurora" className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <Reveal>
          <p className="inline-flex items-center rounded-full border border-line bg-panel/60 px-4 py-1.5 text-xs font-medium tracking-wide text-mist backdrop-blur">
            Cinematic websites, rebuilt by prompt
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-snow sm:text-7xl lg:text-8xl">
            Ship websites that{" "}
            <span className="text-gradient">move like the tide.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
            A library of cinematic, scroll-driven templates, components and
            shaders. Copy a rebuild prompt, paste it into your AI builder, and
            launch a site that feels hand-made.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/templates"
              className="inline-flex h-12 items-center justify-center rounded-full bg-tide px-8 text-base font-semibold text-abyss transition hover:bg-foam"
            >
              Browse templates
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-panel/60 px-8 text-base font-semibold text-snow backdrop-blur transition hover:border-tide/60"
            >
              See pricing
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.4} className="w-full">
          <dl className="mx-auto mt-16 grid w-full max-w-2xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-semibold text-snow">{stat.value}</dd>
                <dd className="mt-1 text-sm text-mist">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <p className="mt-16 text-xs uppercase tracking-[0.3em] text-mist/70 motion-reduce:animate-none">
          Scroll
        </p>
      </div>
    </section>
  );
}
