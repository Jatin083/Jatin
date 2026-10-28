"use client";

import ScrollVelocity from "../reactbits/ScrollVelocity/ScrollVelocity";

// Tech-stack strip: two rows that drift in opposite directions and speed up
// with scroll velocity (React Bits ScrollVelocity, built on Motion).
export default function Stack() {
  return (
    <section aria-label="Tech stack" className="py-16 md:py-24 overflow-hidden">
      <p className="type-eyebrow mb-6 text-center text-muted">Tools I build with</p>
      <ScrollVelocity
        texts={[
          "Next.js · React · TypeScript · Tailwind · ",
          "GSAP · Motion · Lenis · Three.js · WebGL · ",
        ]}
        velocity={40}
        numCopies={6}
        fadeEdges
        className="font-saans font-semibold uppercase tracking-[-0.04em] leading-[1.05] text-ink"
        fontSize="clamp(2.5rem, 7vw, 6.5rem)"
      />
    </section>
  );
}
