"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import SplitText from "../reactbits/SplitText/SplitText";

// Original split layout. The video tile drifts toward the cursor on a
// critically damped spring, then on scroll grows into a full-bleed frame
// and the cursor influence fades out as it settles.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Growth finishes at 70% of the section so the full frame can hold.
  const width = useTransform(scrollYProgress, [0, 0.7], ["32vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.7], ["44vh", "100vh"]);
  const radius = useTransform(scrollYProgress, [0, 0.7], [24, 0]);
  const top = useTransform(scrollYProgress, [0, 0.7], ["9vh", "0vh"]);

  // Cursor follow: spring from the live value, so moving back and forth never jumps.
  const pointerX = useMotionValue(0);
  const springX = useSpring(pointerX, { bounce: 0, duration: 0.6 });
  const followWeight = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const x = useTransform(() => springX.get() * followWeight.get());

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      const tileW = window.innerWidth * 0.32;
      const max = rect.width / 2 - tileW / 2 - 24;
      const next = e.clientX - rect.left - rect.width / 2;
      pointerX.set(Math.max(-max, Math.min(next, max)));
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce, pointerX]);

  return (
    <section id="home" ref={ref} className="relative md:h-[220vh]">
      <div className="relative md:sticky md:top-0 md:h-screen md:overflow-hidden">
        {/* ===== FLOATING VIDEO (md and up) ===== */}
        <motion.div
          aria-hidden="true"
          style={reduce ? undefined : { width, height, borderRadius: radius, top, x }}
          className={`hidden md:block absolute left-1/2 z-20 -translate-x-1/2 overflow-hidden bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] will-change-transform ${
            reduce ? "top-[9vh] h-[44vh] w-[32vw] rounded-3xl" : ""
          }`}
        >
          <video
            src="/video/hero.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ===== TYPE ===== */}
        <div className="relative z-10 flex h-full flex-col px-5 sm:px-8 pt-[22vh] md:pt-[clamp(14rem,48vh,30rem)] pb-10">
          <div className="flex justify-between type-eyebrow uppercase tracking-[0.08em] text-muted">
            <span>A</span>
            <span>Seriously</span>
            <span>Good</span>
          </div>

          <h1 className="mt-2 flex flex-col sm:flex-row sm:justify-between font-saans font-semibold uppercase leading-[0.85] tracking-[-0.055em] text-ink text-[17vw] sm:text-[clamp(3rem,11.6vw,12rem)]">
            {/* React Bits SplitText (GSAP): letters rise out of a mask on load */}
            <span>
              <SplitText text="Design" tag="span" splitType="chars" mask trigger="load" delay={45} duration={1.1} ease="power4.out" textAlign="left" />
            </span>
            <span className="self-end sm:self-auto">
              <SplitText text="Engineer" tag="span" splitType="chars" mask trigger="load" delay={45} duration={1.1} ease="power4.out" textAlign="left" staggerFrom="end" />
            </span>
          </h1>

          <div className="mt-8 flex items-center justify-between text-[1.0625rem] text-muted">
            <span>Scroll for</span>
            <span className="flex items-center gap-2">
              Cool Sh*t
              <motion.span
                aria-hidden
                animate={reduce ? undefined : { y: [0, 4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </span>
          </div>
        </div>

        {/* ===== MOBILE VIDEO ===== */}
        <div className="md:hidden px-5 pb-16">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-black">
            <video
              src="/video/hero.mp4"
              aria-hidden="true"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
