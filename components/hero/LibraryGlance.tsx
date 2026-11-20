import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui";

export interface LibraryCounts {
  templates: number;
  components: number;
  shaders: number;
  sections: number;
  ui: number;
}

const bands: {
  key: keyof LibraryCounts;
  name: string;
  href: string;
  copy: string;
}[] = [
  {
    key: "templates",
    name: "Templates",
    href: "/templates",
    copy: "Full pages that arrive with motion built in.",
  },
  {
    key: "components",
    name: "Components",
    href: "/components",
    copy: "One piece at a time, dropped into what you already have.",
  },
  {
    key: "shaders",
    name: "Shaders",
    href: "/shaders",
    copy: "Animated backgrounds that run on the GPU.",
  },
  {
    key: "sections",
    name: "Sections",
    href: "/sections",
    copy: "Build a page a band at a time.",
  },
  {
    key: "ui",
    name: "UI screens",
    href: "/ui",
    copy: "The screen behind the landing page.",
  },
];

export default function LibraryGlance({ counts }: { counts: LibraryCounts }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="The library"
          title="Everything you need, one piece at a time"
          copy="Start with a whole page, or take a single piece. Every item ships with a rebuild prompt you can copy and use."
        />
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {bands.map((band, index) => (
          <Reveal key={band.key} delay={index * 0.08}>
            <Link
              href={band.href}
              className="glass card-hover flex h-full flex-col rounded-3xl p-6"
            >
              <span className="text-4xl font-semibold text-snow">
                {counts[band.key]}
              </span>
              <span className="mt-2 text-base font-semibold text-snow">
                {band.name}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-mist">
                {band.copy}
              </span>
              <span className="mt-5 text-sm font-semibold text-tide">
                Browse {band.name.toLowerCase()} &rarr;
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
