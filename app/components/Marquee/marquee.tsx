'use client';
import './marquee.css';

type MarqueeProps = {
  items: string[];
  repeat?: number;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
};

export default function Marquee({
  items,
  repeat = 2,
  speed = 'normal',
  className = '',
}: MarqueeProps) {
  const speedClass =
    speed === 'slow'
      ? 'marquee-slow'
      : speed === 'fast'
      ? 'marquee-fast'
      : 'marquee-normal';

  return (
    <div className={`marquee ${className}`}>
      <div className={`marquee-track ${speedClass}`}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="marquee-group">
            {items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
