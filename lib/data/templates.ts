// Tidecraft templates — every one is a playable interactive concept,
// described like a film, not a layout. All ideas and copy are original.

import type { TemplateItem } from "../data";

export const templates: TemplateItem[] = [
  {
    slug: "saltline",
    name: "Saltline",
    tagline: "The dashboard is the ocean — drag the tide to reveal your numbers.",
    description:
      "A SaaS analytics hero where your metrics are the tide itself. Revenue rolls in as waves, the chart line is drawn by a little boat sailing across the screen, and scrolling raises the water level to reveal the next section. Drag the tide slider and the whole page shifts from low tide — one number, lots of air — to high tide, the full dashboard. Nothing here sits still; even the numbers arrive on the water.",
    category: "SaaS",
    tags: ["dashboard", "scroll", "ocean"],
    palette: ["#0e7490", "#2dd4bf", "#fde68a"],
    difficulty: "Intermediate",
    prompt:
      "Rebuild Saltline, a SaaS analytics landing page where the dashboard is the ocean. Layout: a full-screen hero with a huge serif headline over an animated sea gradient, a glass dashboard panel floating in the middle, and a tide slider at the bottom. Motion: revenue arrives as rolling waves (GSAP), a small boat sails across the screen drawing the chart line behind it, and scrolling raises the water level to reveal the next section. Interaction: dragging the tide slider scrubs the page from low tide (one hero number, lots of empty space) to high tide (the full dashboard with charts, bars and a donut). Colours: deep ocean teal, bright tide aqua, sandy yellow accents, dark navy background. Responsive: the boat and waves scale down on mobile, the slider becomes a thumb-friendly bottom sheet. Use GSAP ScrollTrigger for the water level and Lenis for smooth scrolling.",
    shader: "tide",
    featured: true,
  },
  {
    slug: "nightferry",
    name: "Nightferry",
    tagline: "Your work, crossed by night boat — each project a lit window on the far shore.",
    description:
      "A portfolio you cross like a passenger. The ferry carries you from project to project across a moonlit sea; each project is a lit window on the far shore, and the fog clears only as you arrive. Scroll and the boat moves, the moon follows, and the next project docks with a soft bump. The whole site is one crossing — and the contact page is the other side.",
    category: "Portfolio",
    tags: ["portfolio", "scroll", "night"],
    palette: ["#1e1b4b", "#818cf8", "#e0e7ff"],
    difficulty: "Intermediate",
    prompt:
      "Rebuild Nightferry, a portfolio site that is one night crossing by ferry. Layout: a full-screen moonlit sea, a ferry silhouette in the middle, and each project shown as a lit window on the distant shore. Motion: scrolling moves the ferry across the water (GSAP ScrollTrigger scrub), the moon tracks the scroll, fog drifts in slow layers, and arriving at a project clears the fog and docks the boat with a gentle bob. Interaction: click a lit window to open that project as a full-screen case study; the ferry waits. Colours: deep indigo night, silver moonlight, warm amber windows. Responsive: on mobile the crossing becomes a vertical journey with the same moon and fog. Use Lenis for smooth scrolling and a canvas or CSS waves layer for the water.",
    shader: "mono",
    featured: true,
  },
  {
    slug: "glasshouse",
    name: "Glasshouse",
    tagline: "A magazine that grows — scroll and the stories unfurl like leaves.",
    description:
      "An editorial where every article is a plant in a glasshouse. Scroll and the stories grow upward, leaves unfurl into headlines, and the light shifts from morning to golden hour as you read down. The feature story is the tallest plant; the small pieces grow in the beds below. Reading here feels like walking through glass in the sun.",
    category: "Editorial",
    tags: ["editorial", "scroll", "botanical"],
    palette: ["#14532d", "#86efac", "#fef3c7"],
    difficulty: "Beginner",
    prompt:
      "Rebuild Glasshouse, an editorial magazine site set inside a sunlit glasshouse. Layout: a tall hero with a huge serif masthead, then articles arranged as plants in beds — the feature story tallest, smaller pieces below. Motion: scrolling grows each story upward like a plant (GSAP scaleY from the soil line), leaves unfurl into headlines, and the light shifts from morning white to golden hour as you read down. Interaction: hovering a plant sways it and shows its read time; clicking opens the article. Colours: soft sage, deep leaf green, cream, warm sunlight. Responsive: beds stack into a single column on mobile, growth animation stays. Use GSAP ScrollTrigger for the growing and a soft CSS gradient for the shifting light.",
    shader: "liquid",
    featured: true,
  },
  {
    slug: "lowtide",
    name: "Lowtide",
    tagline: "Learn to surf on the scroll — the scrollbar is the wave.",
    description:
      "A surf school page where the scrollbar is the wave. Pull down and the wave curls over the screen, the surfer rides it, and the lessons appear on the face of the water. Wipe out and the page resets with a splash and a grin. Bookings live at the bottom of the wave — you have to ride it to get there.",
    category: "Landing",
    tags: ["surf", "scroll", "playful"],
    palette: ["#0ea5e9", "#22d3ee", "#fde68a"],
    difficulty: "Beginner",
    prompt:
      "Rebuild Lowtide, a surf school landing page where the scrollbar is the wave. Layout: a full-screen turquoise wave hero with a huge playful headline, lesson cards floating on the face of the wave, and the booking section at the bottom. Motion: scrolling curls the wave over the screen (GSAP ScrollTrigger), a small surfer silhouette rides along the scroll position, and reaching the bottom triggers a splash that reveals the booking card. Interaction: a 'wipe out' button resets the ride with a splash animation. Colours: turquoise sea, sky blue, sandy yellow, white foam. Responsive: the wave becomes a vertical curl on mobile and the surfer stays centred. Use GSAP ScrollTrigger for the curl and Lenis for smooth scrolling.",
    shader: "tide",
  },
  {
    slug: "starling",
    name: "Starling",
    tagline: "A portfolio that murmurates — the work flies in a flock that follows your cursor.",
    description:
      "An illustrator's site where the artwork is a flock of starlings. The pieces swirl in a murmuration that follows your cursor across a dusky sky, and clicking a bird lands you on that project. The flock never holds still, and neither does the work. The about page is the one bird that stays — perched, watching the rest fly.",
    category: "Portfolio",
    tags: ["portfolio", "cursor", "birds"],
    palette: ["#4c1d95", "#c4b5fd", "#f5d0fe"],
    difficulty: "Intermediate",
    prompt:
      "Rebuild Starling, an illustrator portfolio where the artwork flies as a starling murmuration. Layout: a dusky lilac sky filling the screen, the illustrator's name in huge thin type, and the portfolio pieces as birds in a swirling flock. Motion: the flock flows in a murmuration that follows the cursor (canvas or GSAP), each bird a small artwork thumbnail; the sky deepens from dusk to night as you scroll. Interaction: click a bird to land on that project; the flock reforms around the next one. Colours: dusky violet, soft lilac, pale pink, dark night at the bottom. Responsive: on touch devices the flock follows the finger and a tap opens the project. Use a lightweight canvas for the flock and GSAP for the sky transition.",
    shader: "mono",
  },
  {
    slug: "foxglove",
    name: "Foxglove",
    tagline: "Shop by picking flowers — hover and the bloom opens to show the serum.",
    description:
      "A botanical skincare shop where every product grows on a stem. Hover and the flower opens to show the serum inside; pick it and it drops into your basket with a burst of petals. The garden rearranges itself by skin concern — dry, dull, tired — and the checkout is a bouquet you tie yourself.",
    category: "Commerce",
    tags: ["shop", "botanical", "hover"],
    palette: ["#14532d", "#fda4af", "#fef3c7"],
    difficulty: "Intermediate",
    prompt:
      "Rebuild Foxglove, a botanical skincare shop where products grow on stems. Layout: a garden grid — each product a tall stem with a closed bloom, the shop name in elegant serif above. Motion: hovering a stem sways it and the bloom opens (CSS/GSAP) to reveal the serum bottle inside; picking a product drops it into the basket with a burst of petals. Interaction: filter by skin concern (dry, dull, tired) and the garden rearranges itself; the basket is a bouquet you tie at checkout. Colours: deep botanical green, soft foxglove pink, cream. Responsive: stems become a single-column garden on mobile, blooms open on tap. Use GSAP for the bloom and petal burst, Lenis for smooth scrolling.",
    shader: "liquid",
  },
  {
    slug: "paperstorm",
    name: "Paperstorm",
    tagline: "News that falls from the sky — drag a sheet to read it, let go and it flutters back.",
    description:
      "An indie magazine where headlines fall like paper sheets in a storm. Drag a sheet to read it; let go and it flutters back into the pile. The wind — your cursor — decides what lands first. The front page is the pile after the storm: the best stories on top, the rest still settling.",
    category: "Editorial",
    tags: ["magazine", "drag", "paper"],
    palette: ["#111827", "#f8fafc", "#ef4444"],
    difficulty: "Beginner",
    prompt:
      "Rebuild Paperstorm, an indie magazine where headlines fall like paper in a storm. Layout: a storm of overlapping paper sheets on a dark background, the masthead in bold condensed type, the top story as the largest sheet. Motion: sheets drift and flutter down on load (GSAP), the wind follows the cursor and pushes the sheets around. Interaction: drag any sheet to read its headline and standfirst; let go and it flutters back into the pile; the most-read stories settle on top. Colours: ink black, paper white, one signal red. Responsive: the storm becomes a vertical fall on mobile, drag works with touch. Use GSAP Draggable-style physics and a soft paper texture via CSS.",
    shader: "mono",
  },
  {
    slug: "kiln",
    name: "Kiln",
    tagline: "Throw your own pot to buy it — drag in circles and the clay obeys.",
    description:
      "A ceramics shop where you spin the wheel. Drag in circles to shape the clay, and the pot you throw is the one you buy — every piece glazed in the colours you mixed on the spot. The shop is a studio: the wheel in the middle, the shelves around it, and the kiln glowing at the back. No two visits throw the same pot.",
    category: "Commerce",
    tags: ["shop", "ceramics", "drag"],
    palette: ["#7c2d12", "#fb923c", "#fef3c7"],
    difficulty: "Advanced",
    prompt:
      "Rebuild Kiln, a ceramics shop built around a potter's wheel you actually throw on. Layout: the wheel dead centre with a lump of clay, shelves of finished pots around it, the kiln glowing at the back. Motion: dragging in circles spins the wheel (GSAP rotation tied to pointer velocity) and the clay rises and narrows under your hands; releasing fires the pot with a glow. Interaction: the pot you throw is the product you buy — choose its glaze from three colour swatches mixed on the spot, then add it to the basket. Colours: warm terracotta, ember orange, cream, dark studio brown. Responsive: the wheel fills the screen on mobile and the shelves become a horizontal scroll. Use pointer events for the wheel and GSAP for the clay morph and kiln glow.",
    shader: "ember",
  },
  {
    slug: "driftwood",
    name: "Driftwood",
    tagline: "A cabin you arrive at by scrolling — walk the forest path and the windows light up.",
    description:
      "A rental page that is a journey. Scroll down the forest path, the sun sets as you walk, and by the time you reach the cabin its windows are lit and the booking card is waiting on the porch. The seasons live on a switch: summer, autumn, snow — the same path, three different walks.",
    category: "Landing",
    tags: ["rental", "scroll", "seasons"],
    palette: ["#78350f", "#38bdf8", "#fef3c7"],
    difficulty: "Intermediate",
    prompt:
      "Rebuild Driftwood, a cabin rental page that is a walk down a forest path. Layout: a long scrolling journey — pine forest at the top, the lake in the middle, the cabin at the bottom with the booking card on its porch. Motion: scrolling walks you down the path (GSAP ScrollTrigger), the sun sets as you descend, mist drifts between the trees, and arriving at the cabin lights its windows one by one. Interaction: a season switcher (summer, autumn, snow) repaints the whole walk — same path, three different journeys. Colours: warm wood brown, lake blue, cream light, snow white in winter. Responsive: the walk stays vertical on mobile with the same sunset and window lighting. Use GSAP ScrollTrigger for the journey and CSS gradients for the seasons.",
    shader: "tide",
  },
  {
    slug: "vesper",
    name: "Vesper",
    tagline: "Charts that light up the night — your data draws itself like constellations.",
    description:
      "A dark analytics landing where the data draws itself like constellations. Each metric is a star that connects into figures as you scroll, and the whole dashboard is a night sky you can navigate. Hover a star and its story opens; the numbers never shout, they glow.",
    category: "SaaS",
    tags: ["dashboard", "dark", "charts"],
    palette: ["#1e1b4b", "#a78bfa", "#2dd4bf"],
    difficulty: "Advanced",
    prompt:
      "Rebuild Vesper, a dark analytics landing where data draws itself like constellations. Layout: a night-sky hero with a huge glowing headline, metrics as stars scattered across the dark, and the dashboard as a constellation map below. Motion: scrolling connects the stars into chart figures (SVG stroke animation with GSAP), the stars twinkle, and a shooting star crosses on every section change. Interaction: hovering a star opens its metric story in a glass card; a toggle switches the sky from revenue to growth constellations. Colours: deep navy night, violet starlight, tide aqua accents. Responsive: the constellation compresses into a vertical sky on mobile, stars stay tappable. Use GSAP for the stroke drawing and ScrollTrigger for the connections.",
    shader: "aurora",
  },
  {
    slug: "juniper",
    name: "Juniper",
    tagline: "A playground that draws itself — your cursor is the brush, the page is the canvas.",
    description:
      "A generative-art site where your cursor is the brush and the page is the canvas. Every move paints ribbons of light, and the art you make becomes the site's own background. There is no undo — only more paint. The gallery is other visitors' brushstrokes, still wet.",
    category: "Experimental",
    tags: ["generative", "cursor", "canvas"],
    palette: ["#831843", "#2dd4bf", "#a78bfa"],
    difficulty: "Advanced",
    prompt:
      "Rebuild Juniper, a generative-art playground where the cursor is the brush. Layout: a full-screen dark canvas with a small toolbar (brush, colour, clear) and the site title in thin type at the edge. Motion: every cursor move paints a fading ribbon of light (canvas with requestAnimationFrame), ribbons drift and settle into the background like wet paint. Interaction: the art you make becomes the page background; a gallery strip shows other visitors' brushstrokes; pressing clear washes the canvas with a tide animation. Colours: dark plum background, tide aqua, violet and coral ribbons. Responsive: touch draws with a finger, toolbar becomes a bottom sheet. Use a canvas for the ribbons and Three.js only if needed for the background shimmer.",
    shader: "liquid",
  },
  {
    slug: "halcyon",
    name: "Halcyon",
    tagline: "Breathe with the page — it inhales, exhales, and the sun sets as you scroll.",
    description:
      "A wellness retreat site that breathes. The whole page inhales and exhales on a slow rhythm, the sun sets over the sea as you scroll, and the booking section only appears when the page is fully calm. The retreats are listed by how quiet they are — silence, measured in decibels.",
    category: "Landing",
    tags: ["wellness", "scroll", "calm"],
    palette: ["#fb923c", "#2dd4bf", "#fef3c7"],
    difficulty: "Intermediate",
    prompt:
      "Rebuild Halcyon, a wellness retreat site that breathes with the visitor. Layout: a calm sea hero with a huge soft headline, retreat cards listed by how quiet they are, and the booking section at the bottom. Motion: the whole page breathes on a slow 8-second rhythm (GSAP scale and opacity), the sun sets over the sea as you scroll, and the booking card fades in only when the scroll is fully calm. Interaction: a breathing guide circle leads a 4-second inhale and 4-second exhale; matching it unlocks a quiet discount. Colours: warm peach sunset, soft tide aqua, cream. Responsive: the breathing rhythm stays on mobile and the sun sets the same way. Use GSAP for the breathing loop and ScrollTrigger for the sunset.",
    shader: "ember",
  },
];
