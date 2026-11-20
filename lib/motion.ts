/**
 * Shared motion helpers for Tidecraft.
 *
 * Plain module (no "use client" needed here) — everything that touches the
 * browser is guarded so importing this from a server component is safe.
 * GSAP + ScrollTrigger are registered exactly once, client-side only.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** GSAP ease used across the site for fade/rise motion. */
export const easeOutExpo = "expo.out";

/** Plain-JS expo-out easing (0 → 1), for non-GSAP use. */
export function easeOutExpoFn(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return 1 - Math.pow(2, -10 * t);
}

/** True when the user asked for reduced motion (or we are not in a browser). */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let gsapRegistered = false;

/**
 * Register GSAP's ScrollTrigger plugin exactly once and return the pair.
 * Returns null on the server or if registration fails, so callers can fall
 * back to a non-GSAP path (e.g. IntersectionObserver).
 */
export function ensureGsap(): { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger } | null {
  if (typeof window === "undefined") return null;
  try {
    if (!gsapRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      gsapRegistered = true;
    }
    return { gsap, ScrollTrigger };
  } catch {
    return null;
  }
}

export interface RegisterRevealOptions {
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
  /** Starting vertical offset in px. Defaults to 24. */
  y?: number;
  /** Duration of the reveal, in seconds. Defaults to 0.9. */
  duration?: number;
  /** ScrollTrigger start position. Defaults to "top 85%". */
  start?: string;
}

/**
 * Fade + rise `element` into view once, when it scrolls into view.
 * Returns the created tween, or null when reduced motion is on, GSAP is
 * unavailable, or we are not in a browser. Callers should kill the returned
 * tween on unmount. Honours prefers-reduced-motion by doing nothing — the
 * caller is responsible for leaving the element visible in that case.
 */
export function registerReveal(
  element: HTMLElement,
  options: RegisterRevealOptions = {},
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;
  if (prefersReducedMotion()) return null;

  const api = ensureGsap();
  if (!api) return null;

  const { delay = 0, y = 24, duration = 0.9, start = "top 85%" } = options;

  return api.gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: easeOutExpo,
      scrollTrigger: {
        trigger: element,
        start,
        once: true,
      },
    },
  );
}
