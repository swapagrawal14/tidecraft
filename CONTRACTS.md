# Tidecraft — build contracts

Working name: **Tidecraft** (Swapnil can rename — brand strings live in
`app/layout.tsx` metadata and `components/site/Nav.tsx` / `Footer.tsx` only).
Concept: a Scrolltide-style library of cinematic, scroll-driven website
templates, components, shaders, sections and UI screens with copy-paste
rebuild prompts. Original content only — see rules below.

Stack: Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + GSAP + Lenis
+ Three.js. Deps are already installed. Do NOT `npm install` anything.

## Read first

- `app/globals.css` — Tailwind v4 theme tokens (abyss, deep, panel, tide,
  foam, coral, mist, snow; `text-gradient`, `glass`, `card-hover` helpers).
- `lib/data.ts` — types + re-exports. Pages import from `@/lib/data` only.
- `lib/data/templates.ts`, `lib/data/library.ts` — seed data (expand in place).
- `components/ui.tsx` — `CopyButton`, `Pill`, `SectionHeading`.
- Next 16 note: read `node_modules/next/dist/docs/` for any API you are
  unsure about — this version has breaking changes vs training data.

## Component contracts (code against these, they will exist)

- `components/shader/TideShader.tsx` — default export. Props:
  `{ variant: "aurora" | "liquid" | "ember" | "tide" | "mono"; className?: string }`.
  Full-bleed canvas shader background, pointer-events none, respects
  `prefers-reduced-motion` (renders a static gradient frame instead).
- `components/motion/SmoothScroll.tsx` — default export, no props.
  Client component mounting Lenis smooth scroll. Imported by `app/layout.tsx`.
- `components/motion/Reveal.tsx` — default export. Props:
  `{ children: ReactNode; delay?: number; className?: string }`.
  Fade+rise on scroll into view (GSAP ScrollTrigger or IntersectionObserver).
- `components/site/Nav.tsx` / `Footer.tsx` — default exports, no props.
  Nav links: Library (/templates), Components (/components), Shaders
  (/shaders), Sections (/sections), UI (/ui), Pricing (/pricing), FAQ (/faq).
  CTA button: "Go Unlimited" -> /pricing.
- `components/library/TemplateCard.tsx` — default export. Props:
  `{ item: TemplateItem }`. Card with gradient/shader preview, name, tagline,
  category + difficulty pills, links to `/templates/[slug]`.
- `components/library/LibraryCard.tsx` — default export. Props:
  `{ item: LibraryItem }`. Same idea for components/shaders/sections/ui,
  links to its detail route (see below).

## Routes

- `/` home — hero + library-at-a-glance + workflow + featured templates
- `/templates` grid + `/templates/[slug]` detail (prompt panel + CopyButton)
- `/components`, `/shaders`, `/sections`, `/ui` — grids; detail routes
  `/components/[slug]`, `/shaders/[slug]`, `/sections/[slug]`, `/ui/[slug]`
  reuse the template-detail pattern (prompt + copy). If a detail route is
  out of your scope, link cards to the list page anchor instead — never to
  a missing page.
- `/pricing`, `/faq`, `/free`

## File ownership — touch ONLY your files

| Agent | Files |
|---|---|
| W1 Home hero | `app/page.tsx`, `components/hero/*` |
| W2 Shader | `components/shader/TideShader.tsx` |
| W3 Templates list | `app/templates/page.tsx`, `components/library/TemplateCard.tsx` |
| W4 Template detail | `app/templates/[slug]/page.tsx`, `components/library/PromptPanel.tsx` |
| W5 Components list | `app/components/page.tsx`, `app/components/[slug]/page.tsx` |
| W6 Shaders list | `app/shaders/page.tsx`, `app/shaders/[slug]/page.tsx` |
| W7 Sections list | `app/sections/page.tsx`, `app/sections/[slug]/page.tsx` |
| W8 UI screens | `app/ui/page.tsx`, `app/ui/[slug]/page.tsx` |
| W9 Pricing | `app/pricing/page.tsx` |
| W10 FAQ + Free | `app/faq/page.tsx`, `app/free/page.tsx` |
| W11 Data: templates | `lib/data/templates.ts` (expand to 12) |
| W12 Data: library | `lib/data/library.ts` (expand each list) |
| W13 Motion | `components/motion/SmoothScroll.tsx`, `components/motion/Reveal.tsx`, `lib/motion.ts` |
| W14 Site chrome | `components/site/Nav.tsx`, `components/site/Footer.tsx`, `app/not-found.tsx` |
| Shared (DO NOT TOUCH) | `app/layout.tsx`, `app/globals.css`, `lib/data.ts`, `components/ui.tsx`, `package.json`, `next.config.ts`, `tsconfig.json` |

## Rules

- All public UI text in ENGLISH. No emojis anywhere in the UI.
- ORIGINAL content only. Do not copy Scrolltide's template names, prompts,
  or marketing copy. Do not copy any other site's copy. Invent new names.
- No external images. Visuals are CSS gradients, the canvas shader, or
  inline SVG only.
- Client components start with `"use client"`. Server components by default.
- Do NOT run `next dev` or `next build` (shared `.next` dir). Verify with
  `npx tsc --noEmit` from the repo root (read-only, safe to run in parallel).
- Do NOT edit files outside your scope. If a contract above is wrong or a
  file you need does not exist, say so in your final report instead of
  working around it by editing shared files.
- Keep every page fast: no heavy images, no layout shift, honour
  `prefers-reduced-motion`.
- When done, report: files created/changed, what you built, `tsc` result,
  and anything left unresolved.
