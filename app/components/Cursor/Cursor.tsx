"use client";

import { useEffect } from "react";
import "mouse-follower/dist/mouse-follower.min.css";

// Cuberto's open-source mouse-follower (github.com/Cuberto/mouse-follower).
// Only on devices with a real mouse, and only once the page is idle, so it
// never competes with first paint and phones never download it.
// Add data-cursor-text="View" to any element to show a label over it.
export default function Cursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let cursor: { destroy: () => void } | undefined;
    let cancelled = false;

    const start = async () => {
      const [{ default: MouseFollower }, { default: gsap }] = await Promise.all([
        import("mouse-follower"),
        import("gsap"),
      ]);
      if (cancelled) return;
      MouseFollower.registerGSAP(gsap);
      cursor = new MouseFollower({
        speed: 0.55,
        skewing: 1.5,
        skewingText: 1.5,
        stateDetection: { "-pointer": "a, button", "-hidden": "iframe" },
      });
      document.documentElement.classList.add("has-cursor");
    };

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const id = idle(() => void start());

    return () => {
      cancelled = true;
      (window.cancelIdleCallback ?? window.clearTimeout)(id as number);
      cursor?.destroy();
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return null;
}
