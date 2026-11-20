"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is Tidecraft?",
    answer:
      "Tidecraft is a library of cinematic, scroll-driven website templates, components, shaders, sections, and UI screens. Every item ships with a detailed rebuild prompt: copy it, paste it into your AI tool, and it guides the build of a finished page that moves like the tide — no blank canvas, no boilerplate.",
  },
  {
    question: "How do the prompts work?",
    answer:
      "Open any template or library item and you will find its rebuild prompt: a plain-language brief describing the layout, motion, colours, typography, and behaviour of that design. Paste the prompt into your AI builder, answer any follow-up questions it asks, and refine the result. The prompt does the planning; you stay in charge of the taste.",
  },
  {
    question: "What AI tools work with the prompts?",
    answer:
      "The prompts are written in plain language with no tool-specific syntax, so they work with the major AI website and code builders — including Claude, Cursor, Codex, v0, Lovable, and Bolt. If a tool accepts a text prompt and produces a website, it can use a Tidecraft prompt. Results vary by tool, so start with a free item to see how your tool of choice handles it.",
  },
  {
    question: "Can I use the templates for client work?",
    answer:
      "Yes. Every plan — including the free starter set — includes a personal and client-use licence. You can build sites for your own business and for paying clients, and you can use the finished sites commercially. What you cannot do is resell or redistribute the prompts or the library itself as a competing product.",
  },
  {
    question: "What is fair use?",
    answer:
      "Fair use is a weekly limit on how many premium items you can copy, so the library stays fast and available for everyone. Free templates and items you have already unlocked never count toward the limit, and the count resets every week. Paid plans raise the limit, and the top plan removes it entirely. The exact limits for each plan are listed on the pricing page.",
  },
  {
    question: "How do refunds work?",
    answer:
      "If Tidecraft is not for you, email us within 14 days of purchase and we will refund you in full to your original payment method. Monthly plans can be cancelled at any time from your account — you keep access until the end of the period you have already paid for, and nothing renews after that.",
  },
  {
    question: "Do I get the source code?",
    answer:
      "Yes. The rebuild prompt produces a complete working site in your AI tool, and that output is yours — the full source code, which you can edit, host anywhere, and keep forever. There is no lock-in and no Tidecraft branding in the finished site. Your plan covers access to the library and new drops; the code you generate is yours to keep even after the plan ends.",
  },
  {
    question: "What happens when my plan ends?",
    answer:
      "Nothing you built disappears. Every site you generated stays yours, and you can keep editing and hosting it. You simply lose access to the library itself: copying new premium prompts and receiving new drops stops until you renew. Items you unlocked while your plan was active stay unlocked in your account history, but copying them again requires an active plan.",
  },
];

function FaqAccordionItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <h2>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-snow transition hover:text-foam sm:text-lg"
        >
          <span>{item.question}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-xl leading-none text-tide transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </h2>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-mist">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:pt-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered."
        copy="Everything people usually ask before they start building with Tidecraft. If your question is not here, write to us — a human replies."
      />

      <div className="mt-12 flex flex-col gap-4">
        {FAQS.map((item, index) => (
          <FaqAccordionItem
            key={item.question}
            item={item}
            index={index}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <p className="mt-12 text-center text-mist">
        Still stuck?{" "}
        <a href="/pricing" className="font-semibold text-tide underline-offset-4 hover:underline">
          See the plans
        </a>{" "}
        or start with the{" "}
        <a href="/free" className="font-semibold text-tide underline-offset-4 hover:underline">
          free starter set
        </a>
        .
      </p>
    </main>
  );
}
