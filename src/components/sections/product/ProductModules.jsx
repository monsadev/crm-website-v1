'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/Icon';
import { Mockup } from '@/components/mockups';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SplitHeading } from '@/components/motion/SplitHeading';
import { modules } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];

// Sticky module navigator with scroll-spy.
function ModuleNav({ active }) {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-id="${active}"]`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [active]);

  return (
    <div className="sticky top-[76px] z-30 border-y border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div ref={listRef} className="no-scrollbar mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-2.5 sm:px-8">
        {modules.map((m) => {
          const on = active === m.id;
          return (
            <a
              key={m.id}
              href={`#${m.id}`}
              data-id={m.id}
              className={cn(
                'relative inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-300',
                on ? 'text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-ink-2'
              )}
            >
              {on && (
                <motion.span layoutId="module-nav-pill" className="absolute inset-0 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
              )}
              <Icon name={m.icon} className="relative size-4" />
              <span className="relative">{m.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ModuleBlock({ m, index, onActive }) {
  const flip = index % 2 === 1;
  return (
    <motion.section
      id={m.id}
      onViewportEnter={() => onActive(m.id)}
      viewport={{ amount: 0.35 }}
      className="relative scroll-mt-40 py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className={cn(flip && 'lg:order-2')}>
          <Reveal blur={false} duration={0.6}>
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_14px_30px_-10px_rgba(25,76,255,0.75)]">
                <Icon name={m.icon} className="size-6" />
              </span>
              <div>
                <p className="font-mono text-[11px] tracking-widest text-brand uppercase">
                  {String(index + 1).padStart(2, '0')} &middot; {m.kicker}
                </p>
                <p className="font-display text-sm font-semibold text-slate-500">{m.title}</p>
              </div>
            </div>
          </Reveal>

          <SplitHeading text={m.tagline} className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.12] font-semibold text-ink-2" stagger={0.03} />

          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-600">{m.description}</p>
          </Reveal>

          <Stagger className="mt-8 flex flex-col gap-3" stagger={0.06}>
            {m.bullets.map((b) => (
              <StaggerItem key={b} direction="right" className="flex items-start gap-3 text-[15px] leading-snug text-slate-700">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {b}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-8 grid max-w-md grid-cols-2 gap-3">
            {m.metrics.map((x) => (
              <div key={x.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="font-display text-xl font-semibold text-ink-2">{x.value}</p>
                <p className="mt-0.5 text-xs text-slate-500">{x.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <motion.div
          className={cn('relative', flip && 'lg:order-1')}
          initial={{ opacity: 0, y: 60, rotate: flip ? -2 : 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/15 via-violet-400/10 to-sky-300/15 blur-3xl" />
          <Mockup name={m.mockup} />
        </motion.div>
      </div>
    </motion.section>
  );
}

export function ProductModules() {
  const [active, setActive] = useState(modules[0].id);
  return (
    <div className="relative">
      <ModuleNav active={active} />
      <div className="relative">
        {modules.map((m, i) => (
          <div key={m.id} className={cn(i % 2 === 1 && 'bg-slate-50/70')}>
            <ModuleBlock m={m} index={i} onActive={setActive} />
          </div>
        ))}
      </div>
    </div>
  );
}
