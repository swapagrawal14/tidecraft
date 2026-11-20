import Link from "next/link";
import type { TemplateItem } from "@/lib/data";
import { Pill } from "@/components/ui";
import LivePreview from "@/components/library/LivePreview";

/**
 * Card for one library template. Pure presentational component: a live
 * animated preview of the template's concept (drawn in code — it plays),
 * name, tagline, category and difficulty pills, and tags.
 * Links to the template detail page.
 */
export default function TemplateCard({ item }: { item: TemplateItem }) {
  return (
    <Link
      href={`/templates/${item.slug}`}
      aria-label={`${item.name} — ${item.tagline}`}
      className="card-hover group block overflow-hidden rounded-2xl border border-line bg-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tide"
    >
      <LivePreview item={item} className="h-44 transition duration-500 group-hover:scale-[1.03]" />

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
