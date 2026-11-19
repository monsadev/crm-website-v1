import { cn } from '@/lib/utils';

const palette = {
  brand: '25 76 255',
  sky: '125 211 252',
  violet: '167 139 250',
  'violet-dark': '139 92 246',
  'violet-light': '196 181 253',
};

// Decorative ambient glow. Painted as a radial gradient (no blur filter) and animated
// with CSS keyframes only, so it costs nothing while the page scrolls.
export function Glow({ className, color = 'brand', alpha = 0.25, motion = 'none', dur, dx, dy, delay }) {
  return (
    <div
      aria-hidden="true"
      className={cn('glow-blob', motion === 'drift' && 'anim-drift', motion === 'breathe' && 'anim-breathe', className)}
      style={{
        '--glow-rgb': palette[color] || palette.brand,
        '--glow-a': alpha,
        ...(dur ? { '--dur': `${dur}s` } : {}),
        ...(dx !== undefined ? { '--dx': `${dx}px` } : {}),
        ...(dy !== undefined ? { '--dy': `${dy}px` } : {}),
        ...(delay ? { '--delay': `${delay}s` } : {}),
      }}
    />
  );
}
