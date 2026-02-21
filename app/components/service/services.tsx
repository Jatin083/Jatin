"use client";

export default function Service() {
  return (
    <section className="w-full px-8 py-28">
      <div className="rounded-2xl bg-[#171717] px-16 py-20 text-white">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/50">
            Services
          </p>
          <h2 className="mb-6 text-5xl leading-tight">
            Designed with intent.
            <br />
            Built to last.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Every project begins with clarity and ends with execution.
            I work across design, development, and strategy to create
            digital experiences that feel considered, functional, and
            quietly confident.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {/* 01 */}
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <span className="text-xs text-white/40">01</span>
              <h3 className="mt-3 text-2xl">Brand Direction</h3>
            </div>

            <p className="text-sm leading-relaxed text-white/70 md:col-span-1">
              Shaping a clear brand foundation by aligning purpose,
              positioning, and voice — so every decision feels intentional.
            </p>

            <ul className="space-y-2 text-sm text-white/60">
              <li>Brand positioning</li>
              <li>Research & insights</li>
              <li>Voice & tone</li>
              <li>Copy & naming</li>
              <li>Workshops</li>
            </ul>
          </div>

          {/* 02 */}
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <span className="text-xs text-white/40">02</span>
              <h3 className="mt-3 text-2xl">Digital Design</h3>
            </div>

            <p className="text-sm leading-relaxed text-white/70">
              Designing interfaces that balance aesthetics with usability,
              guided by systems, structure, and real user needs.
            </p>

            <ul className="space-y-2 text-sm text-white/60">
              <li>Identity systems</li>
              <li>Wireframes</li>
              <li>UI / UX design</li>
              <li>Web & product design</li>
              <li>Design systems</li>
            </ul>
          </div>

          {/* 03 */}
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <span className="text-xs text-white/40">03</span>
              <h3 className="mt-3 text-2xl">Development</h3>
            </div>

            <p className="text-sm leading-relaxed text-white/70">
              Engineering performant, scalable products where motion,
              interaction, and structure work together seamlessly.
            </p>

            <ul className="space-y-2 text-sm text-white/60">
              <li>Frontend development</li>
              <li>Motion & animation</li>
              <li>SEO & performance</li>
              <li>CMS integration</li>
              <li>Databases & tooling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}