"use client";

import { useState, type ReactNode } from "react";

/** Copy-to-clipboard button. Client component. */
export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }}
      className="inline-flex items-center gap-2 rounded-full bg-tide px-5 py-2.5 text-sm font-semibold text-abyss transition hover:bg-foam"
    >
      {copied ? "Copied" : label}
    </button>
  );
}

/** Small pill tag. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-mist">
      {children}
    </span>
  );
}

/** Section heading block shared by library pages. */
export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-tide">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-snow sm:text-5xl">
        {title}
      </h1>
      {copy ? <p className="mt-4 text-lg leading-relaxed text-mist">{copy}</p> : null}
    </div>
  );
}
