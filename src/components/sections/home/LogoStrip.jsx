'use client';

import { Icon } from '@/components/Icon';
import { Marquee } from '@/components/motion/Marquee';
import { Reveal } from '@/components/motion/Reveal';
import { integrations } from '@/data/product';

export function LogoStrip() {
  return (
    <section aria-label="Integrations" className="relative py-14">
      <Reveal className="mx-auto mb-8 max-w-7xl px-5 text-center sm:px-8">
        <p className="text-[13px] font-medium tracking-[0.18em] text-slate-400 uppercase">Works with the tools your teams already use</p>
      </Reveal>
      <Marquee className="mask-fade-x" duration={45} gap="1rem">
        {[...integrations, ...integrations].map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Icon name={item.icon} className="size-[18px]" />
            </span>
            <span className="font-display text-[15px] font-medium whitespace-nowrap text-ink-2">{item.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
