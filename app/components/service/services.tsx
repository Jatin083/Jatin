import LineReveal from "../LineReveal/LineReveal";

const SERVICES = [
  {
    title: "Brand direction",
    desc: "A clear foundation — purpose, positioning and voice aligned so every decision feels intentional.",
    items: ["Brand positioning", "Research & insights", "Voice & tone", "Copy & naming", "Workshops"],
    span: "md:col-span-2",
    dark: true,
  },
  {
    title: "Digital design",
    desc: "Interfaces that balance beauty with usability, guided by systems and real needs.",
    items: ["Identity systems", "Wireframes", "UI / UX design", "Web & product", "Design systems"],
    span: "",
  },
  {
    title: "Development",
    desc: "Fast, scalable front-ends where motion, interaction and structure work as one.",
    items: ["Frontend development", "Motion & animation", "SEO & performance", "CMS integration", "Databases & tooling"],
    span: "md:col-span-3",
  },
];

export default function Service() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-5 sm:px-8 py-24 md:py-32">
      <LineReveal as="h2" className="type-headline max-w-2xl">
        Designed with intent. Built to last.
      </LineReveal>

      {/* Bento grid */}
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className={`flex h-full flex-col justify-between gap-10 rounded-[28px] p-8 sm:p-10 ${s.span} ${
              s.dark ? "bg-black text-[#f5f5f7]" : "bg-tile text-ink"
            }`}
          >
            <div>
              <h3 className="type-title">{s.title}</h3>
              <p className={`mt-3 max-w-md text-[1.0625rem] leading-relaxed ${s.dark ? "text-[#a1a1a6]" : "text-muted"}`}>
                {s.desc}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className={`chip rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium ${
                    s.dark ? "bg-white/10" : "bg-black/[0.05]"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
