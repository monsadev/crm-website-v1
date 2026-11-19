'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Search, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { capabilityGroups } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];

export function CapabilityMatrix() {
  const [group, setGroup] = useState('all');
  const [query, setQuery] = useState('');

  const total = capabilityGroups.reduce((s, g) => s + g.items.length, 0);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return capabilityGroups
      .filter((g) => group === 'all' || g.id === group)
      .flatMap((g) => g.items.map((text) => ({ text, group: g.title, id: `${g.id}-${text}` })))
      .filter((i) => !q || i.text.toLowerCase().includes(q));
  }, [group, query]);

  return (
    <Section id="capabilities">
      <SectionHeading
        eyebrow={`${total} capabilities`}
        title="Every capability, {at a glance}"
        description="Search or filter the full list of what WsCube CRM does today."
      />

      <div className="mt-12 flex flex-col items-center gap-5">
        <label className="relative w-full max-w-md">
          <span className="sr-only">Search capabilities</span>
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search, for example EMI or WhatsApp"
            className="h-12 w-full rounded-full border border-slate-200 bg-white pr-11 pl-11 text-[15px] shadow-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15"
          />
          {query && (
            <button type="button" aria-label="Clear search" onClick={() => setQuery('')} className="absolute top-1/2 right-3 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600">
              <X className="size-4" />
            </button>
          )}
        </label>

        <div className="no-scrollbar flex max-w-full gap-1.5 overflow-x-auto pb-1">
          {[{ id: 'all', title: 'All' }, ...capabilityGroups].map((g) => {
            const on = group === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setGroup(g.id)}
                className={cn(
                  'relative shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-colors duration-300',
                  on ? 'border-transparent text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                )}
              >
                {on && <motion.span layoutId="cap-pill" className="absolute inset-0 rounded-full bg-ink-2" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span className="relative">{g.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.ul layout className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((i, idx) => (
            <motion.li
              key={i.id}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, delay: Math.min(idx * 0.015, 0.4), ease: EASE } }}
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
              className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand/30"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span>
                <span className="block text-[15px] leading-snug font-medium text-ink-2">{i.text}</span>
                <span className="mt-0.5 block text-xs text-slate-400">{i.group}</span>
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {!items.length && (
        <p className="mt-10 text-center text-slate-500">
          Nothing matches &ldquo;{query}&rdquo;. Try a broader term, or <a href="/contact" className="text-brand underline-offset-4 hover:underline">ask us</a>.
        </p>
      )}
    </Section>
  );
}
