import './marquee.css';

type MarqueeProps = {
  items: string[];
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
};

export default function Marquee({
  items,
  speed = 'normal',
  className = '',
}: MarqueeProps) {
  const speedClass =
    speed === 'slow'
      ? 'marquee-slow'
      : speed === 'fast'
      ? 'marquee-fast'
      : 'marquee-normal';

  // The track scrolls by -50%, so it always holds exactly two copies of the
  // items. Fewer copies makes the loop visibly jump back to the start.
  return (
    <div className={`marquee ${className}`}>
      <div className={`marquee-track ${speedClass}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-group" aria-hidden={copy === 1}>
            {items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
