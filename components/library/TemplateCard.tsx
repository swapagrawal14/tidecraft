import Link from "next/link";
import type { TemplateItem } from "@/lib/data";
import { Pill } from "@/components/ui";

/**
 * Card for one library template. Pure presentational component: a gradient
 * preview built from the item's own palette, name, tagline, category and
 * difficulty pills, and tags. Links to the template detail page.
 *
 * Preview note: the gradient is drawn from `item.palette` on purpose, so
 * this card never depends on the canvas shader. Once
 * `components/shader/TideShader` exists, the preview div can swap its
 * background for `<TideShader variant={item.shader} />` with the same
 * gradient as its reduced-motion fallback.
 */
export default function TemplateCard({ item }: { item: TemplateItem }) {
  const [first, second, third] = item.palette;

  return (
    <Link
      href={`/templates/${item.slug}`}
      aria-label={`${item.name} — ${item.tagline}`}
      className="card-hover group block overflow-hidden rounded-2xl border border-line bg-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tide"
    >
      <div
        className="relative h-44 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${first} 0%, ${second} 55%, ${third} 100%)`,
        }}
        aria-hidden="true"
      >
        {/* Subtle dot pattern over the gradient. */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Tide lines. */}
        <svg
          className="absolute inset-x-0 bottom-0 h-12 w-full"
          viewBox="0 0 400 48"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 24 C 60 8, 120 40, 200 24 S 340 8, 400 24"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
          />
          <path
            d="M0 36 C 60 22, 120 48, 200 36 S 340 22, 400 36"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
        </svg>
        {/* Oversized initial as a watermark. */}
        <span className="absolute bottom-2 left-4 select-none font-display text-6xl italic text-white/25">
          {item.name.charAt(0)}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-snow transition-colors group-hover:text-tide">
          {item.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-mist">{item.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>{item.category}</Pill>
          <Pill>{item.difficulty}</Pill>
        </div>

        <p className="mt-4 font-mono text-xs text-mist/70">
          {item.tags.join(" · ")}
        </p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-tide">
          View template
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
