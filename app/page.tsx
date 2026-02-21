"use client";

import { useRef } from "react";
import Hero from "./components/Hero/hero";
import Work from "./components/work/work";
import Service from "./components/service/services";
import About from "./components/About/About";
export default function Page() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Hero  />
      <About />
      <Work />
      <Service />
    </>
  );
}
