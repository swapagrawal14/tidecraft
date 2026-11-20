import type { Metadata } from "next";
import { templates } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import TemplateFilters from "./TemplateFilters";

export const metadata: Metadata = {
  title: "Templates — Tidecraft",
  description:
    "Browse the Tidecraft template library: cinematic, scroll-driven website templates with copy-paste rebuild prompts.",
};

export default function TemplatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Library"
        title="Templates"
        copy="Every template is a full page that moves like the tide. Find one you like, copy its rebuild prompt, and launch it with your AI."
      />
      <div className="mt-12">
        <TemplateFilters items={templates} />
      </div>
    </main>
  );
}
