'use client';

import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';

// Label + control + animated error message.
export function Field({ id, label, required, error, hint, children, className }) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={id} className="mb-2 text-[13px] font-medium text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </label>
      {children}
      <AnimatePresence initial={false} mode="wait">
        {error ? (
          <motion.p
            key="err"
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="mt-1.5 text-[12.5px] font-medium text-rose-600"
          >
            {error}
          </motion.p>
        ) : hint ? (
          <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1.5 text-[12.5px] text-slate-400">
            {hint}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// Pill style multi or single choice.
export function ChoiceGroup({ options, value, onChange, multiple = false, columns = 'sm:grid-cols-3', name }) {
  const isOn = (v) => (multiple ? value.includes(v) : value === v);
  const toggle = (v) => {
    if (!multiple) return onChange(v);
    return onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
  };
  return (
    <div role={multiple ? 'group' : 'radiogroup'} aria-label={name} className={cn('grid grid-cols-2 gap-2', columns)}>
      {options.map((o) => {
        const label = typeof o === 'string' ? o : o.label;
        const val = typeof o === 'string' ? o : o.value;
        const on = isOn(val);
        return (
          <motion.button
            key={val}
            type="button"
            role={multiple ? 'checkbox' : 'radio'}
            aria-checked={on}
            onClick={() => toggle(val)}
            whileTap={{ scale: 0.97 }}
            className={cn(
              'relative flex min-h-11 items-center justify-center rounded-xl border px-3 py-2 text-center text-[13.5px] font-medium transition-all duration-200',
              on
                ? 'border-brand bg-brand/[0.07] text-brand shadow-[0_0_0_3px_rgba(25,76,255,0.12)]'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
            )}
          >
            {label}
          </motion.button>
        );
      })}
    </div>
  );
}
