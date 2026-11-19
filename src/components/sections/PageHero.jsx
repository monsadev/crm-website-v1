'use client';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/motion/Reveal';
import { SplitHeading } from '@/components/motion/SplitHeading';

// Shared hero for inner pages: grid backdrop, drifting glows, split heading.
export function PageHero({ eyebrow, title, description, children, className, align = 'center' }) {
  const center = align === 'center';
  return (
    <section className={cn('relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24', className)}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-80" />
        <motion.div
          className="absolute -top-40 left-[10%] size-[30rem] rounded-full bg-brand/20 blur-[130px]"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -top-20 right-[8%] size-[26rem] rounded-full bg-violet-400/20 blur-[130px]"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className={cn('mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 sm:px-8', center ? 'items-center text-center' : 'items-start')}>
        {eyebrow && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Badge variant="brand" className="uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-brand" />
              {eyebrow}
            </Badge>
          </motion.div>
        )}
        <SplitHeading
          as="h1"
          text={title}
          delay={0.25}
          amount={0.1}
          className="max-w-5xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.04] font-semibold text-ink-2"
        />
        {description && (
          <Reveal delay={0.6} className="max-w-2xl">
            <p className="text-[clamp(1.02rem,1.5vw,1.2rem)] leading-relaxed text-slate-600">{description}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.75} className="w-full">{children}</Reveal>}
      </div>
    </section>
  );
}
