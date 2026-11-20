"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/templates", label: "Library" },
  { href: "/components", label: "Components" },
  { href: "/shaders", label: "Shaders" },
  { href: "/sections", label: "Sections" },
  { href: "/ui", label: "UI" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Small wave mark used next to the wordmark. */
function WaveMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 12c3.5-4 7-4 10.5 0s7 4 10.5 0 5-3.2 5-3.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M3 20c3.5-4 7-4 10.5 0s7 4 10.5 0 5-3.2 5-3.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-x-0 border-t-0">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 text-snow"
            aria-label="Tidecraft home"
          >
            <WaveMark className="h-7 w-7 text-tide" />
            <span className="font-display text-2xl tracking-tight">
              Tidecraft
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-panel text-snow"
                      : "text-mist hover:bg-panel hover:text-snow"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="hidden rounded-full bg-tide px-5 py-2.5 text-sm font-semibold text-abyss transition hover:bg-foam sm:inline-flex"
            >
              Go Unlimited
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-snow transition hover:bg-panel lg:hidden"
            >
              {open ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="border-t border-line lg:hidden">
            <ul className="space-y-1 px-4 py-4 sm:px-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive(link.href)
                        ? "bg-panel text-snow"
                        : "text-mist hover:bg-panel hover:text-snow"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-tide px-5 py-3 text-center text-sm font-semibold text-abyss transition hover:bg-foam"
                >
                  Go Unlimited
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
