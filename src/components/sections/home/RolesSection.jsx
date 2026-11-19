'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/Icon';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { roles } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];

export function RolesSection() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find((r) => r.id === activeId);

  return (
    <Section id="roles">
      <SectionHeading
        eyebrow="One platform, every role"
        title="A tailored workspace for {everyone} on your team"
        description="Permissions and team scoping mean each person sees exactly what they need, nothing more."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="flex flex-col gap-2.5">
          {roles.map((r) => {
            const selected = r.id === activeId;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveId(r.id)}
                className={cn(
                  'group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300',
                  selected ? 'border-brand/30 bg-white shadow-[0_24px_50px_-26px_rgba(25,76,255,0.5)]' : 'border-slate-200 bg-white/60 hover:border-slate-300 hover:bg-white'
                )}
              >
                {selected && <motion.span layoutId="role-bar" className="absolute inset-y-0 left-0 w-1 bg-brand" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300', selected ? 'bg-brand text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200')}>
                  <Icon name={r.icon} className="size-5" />
                </span>
                <span className="font-display text-[17px] font-medium text-ink-2">{r.title}</span>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-[0_40px_90px_-40px_rgba(2,6,23,0.7)] sm:p-12">
          <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-50" />
          <motion.div
            key={`blob-${activeId}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-brand/50 blur-[100px]"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/15">
                <Icon name={active.icon} className="size-7" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">{active.title}</h3>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-slate-300">{active.text}</p>
              <ul className="mt-8 flex flex-col gap-3.5">
                {active.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: EASE }}
                    className="flex items-center gap-3 text-[16px] text-white/90"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
