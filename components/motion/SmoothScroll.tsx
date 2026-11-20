"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ensureGsap, prefersReducedMotion } from "@/lib/motion";

/**
 * Mounts Lenis smooth scrolling for the whole page and keeps GSAP's
 * ScrollTrigger in sync with it. No props, renders nothing.
 *
 * Disabled entirely when the user prefers reduced motion. Cleans up the
 * animation frame loop and destroys the Lenis instance on unmount.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    const api = ensureGsap();
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      // Keep ScrollTrigger positions in sync with Lenis' virtual scroll.
      if (api) api.ScrollTrigger.update();
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
