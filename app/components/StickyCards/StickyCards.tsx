"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StickyCards.module.css";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "01",
    title: "Frontend Engineering",
    desc: "High-performance, animation-driven interfaces with precise visual hierarchy.",
    points: [
      "Next.js App Router architecture",
      "GSAP + ScrollTrigger animations",
      "Pixel-perfect responsive layouts",
      "Performance & accessibility focus",
    ],
    tech: "Next.js · React · Tailwind · GSAP",
    img: "/card-img-1.jpg",
  },
  {
    id: "02",
    title: "UI / UX Design",
    desc: "Editorial, minimal, and conversion-focused interface design.",
    points: [
      "Design systems & spacing logic",
      "Typography-first layouts",
      "Figma → production-ready UI",
      "Interaction & motion design",
    ],
    tech: "Figma · Framer · Design Systems",
    img: "/card-img-2.jpg",
  },
  {
    id: "03",
    title: "Creative Development",
    desc: "Scroll-based storytelling and immersive web experiences.",
    points: [
      "Sticky & layered scroll effects",
      "Micro-interactions & parallax",
      "Experimental UI concepts",
      "Brand-driven visuals",
    ],
    tech: "GSAP · Lenis · Web Animations",
    img: "/card-img-3.jpg",
  },
  {
    id: "04",
    title: "Web Performance & Polish",
    desc: "Making products feel fast, smooth, and premium.",
    points: [
      "Animation performance tuning",
      "Font & layout optimization",
      "Production-ready code cleanup",
      "UX finishing & refinements",
    ],
    tech: "Next.js · Lighthouse · Web Vitals",
    img: "/card-img-4.jpg",
  },
];

export default function StickyCards() {
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(`.${styles.card}`);
    const totalCards = cards.length;
    const segmentSize = 1 / totalCards;

    const cardYOffset = 5;
    const cardScaleStep = 0.075;

    cards.forEach((card, i) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + i * cardYOffset,
        scale: 1 - i * cardScaleStep,
      });
    });

    const st = ScrollTrigger.create({
      trigger: `.${styles.sticky}`,
      start: "top top",
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.min(
          Math.floor(progress / segmentSize),
          totalCards - 1
        );

        const segProgress =
          (progress - activeIndex * segmentSize) / segmentSize;

        cards.forEach((card, i) => {
          if (i < activeIndex) {
            gsap.set(card, { yPercent: -250, rotationX: 35 });
          } else if (i === activeIndex) {
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(-50, -200, segProgress),
              rotationX: gsap.utils.interpolate(0, 35, segProgress),
              scale: 1,
            });
          } else {
            const behind = i - activeIndex;
            gsap.set(card, {
              yPercent: -50 + (behind - segProgress) * cardYOffset,
              rotationX: 0,
              scale: 1 - (behind - segProgress) * cardScaleStep,
            });
          }
        });
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className={styles.sticky}>
      {SERVICES.map((service) => (
        <div className={styles.card} key={service.id}>
          <div className={styles.colText}>
            <span className={styles.index}>{service.id}</span>

            <div>
              <h1>{service.title}</h1>
              <p className={styles.desc}>{service.desc}</p>
            </div>

            <ul className={styles.points}>
              {service.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <span className={styles.tech}>{service.tech}</span>
          </div>

          <div className={styles.colImg}>
            <img src={service.img} alt={service.title} />
          </div>
        </div>
      ))}
    </section>
  );
}