import type { Metadata } from "next";
import { shaders } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import ShaderGrid from "./ShaderGrid";

export const metadata: Metadata = {
  title: "Shaders — Tidecraft",
  description:
    "Animated shader backgrounds that run on the GPU — aurora, liquid metal, ember and more. Preview each one live, then copy its rebuild prompt.",
};

export default function ShadersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Shaders"
        title="Motion behind everything"
        copy="Animated backgrounds that run on the GPU. Every preview below is live — the real shader, running in your browser. Open one to copy its rebuild prompt."
      />
      <div className="mt-12">
        <ShaderGrid items={shaders} />
      </div>
    </div>
  );
}
