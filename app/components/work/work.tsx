"use client";
import Image from "next/image";
import { useRef } from "react";
import LineReveal from "../LineReveal/LineReveal";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import github from "react-useanimations/lib/github";
import explore from "react-useanimations/lib/explore";
import { SITE } from "@/app/site";

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

// Original hover: image eases from 110% to 105%, a blurred scrim fades in,
// and the video opens out of a thin centre line. The video only loads and
// plays while the cover is hovered.
const EASE = "ease-[cubic-bezier(0.87,0,0.13,1)]";

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.preload === "none") v.preload = "auto";
    // Wait until the clip window has started to open: Chrome pauses muted
    // video that starts playing while it is fully clipped away.
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => v.play().catch(() => {}), 150);
  };
  const pause = () => {
    window.clearTimeout(timer.current);
    videoRef.current?.pause();
  };

  return (
      <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-tile">
        {/* COVER */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live site`}
          onMouseEnter={play}
          onMouseLeave={pause}
          onFocus={play}
          onBlur={pause}
          className="group relative m-3 mb-0 block aspect-[16/10] overflow-hidden rounded-[20px] bg-black"
        >
          <Image
            src={project.cover}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 1200px) 580px, (min-width: 768px) 48vw, 92vw"
            className={`object-cover scale-110 group-hover:scale-105 group-focus-visible:scale-105 transition-transform duration-700 ${EASE}`}
          />

          {/* BLUR OVERLAY */}
          <div className="absolute inset-0 z-10 bg-neutral-900/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 ease-in-out" />

          {/* CENTER CLIP WITH VIDEO */}
          <div
            className={`
              absolute top-1/2 left-1/2 z-20 h-[50%] w-[60%]
              -translate-x-1/2 -translate-y-[8%]
              overflow-hidden rounded-lg
              [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)]
              group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]
              group-hover:-translate-y-1/2
              group-focus-visible:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]
              group-focus-visible:-translate-y-1/2
              transition-all duration-700 ${EASE}
            `}
          >
            <video
              ref={videoRef}
              src="/video/hero.mp4"
              aria-hidden="true"
              preload="none"
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </a>

        {/* COPY */}
        <div className="flex flex-1 flex-col gap-4 p-7 sm:p-8">
          <div>
            <p className="flex gap-3 text-[0.875rem] text-muted">
              <span>{project.kind}</span>
              <span>{project.year}</span>
            </p>
            <h3 className="type-title mt-1.5 text-ink">{project.name}</h3>
            <p className="mt-2 text-[1.0625rem] leading-snug text-muted">{project.blurb}</p>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="chip rounded-full bg-black/[0.05] hover:bg-black/[0.08] px-3 py-1 text-[0.75rem] font-medium text-ink">
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-[0.9375rem]">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-link inline-flex items-center gap-1.5">
                <AnimatedIcon icon={explore} size={18} />
                Live
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-link inline-flex items-center gap-1.5">
                <AnimatedIcon icon={github} size={18} />
                Code
              </a>
            </div>
          </div>
        </div>
      </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-5 sm:px-8 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <LineReveal as="h2" className="type-headline">
          Things I’ve built.
        </LineReveal>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn-link inline-flex items-center gap-2 text-[1.0625rem]">
          <AnimatedIcon icon={github} size={22} />
          All projects on GitHub <span aria-hidden className="chev">›</span>
        </a>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </div>
    </section>
  );
}
