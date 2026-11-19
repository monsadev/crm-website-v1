'use client';

import { motion } from 'motion/react';
import { BadgeCheck, Check, FileText, Lock, ShieldCheck, Tag as TagIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { EASE, Float, inr, Tag } from '@/components/mockups/kit';

const emi = [
  { when: 'Today', amount: 10000, paid: true },
  { when: '05 Dec', amount: 12500, paid: false },
  { when: '05 Jan', amount: 12500, paid: false },
];

export function PaymentMockup({ className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[600px]', className)}>
      {/* Invoice behind */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 6 }}
        whileInView={{ opacity: 1, x: 0, rotate: 4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        className="absolute top-6 right-0 hidden w-[250px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_30px_60px_-24px_rgba(2,6,23,0.35)] sm:block"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-[12px] font-semibold text-slate-800">Tax Invoice</p>
            <p className="text-[9px] text-slate-400">INV-2026-001284</p>
          </div>
          <Tag tone="blue">GST</Tag>
        </div>
        <div className="mt-3 space-y-1.5 border-y border-dashed border-slate-200 py-2.5 text-[10px]">
          <div className="flex justify-between text-slate-500"><span>Program fee</span><span>{inr(31000)}</span></div>
          <div className="flex justify-between text-slate-500"><span>Coupon EARLY10</span><span className="text-emerald-600">-{inr(3000)}</span></div>
          <div className="flex justify-between text-slate-500"><span>GST (18%)</span><span>{inr(5040)}</span></div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-slate-700">Total</span>
          <span className="font-display text-[15px] font-semibold text-slate-900">{inr(33040)}</span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 2.2, rotate: -25 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 14 }}
          className="absolute right-3 bottom-3 rounded-md border-2 border-emerald-500 px-2 py-0.5 text-[10px] font-extrabold tracking-widest text-emerald-600 uppercase"
        >
          Paid
        </motion.div>
      </motion.div>

      {/* Payment link card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative z-10 w-full max-w-[340px] rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_40px_80px_-30px_rgba(2,6,23,0.45)]"
      >
        <div className="flex items-center gap-2.5">
          <img src="/images/logo-mark.svg" alt="" className="size-9" />
          <div>
            <p className="text-[12.5px] font-semibold text-slate-800">Full Stack Development</p>
            <p className="text-[10px] text-slate-400">Batch 12 &middot; Starts Monday</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-slate-50 p-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-slate-400">Program fee</p>
              <p className="font-display text-2xl font-semibold text-slate-900">{inr(28000)}</p>
            </div>
            <span className="mb-1 text-[11px] text-slate-400 line-through">{inr(31000)}</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
            <TagIcon className="size-3" /> EARLY10 applied, you save {inr(3000)}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-1.5 rounded-xl bg-slate-100 p-1 text-[10.5px] font-semibold">
          <span className="rounded-lg py-1.5 text-center text-slate-500">Full payment</span>
          <span className="rounded-lg bg-white py-1.5 text-center text-brand shadow-sm">EMI plan</span>
        </div>

        <ol className="mt-3 flex flex-col gap-1.5">
          {emi.map((e, i) => (
            <motion.li
              key={e.when}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: EASE }}
              className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-2.5 py-2"
            >
              <span className={cn('flex size-5 items-center justify-center rounded-full text-[9px] font-bold', e.paid ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500')}>
                {e.paid ? <Check className="size-3" /> : i + 1}
              </span>
              <span className="flex-1 text-[10.5px] text-slate-600">{e.when}</span>
              <span className="text-[11px] font-semibold text-slate-800">{inr(e.amount)}</span>
            </motion.li>
          ))}
        </ol>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          tabIndex={-1}
          className="mt-4 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-brand text-[12px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(25,76,255,0.7)]"
        >
          <Lock className="size-3.5" /> Pay {inr(10000)} securely
        </motion.button>
        <p className="mt-2 flex items-center justify-center gap-1 text-[9px] text-slate-400">
          <ShieldCheck className="size-3" /> Secured by Razorpay
        </p>
      </motion.div>

      <Float className="absolute -bottom-3 left-[48%] z-20 hidden rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-[0_24px_50px_-20px_rgba(2,6,23,0.35)] sm:block" delay={0.8} amplitude={8}>
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><BadgeCheck className="size-4" /></span>
          <div>
            <p className="text-[11px] font-semibold text-slate-800">Payment received</p>
            <p className="text-[9px] text-slate-400">Lead marked as converted</p>
          </div>
        </div>
      </Float>
      <Float className="absolute top-0 left-2 z-20 hidden rounded-xl bg-ink-2 px-2.5 py-1.5 text-white shadow-lg sm:block" delay={0.2} amplitude={6}>
        <p className="flex items-center gap-1.5 text-[10px] font-medium"><FileText className="size-3 text-sky-300" /> Invoice auto-generated</p>
      </Float>
    </div>
  );
}
