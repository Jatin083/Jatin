const FACTS = [
  { label: "Based in", value: "India, working globally" },
  { label: "Building at", value: "Lumo Studio" },
  { label: "Freelance", value: "Available March 2026" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-5 sm:px-8 py-32 md:py-48">
      <p className="type-headline text-ink">
        I’m Jatin, a design engineer. I shape interfaces where structure, typography and motion
        come together — removing the unnecessary, refining the details, and building things that
        feel intentional and last.
      </p>

      <dl className="mt-20 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-3">
        {FACTS.map((f) => (
          <div key={f.label}>
            <dt className="text-[0.875rem] text-faint">{f.label}</dt>
            <dd className="mt-1.5 text-[1.3125rem] font-semibold tracking-[-0.015em] text-ink">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
