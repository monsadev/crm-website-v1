'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquareText } from 'lucide-react';
import { Glow } from '@/components/motion/Glow';

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
        <Glow color="brand" alpha={0.55} motion="drift" dur={14} dx={60} dy={30} className="-top-48 -left-40 size-[38rem]" />
        <Glow color="violet-dark" alpha={0.45} motion="drift" dur={16} dx={-60} dy={-30} className="-right-40 -bottom-48 size-[38rem]" />

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
