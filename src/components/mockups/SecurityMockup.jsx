'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { BellRing, Fingerprint, KeyRound, Laptop, Mail, ScrollText, ShieldCheck, Smartphone } from 'lucide-react';

import { cn } from '@/lib/utils';
import { EASE, Tag } from '@/components/mockups/kit';

const code = ['4', '8', '2', '9', '1', '7'];

const logs = [
  { icon: ScrollText, text: 'Revenue report exported', who: 'Admin', time: '2 min ago' },
  { icon: KeyRound, text: 'Permissions updated for Counsellor role', who: 'Super Admin', time: '1 hr ago' },
  { icon: Laptop, text: 'Sign-in from a new device', who: 'Finance', time: 'Yesterday' },
];

const methods = [
  { icon: Fingerprint, label: 'Authenticator' },
  { icon: Mail, label: 'Email OTP' },
  { icon: Smartphone, label: 'SMS' },
];

export function SecurityMockup({ className, dark = false }) {
  const rootRef = useRef(null);
  // Timers only run while the mockup is on screen, so it does no work during the rest of the page.
  const visible = useInView(rootRef, { margin: '120px 0px' });
  const [filled, setFilled] = useState(0);
  const [method, setMethod] = useState(0);
  const verified = filled >= code.length;

  // Type the code one digit at a time, hold on "verified", then restart.
  useEffect(() => {
    if (!visible) return undefined;
    const t = setInterval(() => setFilled((f) => (f >= code.length + 3 ? 0 : f + 1)), 600);
    return () => clearInterval(t);
  }, [visible]);

  useEffect(() => {
    if (!visible) return undefined;
    const t = setInterval(() => setMethod((m) => (m + 1) % methods.length), 4200);
    return () => clearInterval(t);
  }, [visible]);

  // Solid fills instead of backdrop blur: blur behind a moving card is re-filtered every scroll frame.
  const card = dark ? 'border-white/10 bg-[#0d1428]' : 'border-slate-200 bg-white';
  const strong = dark ? 'text-white' : 'text-slate-900';
  const soft = dark ? 'text-slate-400' : 'text-slate-500';

  return (
    <div ref={rootRef} className={cn('relative mx-auto flex w-full max-w-[520px] flex-col gap-4', className)}>
      {/* Verify card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className={cn('relative z-10 rounded-3xl border p-5 shadow-[0_40px_80px_-30px_rgba(2,6,23,0.55)] sm:p-6', card)}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex size-11 items-center justify-center rounded-2xl bg-brand text-white">
            <ShieldCheck className="size-5" />
            <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand/40" />
          </span>
          <div className="min-w-0 flex-1">
            <p className={cn('font-display text-[15px] font-semibold', strong)}>Verify it is you</p>
            <p className={cn('text-[11px]', soft)}>Enter the 6 digit code to continue</p>
          </div>
          <AnimatePresence mode="wait">
            {verified ? (
              <motion.span
                key="ok"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                <Tag tone="green" className="text-[10px]">
                  Verified
                </Tag>
              </motion.span>
            ) : (
              <motion.span
                key="wait"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn('text-[10px] font-medium', soft)}
              >
                00:{String(30 - filled).padStart(2, '0')}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className={cn('mt-4 grid grid-cols-3 gap-1.5 rounded-xl p-1', dark ? 'bg-white/5' : 'bg-slate-100')}>
          {methods.map((m, i) => (
            <span
              key={m.label}
              className={cn(
                'relative inline-flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-[10.5px] font-medium transition-colors',
                method === i ? (dark ? 'text-white' : 'text-brand') : soft,
              )}
            >
              {method === i && (
                <motion.span
                  layoutId={dark ? 'mfa-pill-dark' : 'mfa-pill'}
                  className={cn('absolute inset-0 rounded-lg', dark ? 'bg-white/10' : 'bg-white shadow-sm')}
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <m.icon className="relative size-3.5" />
              <span className="relative">{m.label}</span>
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-6 gap-2">
          {code.map((d, i) => {
            const on = filled > i;
            return (
              <motion.span
                key={i}
                animate={{ scale: on && filled === i + 1 ? [1, 1.12, 1] : 1, y: verified ? [0, -4, 0] : 0 }}
                transition={{ duration: 0.35, delay: verified ? i * 0.05 : 0 }}
                className={cn(
                  'flex h-12 items-center justify-center rounded-xl border font-display text-xl font-semibold transition-colors duration-300',
                  verified
                    ? 'border-emerald-400/60 bg-emerald-400/15 text-emerald-400'
                    : on
                      ? dark
                        ? 'border-brand/70 bg-brand/20 text-white'
                        : 'border-brand/40 bg-brand/5 text-brand'
                      : dark
                        ? 'border-white/10 bg-white/5 text-transparent'
                        : 'border-slate-200 bg-slate-50 text-transparent',
                )}
              >
                {on ? d : '0'}
              </motion.span>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between text-[10.5px]">
          <span className={cn('inline-flex items-center gap-1.5', soft)}>
            <Laptop className="size-3.5" /> Single active session
          </span>
          <Tag tone="green">Device bound</Tag>
        </div>
      </motion.div>

      {/* Audit log sits below the code, offset to the right so nothing overlaps */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        className={cn(
          'relative z-20 rounded-2xl border p-4 shadow-[0_30px_60px_-26px_rgba(2,6,23,0.5)] sm:ml-auto sm:w-[86%]',
          dark ? 'border-white/10 bg-ink-2' : 'border-slate-200 bg-white',
        )}
      >
        <div className="mb-2.5 flex items-center justify-between">
          <p className={cn('text-[11.5px] font-semibold', strong)}>Security audit log</p>
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
              <span className="relative size-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        </div>
        <ul className="flex flex-col gap-2">
          {logs.map((l, i) => (
            <motion.li
              key={l.text}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: EASE }}
              className="flex items-center gap-2.5"
            >
              <span
                className={cn(
                  'flex size-7 shrink-0 items-center justify-center rounded-lg',
                  dark ? 'bg-white/10 text-sky-300' : 'bg-slate-100 text-slate-600',
                )}
              >
                <l.icon className="size-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className={cn('truncate text-[10.5px] font-medium', dark ? 'text-white/90' : 'text-slate-700')}>
                  {l.text}
                </p>
                <p className={cn('text-[9px]', dark ? 'text-slate-500' : 'text-slate-400')}>
                  {l.who} &middot; {l.time}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Off-hours alert toast */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 180, damping: 16, delay: 0.9 }}
        className="relative z-20 hidden w-[70%] sm:block"
      >
        <div
          style={{ '--amp': '6px' }}
          className={cn(
            'anim-bob',
            'flex items-center gap-3 rounded-2xl border p-3',
            dark ? 'border-amber-400/20 bg-[#1b1530]/95' : 'border-amber-200 bg-amber-50',
          )}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
            <BellRing className="size-4" />
          </span>
          <div className="min-w-0">
            <p className={cn('text-[11px] font-semibold', strong)}>Off-hours login alert</p>
            <p className={cn('truncate text-[9.5px]', soft)}>Sunday 11:48 PM &middot; Email sent to security team</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
