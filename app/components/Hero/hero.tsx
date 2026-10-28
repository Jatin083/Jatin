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
import LineReveal from "../LineReveal/LineReveal";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import scrollDown from "react-useanimations/lib/scrollDown";

// Tile geometry at rest (desktop): 32vw x 44vh, 9vh from the top, centred.
const TILE = { top: 9, height: 44, side: 34 }; // side = (100 - 32) / 2 vw

// One video, sized to the full viewport and revealed through a clip-path
// window. Scrolling opens the window to full bleed; the cursor slides it
// sideways on a spring. Only clip-path changes per frame, so the browser
// never re-lays-out or rescales the video.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Opening finishes at 70% of the section so the full frame can hold.
  const open = useTransform(scrollYProgress, [0, 0.7], [0, 1], { clamp: true });

  const pointerX = useMotionValue(0);
  const springX = useSpring(pointerX, { bounce: 0, duration: 0.6 });

  const clip = useTransform(() => {
    const k = 1 - open.get();
    const x = springX.get() * k;
    const radius = 24 * k;
    return `inset(calc(${TILE.top}vh * ${k}) calc((${TILE.side}vw - ${x}px) * ${k}) calc(${100 - TILE.top - TILE.height}vh * ${k}) calc((${TILE.side}vw + ${x}px) * ${k}) round ${radius}px)`;
  });

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      const max = rect.width * (TILE.side / 100) - 24;
      pointerX.set(Math.max(-max, Math.min(e.clientX - rect.left - rect.width / 2, max)));
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce, pointerX]);

  // Don't decode video nobody can see.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const restingClip = `inset(${TILE.top}vh ${TILE.side}vw ${100 - TILE.top - TILE.height}vh ${TILE.side}vw round 24px)`;

  return (
    <section id="home" ref={ref} className="relative md:h-[220vh]">
      <div className="relative flex flex-col md:block md:sticky md:top-0 md:h-screen md:overflow-hidden">
        {/* ===== VIDEO: a rounded card on phones, a clip-path window on desktop ===== */}
        <motion.div
          aria-hidden="true"
          style={{ ["--clip" as string]: reduce ? restingClip : clip }}
          className="order-last mx-5 mb-16 aspect-[4/5] overflow-hidden rounded-3xl bg-black md:order-none md:absolute md:inset-0 md:z-20 md:m-0 md:aspect-auto md:rounded-none md:[clip-path:var(--clip)] pointer-events-none"
        >
          <video
            ref={videoRef}
            src="/video/hero.mp4"
            poster="/img/hero-poster.jpg"
            preload="metadata"
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
            {/* Lumo line reveal on load, the second word a beat after the first */}
            <LineReveal as="span" trigger="load" delay={0.15} className="block">
              Design
            </LineReveal>
            <LineReveal as="span" trigger="load" delay={0.235} className="block self-end sm:self-auto">
              Engineer
            </LineReveal>
          </h1>

          <div className="mt-8 flex items-center justify-between text-[1.0625rem] text-muted">
            <span>Scroll for</span>
            <span className="flex items-center gap-2">
              Cool Sh*t
              <AnimatedIcon icon={scrollDown} size={26} trigger="loop" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
