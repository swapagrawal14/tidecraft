import type { TemplateItem } from "../data";

// Seed data — the data agent (W11) expands this to 12 original templates.
// Names and prompts are original. Do NOT copy Scrolltide template names
// (aether, anchor, aperture, aurora, brook, comet, dune, eclipse, ember,
// frost, glacier, harbor, kage, lagoon-hero, meadow, monsoon, moon, nebula,
// oasis, orchid, prairie, ridge) or their copy.

export const templates: TemplateItem[] = [
  {
    slug: "saltline",
    image: "/templates/saltline.jpg",
    name: "Saltline",
    tagline: "A SaaS landing page that arrives like the tide.",
    description:
      "A calm, confident landing page for a developer tool: a slow aurora hero, a product frame that builds itself as you scroll, and a pricing band that lands with a soft thud instead of a shout.",
    category: "SaaS",
    tags: ["aurora", "scroll-story", "pricing"],
    palette: ["#0ea5e9", "#2dd4bf", "#a78bfa"],
    difficulty: "Intermediate",
    prompt:
      "Build a SaaS landing page called Saltline. Dark oceanic background (#04060d) with a slow-moving aurora gradient made of blurred radial blobs. Hero: one huge headline, one line of subcopy, two buttons. As the user scrolls, a product screenshot assembles itself piece by piece with scroll-scrubbed clip-path reveals. Add a three-tier pricing band, a logo marquee, and a footer with a giant wordmark. Use GSAP ScrollTrigger and Lenis smooth scroll. No emojis.",
    shader: "aurora",
    featured: true,
  },
  {
    slug: "nightferry",
    image: "/templates/nightferry.jpg",
    name: "Nightferry",
    tagline: "A portfolio that crosses over after dark.",
    description:
      "A photographer's portfolio set on a night crossing: full-bleed images, a ferry-line progress indicator, and captions that drift in like harbour lights.",
    category: "Portfolio",
    tags: ["photography", "full-bleed", "horizontal-scroll"],
    palette: ["#1e1b4b", "#fb7185", "#fbbf24"],
    difficulty: "Intermediate",
    prompt:
      "Build a photographer's portfolio called Nightferry. Full-bleed images with a dark navy grade. A thin horizontal progress line styled like a ferry route runs across the top and fills as you scroll. Each project is a full-screen chapter with a huge serif title and a caption that fades up. End with a contact section that feels like arriving at the other shore. Use GSAP ScrollTrigger, horizontal scroll for the gallery on desktop, vertical stack on mobile.",
    shader: "ember",
    featured: true,
  },
  {
    slug: "glasshouse",
    image: "/templates/glasshouse.jpg",
    name: "Glasshouse",
    tagline: "An editorial reader with light coming through.",
    description:
      "A long-form reading experience: generous serif type, margin notes that bloom open, and pull quotes that grow as they enter the viewport.",
    category: "Editorial",
    tags: ["typography", "reading", "serif"],
    palette: ["#f1f5f9", "#7dd3fc", "#2dd4bf"],
    difficulty: "Beginner",
    prompt:
      "Build an editorial article page called Glasshouse. Light, airy background with dark ink text. Huge Instrument Serif headlines, generous line-height, drop caps. Margin notes appear beside paragraphs on desktop and collapse into tap-to-open notes on mobile. Pull quotes scale up gently as they scroll into view. A reading-progress bar sits at the top. Keep it fast and calm.",
    shader: "tide",
    featured: true,
  },
  {
    slug: "lowtide",
    image: "/templates/lowtide.jpg",
    name: "Lowtide",
    tagline: "A surf school landing page that pulls you under.",
    description:
      "A sun-bleached landing page for a surf school: a wave-height ticker, lesson cards that wash in one by one, and a booking band the colour of wet sand.",
    category: "Landing",
    tags: ["surf", "booking", "sun-bleached"],
    palette: ["#fde68a", "#38bdf8", "#0f766e"],
    difficulty: "Beginner",
    prompt:
      "Build a landing page called Lowtide for a surf school. Warm sand background (#fdf6e3) with deep teal text and a sky-blue accent. Hero: a huge condensed headline, a live-looking wave-height ticker, and a single orange booking button. Below, lesson cards slide in staggered as you scroll, each with a difficulty badge and a price. Add a tide-times strip, an instructor row with round portraits, and a booking form band at the bottom. On mobile the cards stack vertically and the ticker becomes a horizontal scroll. Use Lenis smooth scroll and simple IntersectionObserver reveals, no heavy libraries.",
    shader: "liquid",
  },
  {
    slug: "starling",
    image: "/templates/starling.jpg",
    name: "Starling",
    tagline: "An illustrator's portfolio that moves in a murmuration.",
    description:
      "A portfolio for an illustrator where work tiles flock together into a murmuration as you scroll, then settle into a tidy grid when you stop.",
    category: "Portfolio",
    tags: ["illustration", "grid", "playful"],
    palette: ["#111827", "#f472b6", "#facc15"],
    difficulty: "Intermediate",
    prompt:
      "Build an illustrator's portfolio called Starling. Near-black background with hot-pink and amber accents. The work grid starts as a scattered flock of tiles that drifts into alignment as the user scrolls, driven by GSAP ScrollTrigger scrub. Hovering a tile lifts it and reveals the project title and medium. Add a filter row (All, Editorial, Character, Pattern) that re-flows the grid with a FLIP-style animation, plus an about strip and a big contact button. On mobile the flock effect is disabled and the tiles simply stack in two columns. Use Lenis for smooth scroll.",
    shader: "mono",
  },
  {
    slug: "foxglove",
    image: "/templates/foxglove.jpg",
    name: "Foxglove",
    tagline: "A botanical skincare shop in full bloom.",
    description:
      "A commerce page for a botanical skincare brand: ingredient stories that unfurl like petals, a shade finder, and a cart drawer that slides in like a seed packet.",
    category: "Commerce",
    tags: ["skincare", "shop", "botanical"],
    palette: ["#fdf2f8", "#be185d", "#65a30d"],
    difficulty: "Intermediate",
    prompt:
      "Build a commerce page called Foxglove for a botanical skincare brand. Soft blush background (#fdf2f8) with deep berry text and leaf-green accents. Hero: a tall product bottle rendered as a CSS/SVG composition beside a headline in an elegant serif. Product cards reveal ingredient stories on hover, and a shade finder asks three questions then recommends one product. The cart opens as a slide-in drawer from the right with quantity steppers and a free-shipping progress bar. On mobile the drawer becomes full-screen and the hero stacks. Use GSAP ScrollTrigger for the unfurling card reveals and Lenis smooth scroll.",
    shader: "liquid",
  },
  {
    slug: "paperstorm",
    image: "/templates/paperstorm.jpg",
    name: "Paperstorm",
    tagline: "An indie magazine that reads like weather.",
    description:
      "An editorial front page for an independent magazine: torn-paper section dividers, a storm of headlines that settles as you read, and a print-style issue archive.",
    category: "Editorial",
    tags: ["magazine", "print", "archive"],
    palette: ["#fafaf9", "#dc2626", "#1c1917"],
    difficulty: "Beginner",
    prompt:
      "Build an editorial front page called Paperstorm for an independent magazine. Off-white paper background with near-black ink text and one red accent. The masthead is oversized and sticky, shrinking to a compact bar on scroll. Headlines enter with a quick staggered fade, and sections are divided by torn-paper SVG edges. Include a featured essay with a drop cap, a three-column story grid, and an issue archive list with dates and cover colours. On mobile the grid collapses to a single column and the masthead stays readable. Use Lenis smooth scroll and IntersectionObserver reveals only.",
    shader: "mono",
  },
  {
    slug: "kiln",
    image: "/templates/kiln.jpg",
    name: "Kiln",
    tagline: "A ceramics studio store, fired and glazed.",
    description:
      "A shop for a small ceramics studio: pots that rotate slowly on their shelves, a glaze-colour picker, and a made-to-order story told in firing stages.",
    category: "Commerce",
    tags: ["ceramics", "shop", "craft"],
    palette: ["#78350f", "#f59e0b", "#fef3c7"],
    difficulty: "Advanced",
    prompt:
      "Build a ceramics shop called Kiln. Warm clay background (#fef3c7) with burnt-orange and deep brown text. Each product is a CSS/SVG vessel that rotates slowly on scroll, with the glaze colour changeable from a swatch picker that re-tints the vessel live. A made-to-order section tells the firing story in four scroll-scrubbed stages: wedging, throwing, glazing, firing. The cart drawer shows a running total and a note that every piece is one of a kind. On mobile the rotating vessels become static and the stages become a vertical timeline. Use GSAP ScrollTrigger with scrub for the rotation and stage reveals, plus Lenis smooth scroll.",
    shader: "ember",
  },
  {
    slug: "driftwood",
    image: "/templates/driftwood.jpg",
    name: "Driftwood",
    tagline: "A cabin-rental landing page washed up gently.",
    description:
      "A slow, woody landing page for a cabin rental: a map that fills in as you scroll, seasons that change the palette, and a booking calendar that feels carved.",
    category: "Landing",
    tags: ["travel", "cabins", "seasonal"],
    palette: ["#292524", "#a8a29e", "#65a30d"],
    difficulty: "Intermediate",
    prompt:
      "Build a cabin-rental landing page called Driftwood. Warm stone background with driftwood browns and a moss-green accent. Hero: a full-width cabin silhouette in layered SVG hills with a headline and a date picker. As the user scrolls, a hand-drawn-style map fills in stop by stop, and a season switcher (Spring, Summer, Autumn, Winter) re-tints the whole page palette with a crossfade. Cabin cards show nightly prices and a carved-wood booking button. On mobile the map becomes a simple list and the season switcher becomes a horizontal chip row. Use GSAP ScrollTrigger for the map fill and Lenis smooth scroll.",
    shader: "tide",
  },
  {
    slug: "vesper",
    image: "/templates/vesper.jpg",
    name: "Vesper",
    tagline: "An analytics SaaS that only speaks at dusk.",
    description:
      "A dark, quiet SaaS landing page for an analytics product: charts that draw themselves after dark, a metric ticker that counts up on entry, and a calm trial CTA.",
    category: "SaaS",
    tags: ["analytics", "dark", "dashboard"],
    palette: ["#0f172a", "#818cf8", "#34d399"],
    difficulty: "Advanced",
    prompt:
      "Build a SaaS landing page called Vesper for an analytics product. Deep dusk-navy background (#0f172a) with indigo and mint accents. Hero: a dashboard mock built from divs and SVG, where line charts draw themselves with stroke-dashoffset animation when scrolled into view. A metric ticker counts up from zero on entry. Add a feature grid with small inline SVG sparklines, a comparison table against spreadsheets, and a two-step trial signup (email, then workspace name) that validates inline. On mobile the dashboard mock simplifies to a single chart card and the table becomes stacked rows. Use GSAP ScrollTrigger for the chart draws and counters, plus Lenis smooth scroll.",
    shader: "aurora",
  },
  {
    slug: "juniper",
    image: "/templates/juniper.jpg",
    name: "Juniper",
    tagline: "An experimental playground grown from one seed.",
    description:
      "An experimental microsite for a generative-art tool: a seed number you can change, a live WebGL garden that regrows with every keystroke, and a gallery of grown specimens.",
    category: "Experimental",
    tags: ["webgl", "generative", "playground"],
    palette: ["#022c22", "#34d399", "#fbbf24"],
    difficulty: "Advanced",
    prompt:
      "Build an experimental playground called Juniper for a generative-art tool. Near-black green background (#022c22) with mint and amber accents. The hero is a full-screen Three.js canvas rendering a procedural juniper branch that regrows from a seed number the visitor can type or randomise. A control panel with sliders for branch count, curl, and wind updates the canvas live. Below, a gallery of six grown specimens, each with its seed number and a copy-seed button. On mobile the canvas renders at half resolution for performance and the controls collapse into an accordion. Use Three.js for the canvas, GSAP ScrollTrigger for section reveals, and Lenis smooth scroll. Respect prefers-reduced-motion by rendering one static frame.",
    shader: "liquid",
  },
  {
    slug: "halcyon",
    image: "/templates/halcyon.jpg",
    name: "Halcyon",
    tagline: "A wellness retreat landing page at golden hour.",
    description:
      "A golden-hour landing page for a wellness retreat: a sun that sets as you scroll, breathing-room whitespace, and a retreat calendar with soft, rounded dates.",
    category: "Landing",
    tags: ["wellness", "retreat", "golden-hour"],
    palette: ["#fffbeb", "#f59e0b", "#f97316"],
    difficulty: "Intermediate",
    prompt:
      "Build a wellness-retreat landing page called Halcyon. Warm cream background (#fffbeb) with amber and soft-orange accents. Hero: a large SVG sun that sinks toward the horizon as the user scrolls, scrubbed with GSAP ScrollTrigger, while the headline fades from dark to amber. Retreat cards show dates, lengths, and prices with rounded corners and generous whitespace. A breathing exercise widget animates a circle that grows and shrinks on a four-second loop. Add a testimonial strip and a simple booking form. On mobile the sun animation is replaced by a static gradient and the cards stack in one column. Use Lenis smooth scroll and ScrollTrigger for the sun and card reveals.",
    shader: "ember",
  },
];
