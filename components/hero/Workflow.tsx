import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Copy",
    copy: "Pick a template, component or shader from the library and copy its rebuild prompt. No boilerplate, no setup files.",
  },
  {
    number: "02",
    title: "Paste",
    copy: "Drop the prompt into your AI builder of choice. It describes the motion, the layout and the feel — not just the colours.",
  },
  {
    number: "03",
    title: "Launch",
    copy: "Ship a site that moves, with the full source in your hands. Tweak it, restyle it, make it yours.",
  },
];

export default function Workflow() {
  return (
    <section className="border-y border-line bg-deep/60">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Copy. Paste. Launch."
            copy="Three steps from a blank tab to a site that actually moves."
          />
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.number} className="relative">
              <Reveal delay={index * 0.1}>
                <p className="font-mono text-sm tracking-widest text-tide">
                  {step.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-snow">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mist">{step.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <Link
              href="/templates"
              className="text-base font-semibold text-tide hover:text-foam"
            >
              Start with a template &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
