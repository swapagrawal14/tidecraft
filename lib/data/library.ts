import type { LibraryItem } from "../data";

// Seed data — the data agent (W12) expands each list.
// Names and prompts are original. Do NOT copy Scrolltide's library copy.

export const components: LibraryItem[] = [
  {
    slug: "tide-button",
    name: "Tide Button",
    kind: "component",
    tagline: "A button that leans into the cursor.",
    description:
      "A magnetic button with a soft fill that rises like water on hover and a ripple on press.",
    prompt:
      "Build a magnetic button component. On hover, the button translates a few pixels toward the cursor and a teal fill rises from the bottom. On press, a ripple spreads from the click point. Respect prefers-reduced-motion. Export as a React component with variant props: primary, ghost, and dark.",
    gradient: ["#2dd4bf", "#0ea5e9"],
    tags: ["button", "magnetic", "micro-interaction"],
  },
  {
    slug: "cursor-globe",
    name: "Cursor Globe",
    kind: "component",
    tagline: "A small globe that follows the pointer.",
    description:
      "A lightweight canvas globe that rotates toward the cursor, for hero sections and about pages.",
    prompt:
      "Build a small canvas globe component. Draw a wireframe sphere with dots for landmasses. It rotates slowly on its own and tilts toward the cursor. Keep it under 5 KB of JavaScript and pause rendering when off-screen using IntersectionObserver.",
    gradient: ["#a78bfa", "#2dd4bf"],
    tags: ["canvas", "globe", "hero"],
  },
  {
    slug: "orbit-toggle",
    name: "Orbit Toggle",
    kind: "component",
    tagline: "A switch with a moon that orbits as it flips.",
    description:
      "A toggle switch where the knob carries a small orbiting dot that swings to the other side on change, with a smooth track colour shift.",
    prompt:
      "Build a toggle switch component with an orbiting knob. The track is a soft pill in a muted tone, and the knob holds a small dot that orbits from left to right when the switch turns on. Animate the orbit with a spring easing over 300 ms and shift the track colour from slate to teal. Expose checked and onChange props, support keyboard focus with a visible ring, and respect prefers-reduced-motion by snapping instead of animating.",
    gradient: ["#f59e0b", "#fb7185"],
    tags: ["toggle", "switch", "micro-interaction"],
  },
  {
    slug: "marquee-lane",
    name: "Marquee Lane",
    kind: "component",
    tagline: "An endless lane of words that never stutters.",
    description:
      "A seamless infinite marquee that scrolls text or logos in a loop, pauses on hover, and reverses direction on demand.",
    prompt:
      "Build an infinite marquee component. Duplicate the content list so the loop is seamless with no visible jump. Scroll at a steady speed using a CSS keyframe animation and pause on hover. Accept direction and speed props, and add edge fade masks so items dissolve in and out. Keep the animation off the main thread by animating transform only, and respect prefers-reduced-motion by rendering a static row.",
    gradient: ["#38bdf8", "#818cf8"],
    tags: ["marquee", "scroll", "loop"],
  },
  {
    slug: "tilt-card",
    name: "Tilt Card",
    kind: "component",
    tagline: "A card that leans toward your cursor.",
    description:
      "A 3D tilt card with a moving glare highlight that follows the pointer, for pricing, team and feature grids.",
    prompt:
      "Build a 3D tilt card component. On pointer move, rotate the card up to 8 degrees on both axes toward the cursor and move a soft radial glare highlight to match the pointer position. Reset smoothly to flat when the pointer leaves. Use perspective on the wrapper and transform-style preserve-3d on the card. Disable the effect on touch devices and when prefers-reduced-motion is set.",
    gradient: ["#f472b6", "#a78bfa"],
    tags: ["card", "3d", "hover"],
  },
  {
    slug: "scroll-progress-ring",
    name: "Scroll Progress Ring",
    kind: "component",
    tagline: "Reading progress, drawn as a ring.",
    description:
      "A small fixed ring in the corner that fills as the reader scrolls down the page, with the percentage in the centre.",
    prompt:
      "Build a scroll progress ring component. Render an SVG circle whose stroke-dashoffset fills in proportion to page scroll progress, with the current percentage shown in the centre. Update the progress with requestAnimationFrame and a passive scroll listener for smoothness. Fix the ring to the bottom-right corner, fade it out near the top of the page, and hide it entirely when prefers-reduced-motion is set.",
    gradient: ["#34d399", "#0ea5e9"],
    tags: ["scroll", "progress", "svg"],
  },
  {
    slug: "magnetic-nav",
    name: "Magnetic Nav",
    kind: "component",
    tagline: "Nav links that pull gently toward the cursor.",
    description:
      "A navigation bar whose links drift a few pixels toward the pointer, with a sliding pill that marks the active page.",
    prompt:
      "Build a magnetic navigation component. Each link translates up to 6 pixels toward the cursor while hovered and springs back on leave. An animated pill slides behind the active link, measured from the link's bounding box so it fits any label width. On mobile the links collapse into a menu button that opens a full-screen overlay. Keep the nav sticky with a blurred translucent background.",
    gradient: ["#2dd4bf", "#818cf8"],
    tags: ["navigation", "magnetic", "menu"],
  },
  {
    slug: "glow-input",
    name: "Glow Input",
    kind: "component",
    tagline: "An input field that lights up when you type.",
    description:
      "A text input with a floating label and an animated gradient border that ignites on focus and validates with colour.",
    prompt:
      "Build a glowing input component. The label floats above the field when focused or filled, and the border draws a moving gradient glow on focus. Show a green border and check mark when the value is valid, and a red border with an error message when it is not. Accept label, placeholder, type and error props, and keep the glow purely CSS so typing stays fast.",
    gradient: ["#fbbf24", "#fb7185"],
    tags: ["form", "input", "focus"],
  },
];

export const shaders: LibraryItem[] = [
  {
    slug: "aurora-veil",
    name: "Aurora Veil",
    kind: "shader",
    tagline: "Northern lights, running on the GPU.",
    description:
      "A slow aurora shader background with drifting bands of teal, blue and violet. Runs as a fragment shader on a full-screen quad.",
    prompt:
      "Write a GLSL fragment shader for an aurora background. Layer 3 octaves of value noise into slow-drifting bands of teal (#2dd4bf), sky (#7dd3fc) and violet (#a78bfa) over a near-black base. Animate with time, respond subtly to mouse position, and keep it 60fps on mobile by capping pixel ratio at 1.5.",
    shader: "aurora",
    tags: ["webgl", "aurora", "background"],
  },
  {
    slug: "liquid-metal",
    name: "Liquid Metal",
    kind: "shader",
    tagline: "Mercury that never stops moving.",
    description:
      "A liquid-metal shader with slow, heavy ripples — for heroes that need weight.",
    prompt:
      "Write a GLSL fragment shader for a liquid-metal background. Use domain-warped noise to make slow, heavy ripples in silver and deep blue with bright specular highlights. Animate with time. Provide a still-image fallback frame for the first paint.",
    shader: "liquid",
    tags: ["webgl", "metal", "background"],
  },
  {
    slug: "ember-drift",
    name: "Ember Drift",
    kind: "shader",
    tagline: "Warm sparks rising through the dark.",
    description:
      "An ember shader background: tiny glowing sparks drift upward and fade, like coals breathing in the dark.",
    prompt:
      "Write a GLSL fragment shader for an ember background. Scatter glowing particles that rise slowly, flicker in orange (#fb923c) and red (#f43f5e), and fade out as they climb, over a near-black base (#0b0b12). Vary particle size and speed with a hash function so no two sparks behave alike. Animate with time, respond gently to mouse movement by brightening nearby embers, and cap pixel ratio at 1.5 for mobile performance.",
    shader: "ember",
    tags: ["webgl", "embers", "particles"],
  },
  {
    slug: "tide-lines",
    name: "Tide Lines",
    kind: "shader",
    tagline: "Currents drawn in light.",
    description:
      "A tide shader background of flowing contour lines that roll across the screen like slow ocean currents.",
    prompt:
      "Write a GLSL fragment shader for a flowing tide-lines background. Draw smooth contour lines from layered sine waves and value noise in teal (#2dd4bf) and deep blue (#0c4a6e) over a dark navy base. Let the lines drift horizontally with time so the whole field feels like a slow current. Add a subtle mouse influence that bends the lines near the pointer, and keep the line density low enough to stay readable behind text.",
    shader: "tide",
    tags: ["webgl", "lines", "ocean"],
  },
  {
    slug: "mono-mist",
    name: "Mono Mist",
    kind: "shader",
    tagline: "Fog in a single colour.",
    description:
      "A monochrome mist shader: soft grey fog that breathes across the screen, calm enough for text-heavy pages.",
    prompt:
      "Write a GLSL fragment shader for a monochrome mist background. Layer fractal Brownian motion into slow, soft fog in greys from #111827 to #e5e7eb over a near-black base. Keep the contrast low and the motion slow so text stays readable on top. Animate with time only, with no mouse interaction, and provide a static gradient fallback for prefers-reduced-motion.",
    shader: "mono",
    tags: ["webgl", "mist", "minimal"],
  },
  {
    slug: "violet-static",
    name: "Violet Static",
    kind: "shader",
    tagline: "A violet nebula with a grain of noise.",
    description:
      "A violet static shader: a grainy nebula of purple and indigo clouds that shimmer like old television static, softened.",
    prompt:
      "Write a GLSL fragment shader for a violet static background. Combine slow-moving violet (#8b5cf6) and indigo (#312e81) nebula clouds with a fine animated grain layer for a soft static feel. Keep the grain subtle so it reads as texture, not noise, and the clouds drifting slowly with time. Respond to mouse position by gently brightening the clouds near the pointer, and cap pixel ratio at 1.5 for mobile performance.",
    shader: "aurora",
    tags: ["webgl", "nebula", "grain"],
  },
];

export const sections: LibraryItem[] = [
  {
    slug: "pricing-tide",
    name: "Pricing Tide",
    kind: "section",
    tagline: "Pricing that lands instead of shouts.",
    description:
      "A three-tier pricing section with a highlighted middle tier and a gentle scroll-in.",
    prompt:
      "Build a pricing section with three tiers. The middle tier is highlighted with a gradient border and a 'Most popular' tag. Each tier lists 5 features with check marks. Add a monthly/yearly toggle that animates the prices. The whole section fades and rises into view on scroll.",
    gradient: ["#2dd4bf", "#a78bfa"],
    tags: ["pricing", "toggle", "conversion"],
  },
  {
    slug: "testimonial-wall",
    name: "Testimonial Wall",
    kind: "section",
    tagline: "Kind words, arranged like stones.",
    description:
      "A masonry wall of short testimonials with avatars, names and roles.",
    prompt:
      "Build a testimonial wall section. Masonry layout with cards of varying heights, each with a quote, avatar circle with initials, name and role. Cards fade in with a stagger as they enter the viewport. On mobile it becomes a single column.",
    gradient: ["#fb7185", "#fbbf24"],
    tags: ["social-proof", "masonry", "testimonials"],
  },
  {
    slug: "hero-split",
    name: "Hero Split",
    kind: "section",
    tagline: "Half words, half wonder.",
    description:
      "A split hero section: a bold headline and call to action on the left, a living visual on the right.",
    prompt:
      "Build a split hero section. On the left, a large headline with a gradient accent word, a short supporting line, and two call-to-action buttons. On the right, a visual panel with a gradient or shader background and a floating card. The headline words rise in one by one on load, and the visual drifts gently. On mobile the visual stacks below the text.",
    gradient: ["#0ea5e9", "#a78bfa"],
    tags: ["hero", "split", "landing"],
  },
  {
    slug: "feature-tide",
    name: "Feature Tide",
    kind: "section",
    tagline: "Features that roll in one by one.",
    description:
      "A feature grid where each card rises out of the scroll in a wave, with an icon, title and one-line benefit.",
    prompt:
      "Build a feature grid section with six cards in a three-column layout. Each card has a small icon, a title and a one-line benefit, and rises into view with a stagger as the section scrolls in, like a wave. On hover, a card lifts slightly and its icon glows. On mobile the grid becomes a single column.",
    gradient: ["#2dd4bf", "#34d399"],
    tags: ["features", "grid", "scroll"],
  },
  {
    slug: "logo-drift",
    name: "Logo Drift",
    kind: "section",
    tagline: "Trusted by names that keep moving.",
    description:
      "A logo strip that drifts endlessly across the page, with soft edge fades and a pause on hover.",
    prompt:
      "Build a logo strip section. A single row of wordmark-style logos scrolls endlessly in a seamless loop with soft fades at both edges. Pause the scroll on hover. Place a small 'Trusted by teams at' label above the strip. Render the logos as styled text or inline SVG, never as image files.",
    gradient: ["#94a3b8", "#cbd5e1"],
    tags: ["logos", "social-proof", "marquee"],
  },
  {
    slug: "cta-horizon",
    name: "CTA Horizon",
    kind: "section",
    tagline: "One last push before the horizon.",
    description:
      "A wide call-to-action band with a gradient horizon line, a short pitch, and a single bold button.",
    prompt:
      "Build a call-to-action band section. A full-width rounded panel with a gradient horizon glow at the bottom, a short bold pitch line, and one large button. Add a subtle animated shine that sweeps across the panel every few seconds. The whole band scales up gently as it enters the viewport. Keep the copy to one sentence plus the button.",
    gradient: ["#f97316", "#fb7185"],
    tags: ["cta", "conversion", "band"],
  },
];

export const uiScreens: LibraryItem[] = [
  {
    slug: "wallet-console",
    name: "Wallet Console",
    kind: "ui",
    tagline: "The screen behind the signup.",
    description:
      "A wallet dashboard UI: balance, recent transactions, and a send-money flow, laid out as a reference screen.",
    prompt:
      "Build a wallet dashboard UI screen. Left sidebar navigation, top bar with search and avatar, a large balance card with a gradient, a transaction list with icons, and a send-money panel. Use realistic data shapes and empty states. Dark theme, dense but calm.",
    gradient: ["#0ea5e9", "#2dd4bf"],
    tags: ["dashboard", "fintech", "wallet"],
  },
  {
    slug: "analytics-desk",
    name: "Analytics Desk",
    kind: "ui",
    tagline: "Numbers that read like a story.",
    description:
      "An analytics dashboard with charts, KPI cards and a date-range picker.",
    prompt:
      "Build an analytics dashboard UI screen. Four KPI cards at the top with sparklines, a large area chart in the middle, and a table of top pages below. Add a date-range picker. Use CSS-drawn charts (no chart library) with smooth hover states.",
    gradient: ["#a78bfa", "#fb7185"],
    tags: ["dashboard", "analytics", "charts"],
  },
  {
    slug: "habit-tracker",
    name: "Habit Tracker",
    kind: "ui",
    tagline: "Small wins, stacked daily.",
    description:
      "A habit tracker screen with a weekly grid, streak flames and a calm progress ring for the day.",
    prompt:
      "Build a habit tracker UI screen. A header shows today's date and a progress ring for completed habits. Below it, a list of habits with check circles, streak counts and a weekly grid of filled and empty dots. Checking a habit fills its circle with a spring animation and updates the ring. Use realistic habit names and a quiet, encouraging empty state for days with nothing done.",
    gradient: ["#34d399", "#fbbf24"],
    tags: ["habits", "tracker", "productivity"],
  },
  {
    slug: "music-studio",
    name: "Music Studio",
    kind: "ui",
    tagline: "Your tracks, your mix, your room.",
    description:
      "A music studio screen with a track list, a waveform player and simple mixer sliders.",
    prompt:
      "Build a music studio UI screen. Left column with a playlist of tracks showing title, artist and duration. Centre panel with a large waveform, play and pause controls, and a progress bar. Right column with mixer sliders for volume, bass and treble. Use CSS-drawn waveforms and realistic track data, and keep the whole screen in a dark theme with one accent colour.",
    gradient: ["#a78bfa", "#0ea5e9"],
    tags: ["music", "player", "studio"],
  },
  {
    slug: "travel-planner",
    name: "Travel Planner",
    kind: "ui",
    tagline: "Every trip, one tidy timeline.",
    description:
      "A travel planner screen with a trip timeline, day-by-day stops and a budget summary.",
    prompt:
      "Build a travel planner UI screen. A top card shows the trip name, dates and a budget summary with a spent-versus-planned bar. Below it, a vertical timeline of days, each with stops, times and small notes. Add a button to add a stop and a filter for transport, stays and food. Use realistic trip data and a light, airy theme.",
    gradient: ["#38bdf8", "#fb7185"],
    tags: ["travel", "planner", "timeline"],
  },
  {
    slug: "chat-console",
    name: "Chat Console",
    kind: "ui",
    tagline: "Conversations, kept in order.",
    description:
      "A chat console screen with a thread list, a message view and a composer with quick replies.",
    prompt:
      "Build a chat console UI screen. Left column with a searchable list of conversation threads showing name, last message and unread badge. Centre pane with the message thread, bubbles for sent and received messages, and timestamps. Bottom composer with a text field, send button and three quick-reply chips. Include typing indicator and empty state for a thread with no messages yet.",
    gradient: ["#2dd4bf", "#818cf8"],
    tags: ["chat", "messages", "console"],
  },
];
