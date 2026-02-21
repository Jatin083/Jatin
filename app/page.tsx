"use client";

import { useRef } from "react";
import Hero from "./components/Hero/hero";
import Work from "./components/work/work";
import Service from "./components/service/services";

export default function Page() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Hero  />
      <Work />
      <Service />
    </>
  );
}
