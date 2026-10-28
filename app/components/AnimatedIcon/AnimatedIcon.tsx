"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

// Animated icons from useanimations.com (react-useanimations ships the Lottie
// files). We play them ourselves so that:
//  - hovering anywhere on the parent link/button plays the icon, and leaving
//    plays it backwards from wherever it is (interruptible, never jumps)
//  - the icon takes the text colour (currentColor)
//  - reduced motion shows the resting frame, and animations are cleaned up.
type IconModule = { animationData: object; animationKey: string };

export default function AnimatedIcon({
  icon,
  size = 20,
  trigger = "hover",
  className = "",
}: {
  icon: IconModule;
  size?: number;
  trigger?: "hover" | "loop";
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let anim: AnimationItem | undefined;
    let cancelled = false;
    const host = (el.closest("a, button") as HTMLElement | null) ?? el;

    const enter = () => {
      if (!anim) return;
      anim.setDirection(1);
      anim.play();
    };
    const leave = () => {
      if (!anim) return;
      anim.setDirection(-1);
      anim.play();
    };

    // Load the Lottie player only once this icon is on screen and the browser
    // is idle, so icons never compete with first paint.
    const load = () =>
      import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (cancelled) return;
      anim = lottie.loadAnimation({
        container: el,
        renderer: "svg",
        animationData: structuredClone(icon.animationData),
        loop: trigger === "loop" && !reduce,
        autoplay: trigger === "loop" && !reduce,
      });
      if (trigger === "hover" && !reduce) {
        host.addEventListener("pointerenter", enter);
        host.addEventListener("pointerleave", leave);
        host.addEventListener("focus", enter);
        host.addEventListener("blur", leave);
      }
    });

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        idle(() => void load());
      },
      { rootMargin: "200px" }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      host.removeEventListener("pointerenter", enter);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("focus", enter);
      host.removeEventListener("blur", leave);
      anim?.destroy();
    };
  }, [icon, trigger]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`anim-icon inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
