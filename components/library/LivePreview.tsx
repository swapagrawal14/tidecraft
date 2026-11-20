"use client";

import type { TemplateItem } from "@/lib/data";

/**
 * LivePreview — a small animated miniature of a template's interactive
 * concept, drawn in code. No still images: every card plays its own scene
 * (a sailing boat, a ferry crossing, falling paper, a spinning wheel...).
 * Respects reduced motion via the CSS gates in globals.css.
 */

function Boat() {
  return (
    <div className="a-drift absolute left-0 top-[38%]">
      <svg width="34" height="20" viewBox="0 0 34 20" aria-hidden="true">
        <path d="M17 1 L17 10" stroke="#f8fafc" strokeWidth="1.5" />
        <path d="M17 2 L26 10 L17 10 Z" fill="#f8fafc" />
        <path d="M4 11 L30 11 L26 17 L8 17 Z" fill="#0f172a" />
      </svg>
    </div>
  );
}

function Stars({ count = 8 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="a-twinkle absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${8 + ((i * 37) % 84)}%`,
            top: `${6 + ((i * 23) % 34)}%`,
            animationDelay: `${(i % 5) * 0.45}s`,
          }}
        />
      ))}
    </>
  );
}

function Scene({ slug }: { slug: string }) {
  switch (slug) {
    case "saltline":
      return (
        <>
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[#082f49]/60" />
          <svg
            className="absolute inset-x-2 top-[22%] h-16 w-[calc(100%-1rem)]"
            viewBox="0 0 300 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="a-draw"
              d="M0 48 C 40 20, 80 55, 130 30 S 230 10, 300 35"
              stroke="#5eead4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <Boat />
          <div className="a-ripple absolute bottom-2 left-0 flex w-[200%] gap-6 opacity-70">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-1.5 w-10 rounded-full bg-white/40" />
            ))}
          </div>
        </>
      );
    case "nightferry":
      return (
        <>
          <Stars />
          <span className="a-glow absolute right-[14%] top-[12%] h-9 w-9 rounded-full bg-[#e0e7ff] shadow-[0_0_36px_10px_rgba(224,231,255,0.45)]" />
          <div className="a-bob absolute bottom-[26%] left-1/2 -translate-x-1/2">
            <svg width="86" height="30" viewBox="0 0 86 30" aria-hidden="true">
              <rect x="6" y="12" width="74" height="10" rx="3" fill="#0f172a" />
              <rect x="26" y="2" width="30" height="11" rx="2" fill="#0f172a" />
              {[14, 30, 46, 62].map((x) => (
                <rect key={x} x={x} y="5" width="6" height="5" rx="1" fill="#fbbf24" />
              ))}
              <path d="M2 24 L84 24 L78 29 L8 29 Z" fill="#0f172a" />
            </svg>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[#0b1226]/80" />
        </>
      );
    case "glasshouse":
      return (
        <>
          <span className="a-glow absolute left-[16%] top-[10%] h-12 w-12 rounded-full bg-[#fef3c7]/80 blur-md" />
          {[22, 45, 68].map((left, i) => (
            <div
              key={left}
              className="a-sway absolute bottom-0"
              style={{ left: `${left}%`, animationDelay: `${i * 0.7}s` }}
            >
              <div className="mx-auto h-20 w-1 rounded-full bg-[#166534]" />
              <span className="absolute -left-3 top-2 h-4 w-4 rounded-full bg-[#4ade80]" />
              <span className="absolute -right-3 top-6 h-5 w-5 rounded-full bg-[#86efac]" />
              <span className="absolute -left-2 top-10 h-3 w-3 rounded-full bg-[#bbf7d0]" />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 h-2 bg-[#78350f]/70" />
        </>
      );
    case "lowtide":
      return (
        <>
          <span className="a-glow absolute right-[18%] top-[10%] h-10 w-10 rounded-full bg-[#fde68a]" />
          <div className="absolute inset-x-0 bottom-0 h-3/5 rounded-t-[100%] bg-[#0891b2]/50" />
          <div className="a-bob absolute bottom-[30%] left-[30%] h-2.5 w-8 rounded-full bg-[#0f172a]" />
          <div className="a-ripple absolute bottom-3 left-0 flex w-[200%] gap-8 opacity-80">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="h-1.5 w-12 rounded-full bg-white/50" />
            ))}
          </div>
        </>
      );
    case "starling":
      return (
        <>
          <Stars count={6} />
          {[
            { l: 18, t: 26, d: "0s" },
            { l: 38, t: 16, d: "0.8s" },
            { l: 55, t: 30, d: "1.6s" },
            { l: 68, t: 20, d: "0.4s" },
            { l: 30, t: 44, d: "2s" },
            { l: 78, t: 42, d: "1.2s" },
          ].map((b, i) => (
            <svg
              key={i}
              className="a-drift absolute"
              style={{ left: `${b.l}%`, top: `${b.t}%`, animationDelay: b.d, animationDuration: `${7 + i}s` }}
              width="16"
              height="8"
              viewBox="0 0 16 8"
              aria-hidden="true"
            >
              <path d="M1 6 Q8 -2 15 6" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          ))}
        </>
      );
    case "foxglove":
      return (
        <>
          {[24, 50, 74].map((left, i) => (
            <div key={left} className="a-sway absolute bottom-0" style={{ left: `${left}%`, animationDelay: `${i * 0.6}s` }}>
              <div className="mx-auto h-20 w-1 rounded-full bg-[#14532d]" />
              <span className="a-breathe absolute -left-3 -top-2 h-7 w-7 rounded-full bg-[#fda4af]" />
              <span className="absolute -right-1 top-3 h-4 w-4 rounded-full bg-[#fda4af]/70" />
            </div>
          ))}
          {[
            { l: "30%", d: "0s" },
            { l: "60%", d: "2s" },
            { l: "80%", d: "3.4s" },
          ].map((p, i) => (
            <span
              key={i}
              className="a-fall absolute top-0 h-2.5 w-2.5 rounded-full bg-[#fda4af]/90"
              style={{ left: p.l, animationDelay: p.d }}
            />
          ))}
        </>
      );
    case "paperstorm":
      return (
        <>
          {[
            { l: "18%", r: -12, d: "0s" },
            { l: "42%", r: 10, d: "1.4s" },
            { l: "64%", r: -6, d: "2.6s" },
            { l: "82%", r: 14, d: "0.8s" },
          ].map((p, i) => (
            <span
              key={i}
              className="a-fall absolute top-0 block h-12 w-9 rounded-[2px] bg-[#f8fafc] shadow-md"
              style={{ left: p.l, transform: `rotate(${p.r}deg)`, animationDelay: p.d }}
            >
              <span className="mx-1.5 mt-2 block h-1 w-6 bg-[#111827]/60" />
              <span className="mx-1.5 mt-1 block h-1 w-4 bg-[#111827]/40" />
              <span className="mx-1.5 mt-1 block h-1 w-5 bg-[#ef4444]/70" />
            </span>
          ))}
        </>
      );
    case "kiln":
      return (
        <>
          <span className="a-glow absolute bottom-[16%] right-[12%] h-14 w-14 rounded-full bg-[#fb923c]/70 blur-lg" />
          <div className="absolute bottom-[24%] left-1/2 -translate-x-1/2">
            <div className="a-spin-slow h-16 w-16 rounded-full border-2 border-[#fef3c7]/50">
              <div className="mx-auto mt-2 h-8 w-8 rounded-t-full bg-[#fb923c]" />
            </div>
            <div className="mx-auto mt-1 h-1.5 w-20 rounded-full bg-[#451a03]" />
          </div>
          <span className="absolute bottom-[10%] left-[16%] h-6 w-5 rounded-t-full bg-[#b45309]" />
          <span className="absolute bottom-[10%] right-[26%] h-7 w-6 rounded-t-full bg-[#92400e]" />
        </>
      );
    case "driftwood":
      return (
        <>
          <span className="a-settle absolute left-[20%] top-[8%] h-9 w-9 rounded-full bg-[#fde68a]" />
          <div className="absolute bottom-[30%] left-0 right-0 h-px bg-white/20" />
          <div className="absolute bottom-[8%] right-[16%]">
            <div className="h-10 w-14 rounded-[3px] bg-[#451a03]" />
            <div className="absolute left-1 top-0 h-5 w-14 bg-[#451a03]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
            <span className="a-twinkle absolute left-2 top-5 h-2.5 w-2.5 rounded-[1px] bg-[#fbbf24]" />
            <span className="a-twinkle absolute right-2 top-5 h-2.5 w-2.5 rounded-[1px] bg-[#fbbf24]" style={{ animationDelay: "0.9s" }} />
          </div>
          <div className="a-ripple absolute bottom-2 left-0 flex w-[200%] gap-10 opacity-60">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="h-1 w-14 rounded-full bg-white/40" />
            ))}
          </div>
        </>
      );
    case "vesper":
      return (
        <>
          <Stars count={9} />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 300 176"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="a-draw"
              d="M40 120 L110 60 L180 100 L250 40"
              stroke="#a78bfa"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
          </svg>
          {[
            { l: "13%", t: "68%" },
            { l: "37%", t: "34%" },
            { l: "60%", t: "57%" },
            { l: "83%", t: "23%" },
          ].map((s, i) => (
            <span
              key={i}
              className="a-glow absolute h-2.5 w-2.5 rounded-full bg-[#a78bfa]"
              style={{ left: s.l, top: s.t, animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </>
      );
    case "juniper":
      return (
        <>
          <span className="a-sway absolute left-[10%] top-[22%] h-3 w-32 rounded-full bg-[#2dd4bf]/70 blur-[3px]" />
          <span className="a-sway absolute left-[30%] top-[48%] h-3 w-40 rounded-full bg-[#a78bfa]/70 blur-[3px]" style={{ animationDelay: "1s" }} />
          <span className="a-sway absolute left-[16%] top-[68%] h-3 w-28 rounded-full bg-[#fb7185]/70 blur-[3px]" style={{ animationDelay: "2s" }} />
          <Stars count={5} />
        </>
      );
    case "halcyon":
      return (
        <>
          <span className="a-settle absolute left-1/2 top-[6%] h-11 w-11 -translate-x-1/2 rounded-full bg-[#fdba74] shadow-[0_0_40px_12px_rgba(253,186,116,0.5)]" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[#0e7490]/50" />
          <span className="a-breathe absolute bottom-[16%] left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-white/70" />
          <div className="a-ripple absolute bottom-3 left-0 flex w-[200%] gap-8 opacity-60">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="h-1 w-12 rounded-full bg-white/40" />
            ))}
          </div>
        </>
      );
    default:
      return null;
  }
}

export default function LivePreview({
  item,
  className = "",
}: {
  item: TemplateItem;
  className?: string;
}) {
  const [first, second, third] = item.palette;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${first} 0%, ${second} 55%, ${third} 100%)`,
      }}
      aria-label={`${item.name} — animated preview`}
      role="img"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <Scene slug={item.slug} />
    </div>
  );
}
