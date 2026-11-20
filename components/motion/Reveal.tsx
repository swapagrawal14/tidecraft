"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { prefersReducedMotion, registerReveal } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
  className?: string;
}

const HIDDEN_STYLE = {
  opacity: 0,
  transform: "translateY(24px)",
} as const;

const VISIBLE_STYLE = {
  opacity: 1,
  transform: "translateY(0px)",
} as const;

/**
 * Fades + rises its children into view the first time they scroll into view.
 *
 * Primary path: GSAP ScrollTrigger via `registerReveal` (see lib/motion.ts).
 * Fallback: if GSAP is unavailable, an IntersectionObserver flips the
 * element visible with a CSS transition. With prefers-reduced-motion the
 * content is shown immediately, with no animation at all.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show immediately, never hide.
    if (prefersReducedMotion()) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
      return;
    }

    // Try the GSAP path first. registerReveal returns null when GSAP
    // failed to load/register, in which case we fall through to the
    // IntersectionObserver fallback below.
    const tween = registerReveal(el, { delay });
    if (tween) {
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }

    // Fallback: CSS-transition reveal driven by IntersectionObserver.
    el.style.transition = `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.opacity = VISIBLE_STYLE.opacity.toString();
            el.style.transform = VISIBLE_STYLE.transform;
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ ...HIDDEN_STYLE }}>
      {children}
    </div>
  );
}
