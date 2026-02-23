"use client";
import Copy from "@/app/components/Copy/Copy";
import Marquee from "../Marquee/marquee";

export default function Work() {
  return (
    <main className="px-8 min-h-screen">
      {/* Heading */}
      <div className="w-full pt-[20vh] text-[11.5vw] flex justify-between uppercase font-bold">
        <Copy delay={0.2}>
          <h1 className="font-saans leading-none tracking-tight">Work</h1>
        </Copy>
        <Copy delay={0.2}>
          <h1 className="font-saans leading-none tracking-tight">'25</h1>
        </Copy>
      </div>

      {/* Content */}
      <section className="mt-3 w-full">
        <div className="h-[90vh] flex gap-4">
          {/* CARD */}
          <div className="w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 p-4">

            {/* IMAGE / HOVER AREA */}
            <div className="group relative h-[85%] w-full rounded-2xl overflow-hidden">

              <img className="h-full w-full object-cover scale-110  group-hover:scale-105 transition-transform duration-700
    ease-[cubic-bezier(0.87,0,0.13,1)]" src="https://www.itsjay.us/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1744731036457-b74958fd6bf5%3Fq%3D80%26w%3D3087%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1920&q=75" alt="" />

              {/* ORANGE BASE (transparent feel) */}
              <div className="absolute inset-0 " />

              {/* BLUR OVERLAY */}
              <div
                className="
                    absolute inset-0 bg-neutral-900/30 backdrop-blur-sm
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 ease-in-out
                    z-10
                  "
              />

              {/* CENTER CLIP DIV */}
              {/* CENTER CLIP DIV WITH VIDEO */}
              <div
                className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-[8%]
    w-[60%]
    h-[50%]
    rounded-lg overflow-hidden z-20

    [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)]
    group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]
    group-hover:-translate-y-1/2

    transition-all duration-700
    ease-[cubic-bezier(0.87,0,0.13,1)]
  "
              >
                <video
                  src="/video/Apple.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>

            </div>

            {/* META */}
            <div className="h-[15%] w-full text-white">
              <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-4 text-xl font-semibold">
                  <img src="/img/lumo.jpg" className="h-8 w-8 rounded-full" />
                  <h1>Lumo Studio</h1>
                </div>
                <div className="flex gap-4 text-xl font-semibold">
                  <h1>Web Agency</h1>
                  <h1>2025</h1>
                </div>
              </div>

              <div className="px-4">
                <Marquee
                  items={[
                    "CT BUILDER,",
                    "DESIGN ENGINEER,",
                    "NEXT.JS,",
                    "REACT,",
                    "TAILWIND,",
                    "GSAP,",
                    "EDITORIAL UI,",
                  ]}
                  repeat={1}
                  speed="slow"
                  className="uppercase"
                />
              </div>
            </div>
          </div>


          <div className="w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 p-4">

            {/* IMAGE / HOVER AREA */}
            <div className="group relative h-[85%] w-full rounded-2xl overflow-hidden">

              <img className="h-full w-full object-cover scale-110  group-hover:scale-105 transition-transform duration-700
    ease-[cubic-bezier(0.87,0,0.13,1)]" src="https://www.itsjay.us/_next/image?url=%2Fimages%2Fwork%2Ftrackstack%2Fcover.jpg&w=1920&q=75" alt="" />

              {/* ORANGE BASE (transparent feel) */}
              <div className="absolute inset-0 " />

              {/* BLUR OVERLAY */}
              <div
                className="
                    absolute inset-0 bg-neutral-900/30 backdrop-blur-sm
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 ease-in-out
                    z-10
                  "
              />

              {/* CENTER CLIP DIV */}
              {/* CENTER CLIP DIV WITH VIDEO */}
              <div
                className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-[8%]
    w-[60%]
    h-[50%]
    rounded-lg overflow-hidden z-20

    [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)]
    group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]
    group-hover:-translate-y-1/2

    transition-all duration-700
    ease-[cubic-bezier(0.87,0,0.13,1)]
  "
              >
                <video
                  src="/video/Apple.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>

            </div>

            {/* META */}
            <div className="h-[15%] w-full text-white">
              <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-4 text-xl font-semibold">
                  <img src="/img/lumo.jpg" className="h-8 w-8 rounded-full" />
                  <h1>Lumo Studio</h1>
                </div>
                <div className="flex gap-4 text-xl font-semibold">
                  <h1>Web Agency</h1>
                  <h1>2025</h1>
                </div>
              </div>

              <div className="px-4">
                <Marquee
                  items={[
                    "CT BUILDER,",
                    "DESIGN ENGINEER,",
                    "NEXT.JS,",
                    "REACT,",
                    "TAILWIND,",
                    "GSAP,",
                    "EDITORIAL UI,",
                  ]}
                  repeat={1}
                  speed="slow"
                  className="uppercase"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}