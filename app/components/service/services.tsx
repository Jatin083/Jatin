"use client";

export default function Service() {
  const services = [
    {
      title: "Design Engineering",
      desc: "High-fidelity UI with real front-end logic. Not just visuals, but production-ready systems.",
      tag: "UI · UX · Frontend",
    },
    {
      title: "Creative Development",
      desc: "Interactive, motion-driven websites built with Next.js, Tailwind and modern web APIs.",
      tag: "Next.js · Motion · WebGL",
    },
    {
      title: "Product Strategy",
      desc: "From idea to launch. I help founders shape products that feel intentional and usable.",
      tag: "MVP · SaaS · Systems",
    },
  ];

  return (
    <section className="min-h-screen px-8 py-32">
      {/* Header */}
      <div className="mb-24">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-4">
          Services
        </p>
        <h2 className="text-[6vw] leading-none font-saans font-bold tracking-tight">
          What I
          <br />
          Actually Do
        </h2>
      </div>

      {/* Services List */}
      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-white/10 pt-10"
          >
            {/* Index */}
            <div className="md:col-span-1 text-gray-500 text-sm">
              0{index + 1}
            </div>

            {/* Title */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <div className="md:col-span-5 text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </div>

            {/* Tag */}
            <div className="md:col-span-2 text-xs uppercase tracking-widest text-gray-500">
              {service.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
