"use client";

import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Reveal from "../Reveal/Reveal";

const STATEMENT =
  "I’m Jatin, a design engineer. I shape interfaces where structure, typography and motion come together — removing the unnecessary, refining the details, and building things that feel intentional and last.";

const FACTS = [
  { label: "Based in", value: "India, working globally" },
  { label: "Building at", value: "Lumo Studio" },
  { label: "Freelance", value: "Available March 2026" },
];

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  // Words light up as the paragraph travels through the middle of the screen.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section id="about" className="mx-auto max-w-[1100px] px-5 sm:px-8 py-32 md:py-48">
      <Reveal>
        <p className="type-eyebrow text-muted">About</p>
      </Reveal>

      <p ref={ref} className="type-headline mt-6 text-ink" aria-label={STATEMENT}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>

      <dl className="mt-20 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-3">
        {FACTS.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.08}>
            <dt className="type-eyebrow text-faint">{f.label}</dt>
            <dd className="mt-2 text-[1.3125rem] font-semibold tracking-[-0.015em] text-ink">
              {f.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
