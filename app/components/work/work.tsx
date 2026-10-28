"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";
import Reveal from "../Reveal/Reveal";
import { SPRING } from "@/app/site";

type Project = {
  name: string;
  type: string;
  year: string;
  blurb: string;
  cover: string;
  logo: string;
  video: string;
  tags: string[];
  dark?: boolean;
};

// Add, remove or reorder projects here.
const PROJECTS: Project[] = [
  {
    name: "Lumo Studio",
    type: "Web Agency",
    year: "2025",
    blurb: "An editorial agency site with scroll-driven storytelling.",
    cover: "/img/studio.jpg",
    logo: "/img/lumo.jpg",
    video: "/video/hero.mp4",
    tags: ["Next.js", "GSAP", "Tailwind", "Editorial UI"],
    dark: true,
  },
  {
    name: "Lumo Studio",
    type: "Web Agency",
    year: "2025",
    blurb: "Design system and motion language for the studio’s client work.",
    cover: "/img/studio.jpg",
    logo: "/img/lumo.jpg",
    video: "/video/hero.mp4",
    tags: ["React", "Design systems", "Motion"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const dark = project.dark;
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <motion.article
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.985 }}
        transition={SPRING}
        className={`group flex h-full flex-col overflow-hidden rounded-[28px] ${
          dark ? "bg-black text-[#f5f5f7]" : "bg-tile text-ink"
        }`}
      >
        {/* COPY */}
        <div className="px-8 pt-10 sm:px-10 sm:pt-12 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <img src={project.logo} alt="" className="h-6 w-6 rounded-full" />
            <span className={`type-eyebrow ${dark ? "text-[#a1a1a6]" : "text-muted"}`}>
              {project.type} · {project.year}
            </span>
          </div>
          <h3 className="type-title mt-3">{project.name}</h3>
          <p className={`mt-2 text-[1.0625rem] leading-snug ${dark ? "text-[#a1a1a6]" : "text-muted"}`}>
            {project.blurb}
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className={`rounded-full px-3 py-1 text-[0.75rem] font-medium ${
                  dark ? "bg-white/10 text-[#f5f5f7]" : "bg-black/[0.05] text-ink"
                }`}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* MEDIA: cover image, video reveals on hover from the centre */}
        <div className="relative mt-8 mx-6 mb-6 flex-1 min-h-[280px] overflow-hidden rounded-[20px]">
          <img
            className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-100"
            src={project.cover}
            alt={`${project.name} cover`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" />
          <div
            className="
              absolute left-1/2 top-1/2 h-[56%] w-[64%] -translate-x-1/2 -translate-y-1/2
              overflow-hidden rounded-xl
              [clip-path:inset(50%_50%_50%_50%_round_12px)]
              group-hover:[clip-path:inset(0_0_0_0_round_12px)]
              transition-[clip-path] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            "
          >
            <video
              src={project.video}
              aria-hidden="true"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-5 sm:px-8 py-24 md:py-32">
      <Reveal className="text-center">
        <p className="type-eyebrow text-muted">Selected work · ’25</p>
        <h2 className="type-headline mt-3">Things I’ve built.</h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 md:auto-rows-[minmax(640px,auto)]">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
