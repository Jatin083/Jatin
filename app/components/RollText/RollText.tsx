import "./RollText.css";

// Hover/focus a parent with the `roll` class and each letter rolls up to an
// identical copy underneath, staggered left to right.
export default function RollText({ children }: { children: string }) {
  return (
    <span className="roll-text" aria-label={children}>
      {Array.from(children).map((ch, i) => (
        <span key={i} className="roll-char" aria-hidden style={{ transitionDelay: `${i * 18}ms` }}>
          <span>{ch === " " ? " " : ch}</span>
          <span>{ch === " " ? " " : ch}</span>
        </span>
      ))}
    </span>
  );
}
