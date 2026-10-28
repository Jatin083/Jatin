"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Lumo Studio's text motion: text splits into lines, each line sits in its
// own clipping mask and rises from 100% below, ~0.95s on power4.out, lines
// ~85ms apart. Measured from lumostudio.dev.
//
// - autoSplit re-splits when fonts load or the width changes, so lines are
//   always the real rendered lines.
// - The element is hidden by CSS ([data-line-reveal]) until it is split, so
//   there is no flash of text before the animation. Reduced motion and
//   no-JS both show it immediately (see globals.css / layout.tsx).
export default function LineReveal({
  as: Tag = "div",
  children,
  className,
  trigger = "view",
  delay = 0,
  stagger = 0.085,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  trigger?: "view" | "load";
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.style.visibility = "visible";
        return;
      }

      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "lr-line",
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { visibility: "visible" });
          return gsap.from(self.lines, {
            yPercent: 100,
            duration: 0.95,
            ease: "power4.out",
            stagger,
            delay,
            scrollTrigger:
              trigger === "view" ? { trigger: el, start: "top 88%", once: true } : undefined,
          });
        },
      });

      return () => split.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} data-line-reveal="">
      {children}
    </Tag>
  );
}
