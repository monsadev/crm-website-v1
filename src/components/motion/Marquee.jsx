import { cn } from '@/lib/utils';

// CSS driven infinite marquee. Pauses on hover. Children are duplicated for a seamless loop.
export function Marquee({ children, className, reverse = false, duration = 40, gap = '1rem', pauseOnHover = true }) {
  return (
    <div
      className={cn('group flex overflow-hidden', className)}
      style={{ '--marquee-duration': `${duration}s`, '--marquee-gap': gap }}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            'flex shrink-0 items-center',
            reverse ? 'animate-marquee-reverse' : 'animate-marquee',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{ gap, paddingRight: gap }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
