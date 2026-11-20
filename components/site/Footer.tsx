import Link from "next/link";

const LIBRARY_LINKS = [
  { href: "/templates", label: "Templates" },
  { href: "/components", label: "Components" },
  { href: "/shaders", label: "Shaders" },
  { href: "/sections", label: "Sections" },
  { href: "/ui", label: "UI Screens" },
] as const;

const PRODUCT_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/free", label: "Free" },
  { href: "/faq", label: "FAQ" },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-tide">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-mist transition hover:text-snow"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block" aria-label="Tidecraft home">
              <span className="text-gradient font-display text-5xl tracking-tight sm:text-6xl">
                Tidecraft
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-mist">
              A library of cinematic, scroll-driven templates, components and
              shaders. Copy a rebuild prompt, paste it into your AI, and ship
              a site that moves like the tide.
            </p>
          </div>
          <FooterColumn title="Library" links={LIBRARY_LINKS} />
          <FooterColumn title="Product" links={PRODUCT_LINKS} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js, GSAP and a lot of tide.</p>
          <p>&copy; 2026 Tidecraft</p>
        </div>
      </div>
    </footer>
  );
}
