import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui";

/** Homepage showreel — a real MP4 rendered from the inspiration shots. */
export default function Showreel() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Showreel"
          title="Watch the tide move"
          copy="Twenty-five seconds of what Tidecraft feels like — twelve templates, six moods, one prompt away."
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-14 overflow-hidden rounded-3xl border border-line">
          <video
            src="/showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Tidecraft showreel video"
            className="aspect-video w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
