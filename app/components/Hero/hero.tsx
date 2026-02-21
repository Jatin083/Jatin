"use client";

import { useEffect, useRef } from "react";
import Copy from "@/app/components/Copy/Copy";

/* ===== CONFIG ===== */
const FINISH_AT = 0.75;
const MD_BREAKPOINT = 768;

export default function Hero() {
  const mainRef = useRef<HTMLDivElement>(null);
  const relativeRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  const targetX = useRef(0);
  const currentX = useRef(0);

  /* ===== RESPONSIVE SIZE ===== */
  const getResponsiveSizes = () => {
    const w = window.innerWidth;

    if (w < 1024) {
      return { sw: 46, sh: 34, ew: 100, eh: 75 }; // md
    }

    return { sw: 32, sh: 44, ew: 100, eh: 100 }; // lg
  };

  useEffect(() => {
    // ❌ MOBILE → NO ANIMATION, NO LISTENERS
    if (window.innerWidth < MD_BREAKPOINT) {
      return;
    }

    let rafId: number;

    /* ===== MOUSE ===== */
    const handleMouseMove = (e: MouseEvent) => {
      if (!relativeRef.current || !floatRef.current) return;

      const rect = relativeRef.current.getBoundingClientRect();
      const boxRect = floatRef.current.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const center = rect.width / 2;

      const nextX = mouseX - center;
      const maxX = rect.width / 2 - boxRect.width / 2;

      targetX.current = Math.max(-maxX, Math.min(nextX, maxX));
    };

    /* ===== RAF ===== */
    const animate = () => {
      if (!mainRef.current || !floatRef.current) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const rect = mainRef.current.getBoundingClientRect();
      const visible = Math.min(Math.max(-rect.top, 0), rect.height);
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(visible, total);

      const raw = total > 0 ? scrolled / total : 0;
      const progress = Math.min(raw / FINISH_AT, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const { sw, sh, ew, eh } = getResponsiveSizes();

      const width = sw + (ew - sw) * eased;
      const height = sh + (eh - sh) * eased;

      const MAX_Y = Math.min(window.innerHeight * 0.85, 520);
      const y = eased * MAX_Y;

      currentX.current += (targetX.current - currentX.current) * 0.08;
      const blendedX = currentX.current * (1 - progress);

      floatRef.current.style.width = `${width}vw`;
      floatRef.current.style.height = `${height}vh`;
      floatRef.current.style.transform = `
        translateX(-50%)
        translateX(${blendedX}px)
        translateY(${y}px)
      `;

      rafId = requestAnimationFrame(animate);
    };

    relativeRef.current?.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      relativeRef.current?.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section>
      <div ref={mainRef} className="h-[200vh] px-4 sm:px-8">
        <div ref={relativeRef} className="relative h-full w-full">
          {/* ===== VIDEO ===== */}
          <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
            <div
              ref={floatRef}
              className="
                bg-orange-600
                rounded-xl
                overflow-hidden
                will-change-transform

                /* md & lg only floating */
                hidden md:block
                absolute top-[15vh] left-1/2
              "
            >
              <video
                src="./video/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ===== MOBILE STATIC VIDEO ===== */}
          <div className="block md:hidden w-full mt-[30vh] px-2">
            <div className="w-full h-[45vh] bg-orange-600 rounded-xl overflow-hidden">
              <video
                src="./video/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ===== HERO ===== */}
          <div className="h-screen w-full relative z-10">
            <div className="w-full pt-[clamp(14rem,40vh,28rem)] flex justify-between uppercase text-sm sm:text-md font-semibold tracking-wide">
              <Copy delay={0.1}><span>A</span></Copy>
              <Copy delay={0.2}><span>Seriously</span></Copy>
              <Copy delay={0.3}><span>Good</span></Copy>
            </div>

            <div className="w-full flex justify-between uppercase font-saans font-bold tracking-tighter leading-none text-[clamp(3rem,11.5vw,11rem)]">
              <Copy delay={0.4}><span>Design</span></Copy>
              <Copy delay={0.5}><span>Engineer</span></Copy>
            </div>

            <div className="w-full flex justify-between mt-12 p-2 font-saans text-base sm:text-lg">
              <Copy delay={0.6}><span>Scroll for</span></Copy>
              <Copy delay={0.7}><span>Cool Sh*t</span></Copy>
            </div>
          </div>

          {/* NEXT SECTION */}
          <div className="h-screen w-full rounded-lg overflow-hidden" />
        </div>
      </div>
    </section>
  );
}
