'use client';

import { motion } from 'motion/react';
import { CheckCheck, Megaphone, Phone, Send, Users, Video } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Counter } from '@/components/motion/Counter';
import { EASE, Float } from '@/components/mockups/kit';

const stats = [
  { label: 'Sent', to: 2480, suffix: '', color: 'bg-slate-400', w: 100 },
  { label: 'Delivered', to: 98, suffix: '%', color: 'bg-sky-400', w: 98 },
  { label: 'Read', to: 71, suffix: '%', color: 'bg-emerald-400', w: 71 },
  { label: 'Replied', to: 18, suffix: '%', color: 'bg-violet-400', w: 18 },
];

export function WhatsAppMockup({ className }) {
  return (
    <div className={cn('relative mx-auto flex w-full max-w-[640px] items-center justify-center', className)}>
      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative z-10 w-[270px] shrink-0 rounded-[2.4rem] border-[7px] border-slate-900 bg-slate-900 shadow-[0_50px_90px_-30px_rgba(2,6,23,0.6)]"
      >
        <div className="absolute top-2 left-1/2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
        <div className="overflow-hidden rounded-[1.8rem] bg-[#e7ddd3]">
          <div className="flex items-center gap-2 bg-[#0b5f55] px-3 pt-7 pb-2.5 text-white">
            <span className="flex size-8 items-center justify-center overflow-hidden rounded-full bg-white">
              <img src="/images/logo-mark.svg" alt="" className="size-7" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] leading-tight font-semibold">WsCube CRM</p>
              <p className="text-[9px] text-white/70">Business account</p>
            </div>
            <Video className="size-3.5" />
            <Phone className="size-3.5" />
          </div>

          <div
            className="flex min-h-[330px] flex-col gap-2 px-2.5 py-3"
            style={{ backgroundImage: 'radial-gradient(#c9bcae 1px, transparent 1px)', backgroundSize: '18px 18px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
              className="max-w-[88%] self-start overflow-hidden rounded-xl rounded-tl-sm bg-white shadow-sm"
            >
              <div className="relative h-24 bg-gradient-to-br from-brand via-blue-500 to-violet-500">
                <div className="bg-grid-dark absolute inset-0 opacity-40" />
                <div className="absolute inset-0 flex flex-col justify-end p-2.5 text-white">
                  <p className="text-[9px] tracking-wide uppercase opacity-80">New batch</p>
                  <p className="font-display text-[14px] leading-tight font-semibold">Full Stack Bootcamp</p>
                </div>
              </div>
              <div className="px-2.5 py-2">
                <p className="text-[10.5px] leading-snug text-slate-700">
                  Hi Priya, seats are filling fast for the Monday batch. Reserve yours with a token amount today.
                </p>
                <p className="mt-1 flex items-center justify-end gap-0.5 text-[8.5px] text-slate-400">
                  10:42 <CheckCheck className="size-3 text-sky-500" />
                </p>
              </div>
              <div className="border-t border-slate-100 text-center text-[10.5px] font-semibold text-sky-600">
                <p className="py-1.5">Reserve my seat</p>
                <p className="border-t border-slate-100 py-1.5">Talk to counsellor</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
              className="max-w-[70%] self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm"
            >
              <p className="text-[10.5px] text-slate-800">Yes, share the fee details please</p>
              <p className="mt-0.5 flex items-center justify-end gap-0.5 text-[8.5px] text-slate-500">
                10:44 <CheckCheck className="size-3 text-sky-500" />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.9, duration: 0.5, ease: EASE }}
              className="flex w-14 items-center justify-center gap-1 self-start rounded-xl rounded-tl-sm bg-white py-2 shadow-sm"
            >
              {[0, 1, 2].map((d) => (
                <motion.i
                  key={d}
                  className="size-1.5 rounded-full bg-slate-400"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex items-center gap-2 bg-[#f0f0f0] px-2.5 py-2">
            <span className="h-7 flex-1 rounded-full bg-white px-3 text-[10px] leading-7 text-slate-400">Message</span>
            <span className="flex size-7 items-center justify-center rounded-full bg-[#0b5f55] text-white">
              <Send className="size-3" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Campaign analytics */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        className="absolute right-0 bottom-6 z-20 hidden w-[235px] rounded-2xl border border-slate-200 bg-white p-3.5 shadow-[0_30px_60px_-24px_rgba(2,6,23,0.4)] sm:block"
      >
        <div className="mb-2.5 flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <Megaphone className="size-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-slate-800">Campaign performance</p>
            <p className="text-[9px] text-slate-400">Monday batch drip</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className="mb-0.5 flex justify-between text-[9.5px]">
                <span className="text-slate-500">{s.label}</span>
                <span className="font-semibold text-slate-700">
                  <Counter to={s.to} suffix={s.suffix} />
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className={cn('h-full origin-left rounded-full', s.color)}
                  style={{ width: `${s.w}%` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.4 + i * 0.12, ease: EASE }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <Float
        className="absolute top-4 left-0 z-20 hidden rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-[0_24px_50px_-20px_rgba(2,6,23,0.35)] sm:block"
        delay={0.5}
      >
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-brand/10 text-brand">
            <Users className="size-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-slate-800">+126 leads created</p>
            <p className="text-[9px] text-slate-400">From replies and ad clicks</p>
          </div>
        </div>
      </Float>
    </div>
  );
}
