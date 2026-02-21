"use client";
import Copy from "@/app/components/Copy/Copy";
import Marquee from "../Marquee/marquee";

export default function Work() {
  return (
    <main className="px-8 min-h-screen ">
      {/* Top spacing */}
      <div className="w-full pt-[20vh] text-[11.5vw]  flex flex-row justify-between items-center uppercase text-md font-bold tracking-wide">
        <Copy delay={0.2}>

          <h1 className="font-saans  leading-none tracking-tight overflow-hidden">
            Work
          </h1>
        </Copy>
        <Copy delay={0.2}>

          <h1 className="font-saans  leading-none tracking-tight overflow-hidden">
            '25
          </h1>
        </Copy>
      </div>

      {/* Content */}
      <section className="mt-3 w-full">
        <div className="h-[90vh] flex flex-row gap-4">
          {/* P1 */}
          <div className="w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 items-center p-4">
            <div className="h-[85%] w-full rounded-2xl bg-pink-400"></div>
            <div className="  h-[15%]  w-full rounded-2xl text-white">
              <div className=" w-full flex flex-row justify-between items-center p-2">
                <div className="   flex flex-row items-center justify-center gap-4 text-xl font-semibold">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img src="/img/lumo.jpg" alt="" />
                  </div>
                  <h1 className="">Lumo Studio</h1></div>
                <div className="flex flex-row items-center justify-center gap-4 text-xl font-semibold">
                  <h1 className="">Web Agency </h1>
                  <h1>2025</h1>
                </div>
              </div>
              <div className="px-4">
                <Marquee
                  items={[
                    'CT BUILDER,',
                    'DESIGN ENGINEER,',
                    'NEXT.JS,',
                    'REACT,',
                    'TAILWIND,',
                    'GSAP,',
                    'FRAMER MOTION,',
                    'THREE.JS,',
                    'WEB ANIMATIONS,',
                    'INTERACTION DESIGN,',
                    'UI / UX,',
                    'EDITORIAL LAYOUTS,',
                    'MICRO INTERACTIONS,',
                    'PERFORMANCE FIRST,',
                    'ACCESSIBILITY,',
                    'SCROLL SYSTEMS,',
                    'CREATIVE DEV,',
                    'FRONTEND ARCHITECT,',
                  ]}

                  repeat={1}
                  speed="slow"
                  className="uppercase"
                />
              </div>
            </div>
          </div>
          {/* P2 */}
          <div className="w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 items-center p-4">
            <div className="h-[85%] w-full rounded-2xl bg-pink-400"></div>
            <div className="  h-[15%]  w-full rounded-2xl text-white">
              <div className=" w-full flex flex-row justify-between items-center p-2">
                <div className="   flex flex-row items-center justify-center gap-4 text-xl font-semibold">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img src="/img/lumo.jpg" alt="" />
                  </div>
                  <h1 className="">Lumo Studio</h1></div>
                <div className="flex flex-row items-center justify-center gap-4 text-xl font-semibold">
                  <h1 className="">Web Agency </h1>
                  <h1>2025</h1>
                </div>
              </div>
              <div className="px-4">
                <Marquee
                  items={[
                    'CT BUILDER,',
                    'DESIGN ENGINEER,',
                    'NEXT.JS,',
                    'REACT,',
                    'TAILWIND,',
                    'GSAP,',
                    'FRAMER MOTION,',
                    'THREE.JS,',
                    'WEB ANIMATIONS,',
                    'INTERACTION DESIGN,',
                    'UI / UX,',
                    'EDITORIAL LAYOUTS,',
                    'MICRO INTERACTIONS,',
                    'PERFORMANCE FIRST,',
                    'ACCESSIBILITY,',
                    'SCROLL SYSTEMS,',
                    'CREATIVE DEV,',
                    'FRONTEND ARCHITECT,',
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
