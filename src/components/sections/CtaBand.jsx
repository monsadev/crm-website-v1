'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquareText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/motion/Magnetic';
import { Reveal } from '@/components/motion/Reveal';
import { SplitHeading } from '@/components/motion/SplitHeading';

export function CtaBand({
  title = 'Ready to run admissions on {autopilot}?',
  description = 'See the whole platform in a live walkthrough tailored to your teams, courses and sales process.',
}) {
  return (
    <section className="relative px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center text-white sm:px-16 sm:py-28">
        <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-70" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-24 size-[28rem] rounded-full bg-brand/60 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-32 size-[28rem] rounded-full bg-violet-500/50 blur-[120px]"
          animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <SplitHeading
            text={title}
            accentClassName="text-gradient-light"
            className="text-[clamp(2.1rem,5.2vw,4rem)] leading-[1.06] font-semibold"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl text-[17px] leading-relaxed text-slate-300">{description}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
            <Magnetic>
              <Button asChild variant="light" size="xl" className="group">
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild variant="outline-dark" size="xl">
              <Link href="/contact">
                <MessageSquareText /> Talk to our team
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
