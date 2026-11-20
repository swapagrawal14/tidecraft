import Image from "next/image";
import Link from "next/link";
import type { TemplateItem } from "@/lib/data";

/**
 * Cinematic scrolling strip of template preview images on the homepage.
 * Pure CSS animation (pauses on hover, disabled for reduced motion).
 * The list is duplicated so the loop is seamless.
 */
export default function Marquee({ items }: { items: TemplateItem[] }) {
  const withImages = items.filter((item) => item.image);
  if (withImages.length === 0) return null;
  const loop = [...withImages, ...withImages];
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
            aria-hidden={index >= withImages.length}
            tabIndex={index >= withImages.length ? -1 : 0}
            className="group relative block h-40 w-72 shrink-0 overflow-hidden rounded-2xl border border-line"
          >
            <Image
              src={item.image as string}
              alt=""
              fill
              sizes="288px"
              className="object-cover transition duration-500 group-hover:scale-105"
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
