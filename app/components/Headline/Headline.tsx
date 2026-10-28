"use client";

import SplitText from "../reactbits/SplitText/SplitText";

// Section headline: words rise out of a mask as it scrolls into view
// (React Bits SplitText, driven by GSAP ScrollTrigger + Lenis).
export default function Headline({
  text,
  className = "",
  align = "left",
}: {
  text: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <SplitText
      text={text}
      tag="h2"
      splitType="words"
      mask
      delay={70}
      duration={1}
      ease="power4.out"
      textAlign={align}
      rootMargin="-80px"
      className={`type-headline ${className}`}
    />
  );
}
