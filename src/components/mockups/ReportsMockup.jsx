'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Target } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Counter } from '@/components/motion/Counter';
import { AppFrame, Donut, EASE, Pop, seeded, Tag } from '@/components/mockups/kit';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const rand = seeded(21);
const curr = months.map((_, i) => 0.28 + (i / 11) * 0.5 + rand() * 0.14);
const prev = months.map((_, i) => 0.2 + (i / 11) * 0.32 + rand() * 0.12);

const sources = [
  { label: 'Meta Ads', value: 38, color: '#194cff' },
  { label: 'WhatsApp', value: 24, color: '#10b981' },
  { label: 'Website', value: 20, color: '#8b5cf6' },
  { label: 'Referrals', value: 12, color: '#f59e0b' },
  { label: 'Other', value: 6, color: '#cbd5e1' },
];

export function ReportsMockup({ className }) {
  return (
    <AppFrame url="crm.yourcompany.com/reports/revenue-report" className={className}>
      <div className="bg-slate-50/70 p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[13px] font-semibold text-slate-800">Revenue report</p>
            <p className="text-[10px] text-slate-400">This year compared with last year</p>
          </div>
          <div className="flex gap-1.5">
            <Tag tone="blue">YTD</Tag>
            <Tag tone="slate">Compare previous</Tag>
          </div>
        </div>

        <div className="grid gap-2.5 lg:grid-cols-5">
          <Pop className="rounded-2xl border border-slate-200/80 bg-white p-3.5 lg:col-span-3">
            <div className="mb-2 flex items-end justify-between">
              <div>
                <p className="text-[10px] text-slate-400">Total revenue</p>
                <p className="font-display text-2xl font-semibold text-slate-900">
                  <Counter to={1.82} prefix={'\u20B9'} suffix=" Cr" decimals={2} />
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                <ArrowUpRight className="size-3" /> 24.6%
              </span>
            </div>
            <div className="flex h-36 items-end gap-1.5">
              {months.map((m, i) => (
                <div key={m} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                  <div className="flex h-full w-full items-end justify-center gap-[2px]">
                    <motion.div
                      className="w-1/2 origin-bottom rounded-t-[4px] bg-slate-200"
                      style={{ height: `${prev[i] * 100}%` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.04 * i, ease: EASE }}
                    />
                    <motion.div
                      className="w-1/2 origin-bottom rounded-t-[4px] bg-gradient-to-t from-brand to-brand-2"
                      style={{ height: `${curr[i] * 100}%` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.04 * i + 0.1, ease: EASE }}
                    />
                  </div>
                  <span className="text-[8px] text-slate-400">{m}</span>
                </div>
              ))}
            </div>
          </Pop>

          <div className="flex flex-col gap-2.5 lg:col-span-2">
            <Pop delay={0.15} className="rounded-2xl border border-slate-200/80 bg-white p-3.5">
              <p className="mb-2 text-[11px] font-semibold text-slate-700">Revenue by source</p>
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <Donut parts={sources} size={88} stroke={13} />
                  <span className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-[13px] font-semibold text-slate-800">5</span>
                    <span className="text-[8px] text-slate-400">sources</span>
                  </span>
                </div>
                <ul className="flex-1 space-y-1">
                  {sources.map((s) => (
                    <li key={s.label} className="flex items-center justify-between text-[9.5px]">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <i className="size-2 rounded-sm" style={{ background: s.color }} />
                        {s.label}
                      </span>
                      <b className="text-slate-700">{s.value}%</b>
                    </li>
                  ))}
                </ul>
              </div>
            </Pop>

            <Pop delay={0.25} className="rounded-2xl border border-slate-200/80 bg-white p-3.5">
              <div className="mb-1.5 flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <Target className="size-3.5 text-brand" /> Projection vs target
                </p>
                <span className="text-[10px] font-semibold text-brand">82%</span>
              </div>
              <div className="relative h-2.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full origin-left rounded-full bg-gradient-to-r from-brand to-violet-500"
                  style={{ width: '82%' }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[9px] text-slate-400">
                <span>Actual {'\u20B91.82 Cr'}</span>
                <span>Target {'\u20B92.2 Cr'}</span>
              </div>
            </Pop>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
