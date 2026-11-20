"use client";

import { CopyButton } from "@/components/ui";

/** The rebuild prompt for one template, in a copyable glass panel. */
export default function PromptPanel({
  prompt,
  title = "Rebuild prompt",
}: {
  prompt: string;
  title?: string;
}) {
  return (
    <section aria-label={title} className="glass overflow-hidden rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4">
        <h2 className="text-sm font-semibold tracking-wide text-snow">{title}</h2>
        <CopyButton text={prompt} label="Copy prompt" />
      </div>
      <pre className="max-h-[480px] overflow-auto whitespace-pre-wrap break-words px-6 py-5 font-mono text-sm leading-relaxed text-mist">
        {prompt}
      </pre>
      <p className="border-t border-line px-6 py-4 text-sm text-mist">
        Paste this into your AI tool of choice and it will rebuild the template
        for you, section by section.
      </p>
    </section>
  );
}
