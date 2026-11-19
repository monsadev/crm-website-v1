'use client';

import { Counter } from '@/components/motion/Counter';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { stats } from '@/data/product';

export function StatsBand() {
  return (
    <section className="relative px-5 sm:px-8">
      <Stagger className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StaggerItem
            key={s.label}
            className="group relative border-b border-slate-100 p-8 transition-colors duration-500 hover:bg-slate-50 sm:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-violet-500 transition-transform duration-700 group-hover:scale-x-100" />
            <p className="font-display text-5xl font-semibold tracking-tight text-ink-2 sm:text-6xl">
              <span className="text-gradient">
                <Counter to={s.value} suffix={s.suffix} duration={1.6 + i * 0.2} />
              </span>
            </p>
            <p className="mt-3 text-[15px] font-semibold text-ink-2">{s.label}</p>
            <p className="mt-1 text-sm text-slate-500">{s.hint}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
