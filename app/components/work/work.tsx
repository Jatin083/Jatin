"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";
import Reveal from "../Reveal/Reveal";
import Headline from "../Headline/Headline";
import { SITE, SPRING } from "@/app/site";

type Project = {
  name: string;
  kind: string;
  year: string;
  blurb: string;
  cover: string;
  live: string;
  repo: string;
  tags: string[];
};

// Add, remove or reorder projects here. Covers live in public/img/work.
const PROJECTS: Project[] = [
  {
    name: "The Planets",
    kind: "WebGL",
    year: "2024",
    blurb: "The solar system, brought to life in the browser with Three.js.",
    cover: "/img/work/planets.jpg",
    live: "https://the-planets-xejm.vercel.app",
    repo: "https://github.com/Jatin083/The-Planets",
    tags: ["Three.js", "JavaScript"],
  },
  {
    name: "Cylindrical Showcase",
    kind: "3D gallery",
    year: "2024",
    blurb: "A rotating 3D cylinder that turns a project list into an object.",
    cover: "/img/work/cylinder.jpg",
    live: "https://cylinderical-work-showcase.vercel.app",
    repo: "https://github.com/Jatin083/CylindericalWorkShowcase",
    tags: ["WebGL", "JavaScript"],
  },
  {
    name: "3D Project Showcase",
    kind: "Experiment",
    year: "2025",
    blurb: "Curved, scroll-driven image planes with type laid over the top.",
    cover: "/img/work/showcase-3d.jpg",
    live: "https://3d-project-showcase.vercel.app",
    repo: "https://github.com/Jatin083/3d_project_showcase",
    tags: ["WebGL", "Scroll"],
  },
  {
    name: "Lenis Landing",
    kind: "Landing page",
    year: "2024",
    blurb: "A fashion landing page with smooth scroll and drifting imagery.",
    cover: "/img/work/lenis.jpg",
    live: "https://lenis-landing-page.vercel.app",
    repo: "https://github.com/Jatin083/Lenis-landing-page",
    tags: ["Lenis", "HTML", "CSS"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1} className="h-full">
      <motion.article
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.985 }}
        transition={SPRING}
        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-tile"
      >
        {/* COVER */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live site`}
          className="relative m-3 mb-0 block aspect-[16/10] overflow-hidden rounded-[20px] bg-black"
        >
          <img
            src={project.cover}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]"
          />
          <span className="glass-dark absolute right-3 top-3 rounded-full px-3 py-1 text-[0.75rem] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Visit site ↗
          </span>
        </a>

        {/* COPY */}
        <div className="flex flex-1 flex-col gap-4 p-7 sm:p-8">
          <div>
            <p className="type-eyebrow text-muted">
              {project.kind} · {project.year}
            </p>
            <h3 className="type-title mt-1.5 text-ink">{project.name}</h3>
            <p className="mt-2 text-[1.0625rem] leading-snug text-muted">{project.blurb}</p>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-full bg-black/[0.05] px-3 py-1 text-[0.75rem] font-medium text-ink">
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-[0.9375rem]">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-link">
                Live <span aria-hidden>›</span>
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-link">
                Code <span aria-hidden>›</span>
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-5 sm:px-8 py-24 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="type-eyebrow text-muted">Selected work</p>
          <Headline text="Things I’ve built." className="mt-3 block" />
        </div>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn-link text-[1.0625rem]">
          All projects on GitHub <span aria-hidden>›</span>
        </a>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.repo} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
