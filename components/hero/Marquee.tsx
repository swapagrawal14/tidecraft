import Link from "next/link";
import LivePreview from "@/components/library/LivePreview";
import type { TemplateItem } from "@/lib/data";

/**
 * Cinematic scrolling strip of live template previews on the homepage.
 * Pure CSS animation (pauses on hover, disabled for reduced motion).
 * The list is duplicated so the loop is seamless.
 */
export default function Marquee({ items }: { items: TemplateItem[] }) {
  if (items.length === 0) return null;
  const loop = [...items, ...items];
  return (
    <section
      aria-label="Template previews"
      className="relative overflow-hidden border-y border-line py-8"
    >
      <div className="marquee-track flex w-max gap-5">
        {loop.map((item, index) => (
          <Link
            key={`${item.slug}-${index}`}
            href={`/templates/${item.slug}`}
            aria-hidden={index >= items.length}
            tabIndex={index >= items.length ? -1 : 0}
            className="group relative block h-40 w-72 shrink-0 overflow-hidden rounded-2xl border border-line"
          >
            <LivePreview
              item={item}
              className="h-full w-full transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss/85 to-transparent px-4 pb-3 pt-8 text-sm font-semibold text-snow">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
