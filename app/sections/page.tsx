import type { Metadata } from "next";
import { sections } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import SectionFilters from "./SectionFilters";

export const metadata: Metadata = {
  title: "Sections — Tidecraft",
  description:
    "Browse the Tidecraft section library: pricing, testimonials, heroes and more — one page band at a time, each with a copy-paste rebuild prompt.",
};

export default function SectionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Library"
        title="Sections"
        copy="Build a page a band at a time. Pricing tables, testimonial walls, footers that hold up — the parts every site needs and nobody enjoys rebuilding. Pick one, copy its prompt, drop it into a page you already have."
      />
      <div className="mt-12">
        <SectionFilters items={sections} />
      </div>
    </main>
  );
}
