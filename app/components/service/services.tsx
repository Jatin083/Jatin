const SERVICES = [
  {
    id: "01",
    title: "Brand Direction",
    desc: "Shaping a clear brand foundation by aligning purpose, positioning, and voice — so every decision feels intentional.",
    items: ["Brand positioning", "Research & insights", "Voice & tone", "Copy & naming", "Workshops"],
  },
  {
    id: "02",
    title: "Digital Design",
    desc: "Designing interfaces that balance aesthetics with usability, guided by systems, structure, and real user needs.",
    items: ["Identity systems", "Wireframes", "UI / UX design", "Web & product design", "Design systems"],
  },
  {
    id: "03",
    title: "Development",
    desc: "Engineering performant, scalable products where motion, interaction, and structure work together seamlessly.",
    items: ["Frontend development", "Motion & animation", "SEO & performance", "CMS integration", "Databases & tooling"],
  },
];

export default function Service() {
  return (
    <section id="services" className="w-full px-4 sm:px-8 pt-28 pb-[22vh]">
      <div className="rounded-2xl bg-[#171717] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-white">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/50">
            Services
          </p>
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Designed with intent.
            <br />
            Built to last.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Every project begins with clarity and ends with execution. I work
            across design, development, and strategy to create digital
            experiences that feel considered, functional, and quietly confident.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3"
            >
              <div>
                <span className="text-xs text-white/40">{service.id}</span>
                <h3 className="mt-3 text-2xl">{service.title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-white/70">{service.desc}</p>

              <ul className="space-y-2 text-sm text-white/60">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
