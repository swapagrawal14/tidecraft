import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { inspirationShots, templates } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Inspiration — Tidecraft",
  description:
    "A Pinterest-style wall of template previews and atmospheric shots. Scroll, save the vibe, open the template.",
};

/** Interleave template previews and atmospheric shots, masonry style. */
function buildWall() {
  const wall: {
    key: string;
    src: string;
    caption: string;
    href?: string;
  }[] = [];
  templates.forEach((template, i) => {
    if (template.image) {
      wall.push({
        key: `template-${template.slug}`,
        src: template.image,
        caption: template.name,
        href: `/templates/${template.slug}`,
      });
    }
    const shot = inspirationShots[i];
    if (shot) {
      wall.push({
        key: `shot-${shot.src}`,
        src: shot.src,
        caption: shot.caption,
        href: shot.template ? `/templates/${shot.template}` : undefined,
      });
    }
  });
  return wall;
}

export default function InspirationPage() {
  const wall = buildWall();
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24">
      <div className="pt-16">
        <SectionHeading
          eyebrow="Inspiration"
          title="Scroll. Feel something. Steal it."
          copy="A wall of everything Tidecraft looks like — template previews mixed with the light, texture, and colour that inspired them. Tap any tile to open its template."
        />
      </div>

      <div className="mt-14 columns-2 gap-5 lg:columns-3 [&>*]:mb-5">
        {wall.map((tile) => {
          const inner = (
            <>
              <Image
                src={tile.src}
                alt={tile.caption}
                width={800}
                height={600}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full rounded-2xl border border-line object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-abyss/85 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-snow opacity-0 transition group-hover:opacity-100">
                {tile.caption}
              </span>
            </>
          );
          const classes =
            "card-hover group relative block overflow-hidden rounded-2xl break-inside-avoid";
          return tile.href ? (
            <Link key={tile.key} href={tile.href} className={classes}>
              {inner}
            </Link>
          ) : (
            <figure key={tile.key} className={classes}>
              {inner}
            </figure>
          );
        })}
      </div>

      <p className="mt-4 text-center text-sm text-mist">
        {wall.length} tiles — {templates.length} templates and{" "}
        {inspirationShots.length} atmosphere shots. New tiles land every Friday.
      </p>
    </main>
  );
}
