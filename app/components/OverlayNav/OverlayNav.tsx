'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OverlayNav.css';
import Marquee from '../Marquee/marquee';

gsap.registerPlugin(ScrollTrigger);

export default function OverlayNav() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  /* ===== INITIAL STATE ===== */
  useEffect(() => {
    if (!boxRef.current) return;

    gsap.set(boxRef.current, {
      height: '14vh',
      borderRadius: '32px',
    });
  }, []);

  /* ===== SCROLL: ONLY MICRO POLISH (NO OPEN) ===== */
  useEffect(() => {
    if (!boxRef.current) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: '+=300',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(boxRef.current, {
          borderRadius: gsap.utils.interpolate(32, 24, self.progress) + 'px',
          ease: 'none',
          overwrite: 'auto',
        });
      },
    });
  }, []);

  /* ===== CLICK OPEN / CLOSE ===== */
  useEffect(() => {
    if (!boxRef.current) return;

    gsap.to(boxRef.current, {
      height: open ? '44vh' : '14vh',
      borderRadius: open ? '20px' : '32px',
      duration: 0.6,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });
  }, [open]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-999">
      {/* MAIN BOX */}
      <div
        ref={boxRef}
        className="relative w-[43vw] bg-black text-white overflow-hidden"
      >
        {/* MENU CONTENT (ONLY VISIBLE WHEN OPEN) */}
        <div
          className={`absolute top-0 left-0 w-full px-6 pt-6 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="space-y-3">
            <div className="menu-item">Home</div>
            <div className="menu-item">Work</div>
            <div className="menu-item">Lab</div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="absolute bottom-0 left-0 h-[14vh] w-full px-4 py-2 flex items-center justify-between bg-black">
          {/* LEFT */}
          <div className="h-full flex items-center gap-5 px-4 flex-1 min-w-0">
            {/* AVATAR */}
            <div className="h-[10vh] w-[10vh] rounded-xl overflow-hidden bg-orange-500 shrink-0">
              <img
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Jatin"
                className="h-full w-full object-cover"
                alt="avatar"
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center gap-1 text-lg min-w-0">
              <h1 className="font-semibold uppercase leading-none">
                Jatin Singh
              </h1>

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

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="h-[10vh] w-[10vh] text-[28px] rounded-2xl flex items-center justify-center font-semibold shrink-0"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </div>
  );
}
