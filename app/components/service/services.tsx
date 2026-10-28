"use client";

import { motion } from "motion/react";
import Reveal from "../Reveal/Reveal";
import Headline from "../Headline/Headline";
import { SPRING } from "@/app/site";

const SERVICES = [
  {
    id: "01",
    title: "Brand Direction",
    desc: "A clear foundation — purpose, positioning and voice aligned so every decision feels intentional.",
    items: ["Brand positioning", "Research & insights", "Voice & tone", "Copy & naming", "Workshops"],
    span: "md:col-span-2",
    dark: true,
  },
  {
    id: "02",
    title: "Digital Design",
    desc: "Interfaces that balance beauty with usability, guided by systems and real needs.",
    items: ["Identity systems", "Wireframes", "UI / UX design", "Web & product", "Design systems"],
    span: "",
  },
  {
    id: "03",
    title: "Development",
    desc: "Fast, scalable front-ends where motion, interaction and structure work as one.",
    items: ["Frontend development", "Motion & animation", "SEO & performance", "CMS integration", "Databases & tooling"],
    span: "md:col-span-3",
  },
];

export default function Service() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-5 sm:px-8 py-24 md:py-32">
      <div className="max-w-2xl">
        <Reveal>
          <p className="type-eyebrow text-muted">Services</p>
        </Reveal>
        <Headline text="Designed with intent." className="mt-3 block" />
        <Headline text="Built to last." className="block text-faint" />
      </div>

      {/* Bento grid */}
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.08} className={s.span}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={SPRING}
              className={`flex h-full flex-col justify-between gap-10 rounded-[28px] p-8 sm:p-10 ${
                s.dark ? "bg-black text-[#f5f5f7]" : "bg-tile text-ink"
              }`}
            >
              <div>
                <span className={`font-saans text-[3.5rem] font-semibold leading-none tracking-[-0.04em] ${s.dark ? "text-white/25" : "text-black/15"}`}>
                  {s.id}
                </span>
                <h3 className="type-title mt-6">{s.title}</h3>
                <p className={`mt-3 max-w-md text-[1.0625rem] leading-relaxed ${s.dark ? "text-[#a1a1a6]" : "text-muted"}`}>
                  {s.desc}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium ${
                      s.dark ? "bg-white/10" : "bg-black/[0.05]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
