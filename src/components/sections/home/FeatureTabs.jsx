'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Mockup } from '@/components/mockups';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { modules } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];
const tabIds = ['leads', 'whatsapp', 'payments', 'cohorts', 'reports', 'security'];
const tabs = tabIds.map((id) => modules.find((m) => m.id === id));
const tabLabels = {
  leads: 'Leads',
  whatsapp: 'WhatsApp',
  payments: 'Payments',
  cohorts: 'Cohorts',
  reports: 'Reports',
  security: 'Security',
};

export function FeatureTabs() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId);

  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Everything in one place"
        title="Every part of your funnel, {beautifully} connected"
        description="Pick a module and see how it works. Each one shares the same data, so a change in one place shows up everywhere."
      />

      <div className="mt-14 flex justify-center">
        <div
          role="tablist"
          aria-label="Product modules"
          className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-sm backdrop-blur"
        >
          {tabs.map((t) => {
            const selected = t.id === activeId;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(t.id)}
                className={cn(
                  'relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-300',
                  selected ? 'text-white' : 'text-slate-600 hover:text-ink-2',
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="feature-tab-pill"
                    className="absolute inset-0 rounded-full bg-ink-2 shadow-[0_10px_24px_-8px_rgba(2,6,23,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon name={t.icon} className="relative size-4" />
                <span className="relative">{tabLabels[t.id]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-14 min-h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
          >
            <div>
              <p className="font-mono text-xs tracking-widest text-brand uppercase">{active.kicker}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight font-semibold text-ink-2 sm:text-4xl">
                {active.tagline}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{active.description}</p>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
                className="mt-7 flex flex-col gap-3"
              >
                {active.bullets.slice(0, 5).map((b) => (
                  <motion.li
                    key={b}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                    }}
                    className="flex items-start gap-3 text-[15px] leading-snug text-slate-700"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {b}
                  </motion.li>
                ))}
              </motion.ul>

              <Button asChild variant="dark" size="lg" className="group mt-8">
                <Link href={`/product#${active.id}`}>
                  Explore {active.title.split(' and ')[0]}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/15 via-violet-400/10 to-sky-300/15 blur-2xl" />
              <Mockup name={active.mockup} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
