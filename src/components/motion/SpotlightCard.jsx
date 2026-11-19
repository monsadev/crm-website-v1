'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';

// Card with a cursor-following glow and a subtle lift on hover.
export function SpotlightCard({ children, className, glow = 'rgba(25,76,255,0.14)', ...rest }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]',
        className
      )}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 60%)` }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
