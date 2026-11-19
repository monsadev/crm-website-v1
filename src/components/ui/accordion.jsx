'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

// Animated single-open accordion (motion powered, accessible).
export function Accordion({ items, defaultOpen = 0, className, variant = 'light' }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const dark = variant === 'dark';

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <motion.div
            key={item.q}
            layout
            className={cn(
              'overflow-hidden rounded-2xl border transition-colors duration-300',
              dark
                ? isOpen
                  ? 'border-white/20 bg-white/[0.07]'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                : isOpen
                  ? 'border-brand/25 bg-white shadow-[0_20px_50px_-24px_rgba(25,76,255,0.35)]'
                  : 'border-slate-200 bg-white/70 hover:border-slate-300'
            )}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className={cn(
                  'flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-[17px] font-medium',
                  dark ? 'text-white' : 'text-ink-2'
                )}
              >
                <span>{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className={cn(
                    'inline-flex size-8 shrink-0 items-center justify-center rounded-full',
                    dark ? 'bg-white/10 text-white' : isOpen ? 'bg-brand text-white' : 'bg-slate-100 text-slate-600'
                  )}
                >
                  <Plus className="size-4" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className={cn('px-6 pb-6 text-[15px] leading-relaxed', dark ? 'text-white/70' : 'text-slate-600')}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
