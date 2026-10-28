"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// One protagonist, one full motion arc: the headline steps back while the
// video grows from a rounded tile into a full-bleed frame, then holds.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Finish the growth at 70% so the full-bleed frame gets time to breathe.
  const videoScale = useTransform(scrollYProgress, [0, 0.7], [0.62, 1]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.7], [28, 0]);
  const videoY = useTransform(scrollYProgress, [0, 0.7], ["14vh", "0vh"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.94]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section id="home" ref={ref} className={reduce ? "relative" : "relative h-[260vh]"}>
      <div className={reduce ? "relative" : "sticky top-0 h-screen overflow-hidden"}>
        {/* ===== HEADLINE ===== */}
        <motion.div
          style={reduce ? undefined : { opacity: textOpacity, scale: textScale, y: textY }}
          className="relative z-10 flex flex-col items-center px-5 pt-[16vh] text-center will-change-transform"
        >
          <p className="type-eyebrow text-muted">Jatin Singh · India based, working globally</p>
          <h1 className="type-hero mt-4 text-ink">
            Design Engineer.
          </h1>
          <p className="type-body-lg mt-5 max-w-xl text-muted">
            Interfaces where typography, motion and code feel like one thing.
          </p>
          <div className="mt-7 flex items-center gap-6 text-[1.0625rem]">
            <a href="#work" className="btn-pill btn-primary">
              See the work
            </a>
            <a href="#about" className="btn-link">
              About me <span aria-hidden>›</span>
            </a>
          </div>
        </motion.div>

        {/* ===== VIDEO ===== */}
        <motion.div
          style={
            reduce
              ? undefined
              : { scale: videoScale, borderRadius: videoRadius, y: videoY }
          }
          className={
            reduce
              ? "relative mx-5 my-16 aspect-video overflow-hidden rounded-[28px] bg-black"
              : "absolute inset-0 z-20 origin-bottom overflow-hidden bg-black will-change-transform"
          }
        >
          <video
            src="/video/hero.mp4"
            aria-hidden="true"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
