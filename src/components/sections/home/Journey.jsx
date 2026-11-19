'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/Icon';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { journey } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];

export function Journey() {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 65%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const current = journey[active];

  return (
    <Section id="journey" className="bg-slate-50/70">
      <div className="bg-dots mask-fade-y pointer-events-none absolute inset-0 opacity-50" />
      <SectionHeading
        eyebrow="The learner journey"
        title="From first click to {certificate}, in one flow"
        description="Most teams stitch together sheets, gateways and portals. WsCube CRM follows the learner end to end, so nothing is re-typed and nothing is lost."
      />

      <div className="relative mt-20 grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
        {/* Sticky summary */}
        <div className="hidden lg:block">
          <div className="sticky top-32">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-[0_40px_80px_-30px_rgba(2,6,23,0.6)]">
              <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-60" />
              <motion.div
                key={`glow-${active}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-brand/60 blur-[90px]"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs tracking-widest text-sky-300 uppercase">Step</p>
                  <div className="flex gap-1.5">
                    {journey.map((j, i) => (
                      <span
                        key={j.id}
                        className={cn('h-1 rounded-full transition-all duration-500', i === active ? 'w-8 bg-sky-300' : 'w-2 bg-white/20')}
                      />
                    ))}
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mt-6"
                  >
                    <p className="font-display text-[7rem] leading-none font-semibold tracking-tighter text-white/10">
                      0{active + 1}
                    </p>
                    <span className="-mt-8 flex size-14 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_12px_30px_-8px_rgba(25,76,255,0.8)]">
                      <Icon name={current.icon} className="size-7" />
                    </span>
                    <h3 className="mt-5 font-display text-3xl font-semibold">{current.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{current.tag}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <ol ref={listRef} className="relative flex flex-col gap-10 pl-10 sm:pl-14">
          <span className="absolute top-3 bottom-3 left-[15px] w-px bg-slate-200 sm:left-[19px]" />
          <motion.span
            style={{ scaleY }}
            className="absolute top-3 bottom-3 left-[14px] w-[3px] origin-top rounded-full bg-gradient-to-b from-brand via-sky-400 to-violet-500 sm:left-[18px]"
          />
          {journey.map((step, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <motion.li
                key={step.id}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.6, margin: '-25% 0px -25% 0px' }}
                className="relative"
              >
                <motion.span
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  className={cn(
                    'absolute top-6 -left-10 z-10 flex size-8 items-center justify-center rounded-full border-2 bg-white text-xs font-bold transition-colors duration-500 sm:-left-14 sm:size-10',
                    isActive ? 'border-brand bg-brand text-white shadow-[0_0_0_6px_rgba(25,76,255,0.15)]' : isPast ? 'border-brand/60 text-brand' : 'border-slate-300 text-slate-400'
                  )}
                >
                  {i + 1}
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className={cn(
                    'rounded-3xl border bg-white p-6 transition-all duration-500 sm:p-8',
                    isActive ? 'border-brand/30 shadow-[0_30px_70px_-30px_rgba(25,76,255,0.35)]' : 'border-slate-200'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span className={cn('flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500', isActive ? 'bg-brand text-white' : 'bg-slate-100 text-slate-600')}>
                      <Icon name={step.icon} className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink-2">{step.title}</h3>
                      <p className="mt-2 text-[16px] leading-relaxed text-slate-600">{step.text}</p>
                      <p className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{step.tag}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
