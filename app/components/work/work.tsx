"use client";
/* eslint-disable @next/next/no-img-element */
import Copy from "@/app/components/Copy/Copy";
import Marquee from "../Marquee/marquee";

type Project = {
  name: string;
  type: string;
  year: string;
  cover: string;
  logo: string;
  video: string;
  tags: string[];
};

// Add, remove or reorder projects here.
const PROJECTS: Project[] = [
  {
    name: "Lumo Studio",
    type: "Web Agency",
    year: "2025",
    cover: "/img/studio.jpg",
    logo: "/img/lumo.jpg",
    video: "/video/hero.mp4",
    tags: ["CT BUILDER,", "DESIGN ENGINEER,", "NEXT.JS,", "REACT,", "TAILWIND,", "GSAP,", "EDITORIAL UI,"],
  },
  {
    name: "Lumo Studio",
    type: "Web Agency",
    year: "2025",
    cover: "/img/studio.jpg",
    logo: "/img/lumo.jpg",
    video: "/video/hero.mp4",
    tags: ["CT BUILDER,", "DESIGN ENGINEER,", "NEXT.JS,", "REACT,", "TAILWIND,", "GSAP,", "EDITORIAL UI,"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="w-full md:w-1/2 h-[70vh] md:h-[90vh] rounded-2xl flex flex-col bg-[#171717] gap-4 p-4">
      {/* IMAGE / HOVER AREA */}
      <div className="group relative flex-1 min-h-0 w-full rounded-2xl overflow-hidden">
        <img
          className="h-full w-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"
          src={project.cover}
          alt={`${project.name} cover`}
          loading="lazy"
        />

        {/* BLUR OVERLAY */}
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />

        {/* CENTER CLIP DIV WITH VIDEO */}
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-[8%]
            w-[60%] h-[50%]
            rounded-lg overflow-hidden z-20
            [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)]
            group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]
            group-hover:-translate-y-1/2
            transition-all duration-700
            ease-[cubic-bezier(0.87,0,0.13,1)]
          "
        >
          <video
            src={project.video}
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* META */}
      <div className="w-full text-white">
        <div className="flex justify-between items-center p-2 gap-4 text-base sm:text-xl font-semibold">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <img src={project.logo} alt="" className="h-8 w-8 rounded-full shrink-0" />
            <h3 className="truncate">{project.name}</h3>
          </div>
          <div className="flex gap-4 shrink-0">
            <span>{project.type}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <div className="px-2 sm:px-4">
          <Marquee items={project.tags} speed="slow" className="uppercase text-sm" />
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-4 sm:px-8 min-h-screen">
      {/* Heading */}
      <div className="w-full pt-[20vh] text-[11.5vw] flex justify-between uppercase font-bold">
        <Copy delay={0.2}>
          <h2 className="font-saans leading-none tracking-tight">Work</h2>
        </Copy>
        <Copy delay={0.2}>
          <span className="font-saans leading-none tracking-tight">&apos;25</span>
        </Copy>
      </div>

      {/* Content */}
      <div className="mt-3 w-full flex flex-col md:flex-row gap-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
