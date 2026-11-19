'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, LayoutGrid } from 'lucide-react';

import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/motion/Magnetic';
import { PageHero } from '@/components/sections/PageHero';
import { modules } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];

export function ProductHero() {
  return (
    <PageHero
      eyebrow="The product"
      title="Ten modules. {One} source of truth."
      description="WsCube CRM covers the entire revenue journey of an education business. Explore each module below, or jump straight to the full capability list."
    >
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Magnetic>
            <Button asChild variant="brand" size="xl" className="group">
              <Link href="/book-demo">
                Book a Demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Magnetic>
          <Button asChild variant="outline" size="xl">
            <a href="#capabilities">
              <LayoutGrid /> All capabilities
            </a>
          </Button>
        </div>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.9 } } }}
          className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {modules.map((m, i) => (
            <motion.li
              key={m.id}
              variants={{ hidden: { opacity: 0, y: 24, scale: 0.94 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}
            >
              <a
                href={`#${m.id}`}
                className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-24px_rgba(25,76,255,0.45)]"
              >
                <span className="flex w-full items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon name={m.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] text-slate-300">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <span className="font-display text-[14px] leading-snug font-semibold text-ink-2">{m.title}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </PageHero>
  );
}
