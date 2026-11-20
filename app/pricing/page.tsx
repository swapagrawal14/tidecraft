"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";

type BillingMode = "monthly" | "yearly";

interface Tier {
  id: string;
  name: string;
  blurb: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

const tiers: Tier[] = [
  {
    id: "monthly",
    name: "Monthly",
    blurb: "For trying the library out and shipping one project at a time.",
    features: [
      "Core library: templates, components, and sections",
      "10 premium copies per week, fair use",
      "Full source code included",
      "Personal and client-use licence",
      "New templates every week",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    blurb: "For builders who ship every week and want the whole library.",
    badge: "Save 69%",
    features: [
      "Everything in Monthly",
      "Unlimited premium copies",
      "3D templates collection",
      "UI screens: dashboards and consoles",
      "Animated shader backgrounds",
      "Priority support",
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime",
    blurb: "Pay once. Keep the whole library, and every future drop, forever.",
    badge: "Most popular",
    popular: true,
    features: [
      "Everything in Yearly",
      "Unlimited copies, forever",
      "Every future template and drop included",
      "One payment, never expires",
      "Priority support",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-tide"
    >
      <path
        d="M4 10.5 8.5 15 16 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TierCard({ tier, mode }: { tier: Tier; mode: BillingMode }) {
  const price =
    tier.id === "monthly"
      ? { amount: "$39", per: "per month", note: "Renews monthly. Cancel any time." }
      : tier.id === "yearly"
        ? mode === "yearly"
          ? { amount: "$144", per: "per year", note: "That is $12 a month, billed once a year." }
          : { amount: "$12", per: "per month", note: "Billed $144 once a year. Save 69%." }
        : { amount: "$299", per: "one-time", note: "Regularly $449. One payment, never expires." };

  return (
    <article
      className={`glass card-hover relative flex flex-col rounded-3xl p-6 sm:p-8 ${
        tier.popular ? "border-tide/60 shadow-[0_24px_60px_-24px_rgba(45,212,191,0.35)]" : ""
      }`}
    >
      {tier.badge ? (
        <p className="absolute -top-3 left-6 rounded-full bg-tide px-3 py-1 text-xs font-semibold text-abyss">
          {tier.badge}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold text-snow">{tier.name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-mist">{tier.blurb}</p>
      <p className="mt-6">
        <span className="text-5xl font-semibold tracking-tight text-snow">{price.amount}</span>{" "}
        <span className="text-mist">{price.per}</span>
      </p>
      <p className="mt-2 min-h-10 text-sm text-mist">{price.note}</p>
      <Link
        href="/templates"
        className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
          tier.popular
            ? "bg-tide text-abyss hover:bg-foam"
            : "border border-line text-snow hover:border-tide hover:text-tide"
        }`}
      >
        Browse the library
      </Link>
      <ul className="mt-8 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-mist">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * Pricing page.
 *
 * NOTE: this file is a client component on purpose. The task requires the
 * monthly/yearly toggle to live in this same file, and a "use client"
 * module cannot also export `metadata` in Next.js — so there is no metadata
 * export here. If a parent agent later wants page metadata, the toggle can
 * move to a sibling client file and this file can go back to a server
 * component.
 */
export default function PricingPage() {
  const [mode, setMode] = useState<BillingMode>("yearly");

  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Pay as you go, or pay once and be done."
        copy="Every plan includes the full source code of everything you copy, a personal and client-use licence, and new drops as the library grows. Choose the rhythm that fits how you build."
      />

      {/* Monthly / yearly toggle */}
      <div className="mt-10 flex justify-center">
        <div
          role="group"
          aria-label="Billing period"
          className="glass inline-flex rounded-full p-1"
        >
          <button
            type="button"
            aria-pressed={mode === "monthly"}
            onClick={() => setMode("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              mode === "monthly" ? "bg-tide text-abyss" : "text-mist hover:text-snow"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={mode === "yearly"}
            onClick={() => setMode("yearly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              mode === "yearly" ? "bg-tide text-abyss" : "text-mist hover:text-snow"
            }`}
          >
            Yearly — save 69%
          </button>
        </div>
      </div>

      {/* Three tiers */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard key={tier.id} tier={tier} mode={mode} />
        ))}
      </div>

      {/* Comparison note: what only Yearly and Lifetime include */}
      <section aria-labelledby="compare-heading" className="mx-auto mt-16 max-w-3xl">
        <h2
          id="compare-heading"
          className="text-center text-2xl font-semibold tracking-tight text-snow"
        >
          What the higher tiers add
        </h2>
        <p className="mt-3 text-center leading-relaxed text-mist">
          The Monthly plan covers the core library: templates, components, and
          sections. The 3D template collection, full UI screens, and animated
          shader backgrounds are included with Yearly and Lifetime only — they
          are the parts that take the longest to build by hand, so they live on
          the plans built for people who ship every week.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              name: "3D templates",
              copy: "Depth, portals, and scroll-driven scenes, with the full rebuild prompt.",
            },
            {
              name: "UI screens",
              copy: "Dashboards, wallets, and consoles — the screens users live in after sign-up.",
            },
            {
              name: "Shader backgrounds",
              copy: "Animated GPU backgrounds as MP4, still, or component code.",
            },
          ].map((item) => (
            <div key={item.name} className="glass card-hover rounded-2xl p-5">
              <p className="font-semibold text-snow">{item.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{item.copy}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-tide">
                Yearly + Lifetime
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fair-use explainer */}
      <section aria-labelledby="fair-use-heading" className="mx-auto mt-16 max-w-3xl">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2
            id="fair-use-heading"
            className="text-2xl font-semibold tracking-tight text-snow"
          >
            How fair use works
          </h2>
          <p className="mt-3 leading-relaxed text-mist">
            On the Monthly plan you can copy up to 10 premium templates each
            week. Free templates never count toward the limit, and opening
            something you have already unlocked never counts again. The count
            resets every Monday, and the library page always shows how many
            copies you have left before you open anything — no surprises, no
            locked doors mid-build.
          </p>
          <p className="mt-3 leading-relaxed text-mist">
            Yearly and Lifetime have no copy limit at all. Copy as much as you
            like, as often as you like.
          </p>
        </div>
      </section>

      {/* Money-back note */}
      <section aria-labelledby="refund-heading" className="mx-auto mt-16 max-w-3xl text-center">
        <h2
          id="refund-heading"
          className="text-2xl font-semibold tracking-tight text-snow"
        >
          14-day money-back promise
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-mist">
          If Tidecraft is not for you, ask for a refund within 14 days of
          buying and we will return the full amount — no forms, no questions
          designed to wear you down. Yearly renews every 12 months and Monthly
          renews every month; cancel any time from your account page and your
          access runs to the end of the period you have already paid for.
        </p>
      </section>

      {/* FAQ teaser */}
      <section aria-labelledby="faq-teaser-heading" className="mx-auto mt-16 max-w-3xl text-center">
        <h2
          id="faq-teaser-heading"
          className="text-2xl font-semibold tracking-tight text-snow"
        >
          Still deciding?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-mist">
          Licences, refunds, renewals, and what counts as a premium template
          are all answered in the FAQ.
        </p>
        <Link
          href="/faq"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-snow transition hover:border-tide hover:text-tide"
        >
          Read the FAQ
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="mt-8 text-sm text-mist">
          Not ready to pay yet?{" "}
          <Link href="/free" className="font-semibold text-tide hover:text-foam">
            Start with the free templates
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
