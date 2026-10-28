"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiThreedotjs,
  SiNodedotjs,
  SiVercel,
  SiFigma,
  SiGit,
} from "react-icons/si";
import LogoLoop, { type LogoItem } from "../reactbits/LogoLoop/LogoLoop";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Edit the stack here. `node` is any icon; `title` shows on hover.
const STACK: LogoItem[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGreensock />, title: "GSAP", href: "https://gsap.com" },
  { node: <SiFramer />, title: "Motion", href: "https://motion.dev" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
];

const LINES = ["Modern", "Tech Stack"];

function Cell({ item }: { item: LogoItem }) {
  const title = "title" in item ? item.title : "";
  const icon = "node" in item ? item.node : null;
  // LogoLoop wraps items that have an href in its own link.
  return (
    <span className="group/cell flex h-28 w-36 sm:h-32 sm:w-44 flex-col items-center justify-center gap-2 border-r border-hairline transition-colors duration-300 hover:bg-tile">
      <span className="text-[2.75rem] text-ink/75 transition-[color,transform] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/cell:-translate-y-1 group-hover/cell:text-ink">
        {icon}
      </span>
      <span className="text-[0.75rem] font-medium text-muted opacity-0 transition-opacity duration-300 group-hover/cell:opacity-100">
        {title}
      </span>
    </span>
  );
}

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);

  // Each letter rises out of its own mask, tied to scroll position, rippling
  // out from the middle of each line. Reduced motion: letters are just there.
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray<HTMLElement>(".ts-line").forEach((line) => {
        gsap.fromTo(
          line.querySelectorAll(".ts-char"),
          { yPercent: 110 },
          {
            yPercent: 0,
            ease: "power3.out",
            stagger: { each: 0.04, from: "center" },
            scrollTrigger: { trigger: line, start: "top 92%", end: "top 45%", scrub: 0.6 },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id="stack" aria-label="Tech stack" className="py-24 md:py-32">
      <h2
        aria-label={LINES.join(" ")}
        className="px-5 text-center font-saans font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-ink text-[clamp(2.5rem,12vw,13rem)]"
      >
        {LINES.map((line) => (
          <span key={line} className="ts-line flex justify-center" aria-hidden>
            {Array.from(line).map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.04em]">
                <span className="ts-char inline-block will-change-transform">
                  {ch === " " ? " " : ch}
                </span>
              </span>
            ))}
          </span>
        ))}
      </h2>

      <div className="mx-auto mt-16 md:mt-24 flex max-w-[1200px] items-end justify-between px-5 sm:px-8">
        <p className="type-eyebrow uppercase tracking-[0.08em] text-ink">Daily drivers</p>
        <p className="type-eyebrow text-muted">{STACK.length} tools · always learning</p>
      </div>

      <div className="mt-4 border-y border-hairline">
        <LogoLoop
          logos={STACK}
          speed={45}
          gap={0}
          logoHeight={128}
          pauseOnHover
          fadeOut
          fadeOutColor="#fbfbfd"
          ariaLabel="Tools I build with"
          renderItem={(item) => <Cell item={item} />}
        />
      </div>
    </section>
  );
}
