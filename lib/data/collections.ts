// Moodboard collections + inspiration shots for Tidecraft.
// Collections group templates by vibe, Pinterest-board style.
// All copy is original; covers reuse the templates' own preview images.

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Slugs of member templates (see lib/data/templates.ts). */
  templates: string[];
  /** Three hex colours for the collection's accent gradient. */
  palette: [string, string, string];
  mood: string[];
}

export const collections: Collection[] = [
  {
    slug: "coastal-calm",
    name: "Coastal Calm",
    tagline: "Slow mornings, salt air, and pages that breathe.",
    description:
      "For sites that feel like the first hour at the beach: wide open space, soft blues, and motion that rolls in instead of shouting. Start here when the product should feel like a deep breath.",
    templates: ["saltline", "lowtide", "driftwood"],
    palette: ["#0e7490", "#2dd4bf", "#fde68a"],
    mood: ["calm", "ocean", "minimal"],
  },
  {
    slug: "neon-nights",
    name: "Neon Nights",
    tagline: "After-dark glow for products that never sleep.",
    description:
      "Deep navy, violet light, and charts that glow like city signs. These templates are built for dashboards, dev tools, and anything that looks better at 2am.",
    templates: ["vesper", "nightferry", "juniper"],
    palette: ["#1e1b4b", "#a78bfa", "#2dd4bf"],
    mood: ["dark", "glow", "futuristic"],
  },
  {
    slug: "botanical",
    name: "Botanical",
    tagline: "Green, growing things — and shops that feel alive.",
    description:
      "Leaves, light, and honest materials. A moodboard for skincare, studios, and retreats — sites where the photography does the talking and the layout stays out of the way.",
    templates: ["foxglove", "glasshouse", "halcyon"],
    palette: ["#14532d", "#86efac", "#fef3c7"],
    mood: ["green", "natural", "soft"],
  },
  {
    slug: "dark-editorial",
    name: "Dark Editorial",
    tagline: "Ink, paper, and opinions worth reading.",
    description:
      "Magazines and journals with a spine: torn paper, big type, and photography that fills the frame. For publishers who want every scroll to feel like turning a page.",
    templates: ["paperstorm", "nightferry", "kiln"],
    palette: ["#111827", "#f8fafc", "#ef4444"],
    mood: ["editorial", "bold", "print"],
  },
  {
    slug: "warm-craft",
    name: "Warm Craft",
    tagline: "Made by hand, sold with heart.",
    description:
      "Terracotta, timber, and late-afternoon light. These templates are for makers — potters, cabins, small shops — where the story is the product and the site should feel like the workshop.",
    templates: ["kiln", "driftwood", "foxglove"],
    palette: ["#7c2d12", "#fb923c", "#fef3c7"],
    mood: ["warm", "handmade", "earthy"],
  },
  {
    slug: "playful-pop",
    name: "Playful Pop",
    tagline: "Colour, motion, and zero boredom.",
    description:
      "For the weird ones: generative art, illustrators, and surf schools. Bright palettes, bouncy scrolls, and layouts that refuse to sit still.",
    templates: ["juniper", "starling", "lowtide"],
    palette: ["#be185d", "#2dd4bf", "#fde047"],
    mood: ["playful", "colour", "bold"],
  },
];

export interface InspirationShot {
  src: string;
  caption: string;
  /** Template slug this shot pairs with, if any. */
  template?: string;
}

export const inspirationShots: InspirationShot[] = [
  { src: "/inspiration/tide-glass.jpg", caption: "Light through water", template: "saltline" },
  { src: "/inspiration/neon-rain.jpg", caption: "City glow, after rain", template: "vesper" },
  { src: "/inspiration/desert-dune.jpg", caption: "Golden hour, nothing else", template: "driftwood" },
  { src: "/inspiration/forest-mist.jpg", caption: "Morning fog, pine and quiet", template: "glasshouse" },
  { src: "/inspiration/paper-collage.jpg", caption: "Torn paper and dried flowers", template: "paperstorm" },
  { src: "/inspiration/chrome-orb.jpg", caption: "Liquid chrome, soft pastel", template: "juniper" },
];
