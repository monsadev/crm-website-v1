'use client';

import { motion } from 'motion/react';
import { CheckCheck, Eye, Inbox, MousePointerClick, Send } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Counter } from '@/components/motion/Counter';
import { AppFrame, EASE, Pop, Tag } from '@/components/mockups/kit';

const funnel = [
  { icon: Inbox, label: 'Queued', to: 1200, color: 'bg-slate-300', w: 100 },
  { icon: Send, label: 'Sent', to: 1184, color: 'bg-sky-400', w: 98 },
  { icon: CheckCheck, label: 'Delivered', to: 1169, color: 'bg-blue-500', w: 96 },
  { icon: Eye, label: 'Opened', to: 612, color: 'bg-violet-500', w: 51 },
  { icon: MousePointerClick, label: 'Clicked', to: 188, color: 'bg-emerald-500', w: 16 },
];

export function EmailMockup({ className }) {
  return (
    <AppFrame url="crm.yourcompany.com/reports/lead-bulk-email" className={className}>
      <div className="grid gap-3 bg-slate-50/70 p-3 sm:p-4 lg:grid-cols-5">
        <Pop className="rounded-2xl border border-slate-200/80 bg-white p-3.5 lg:col-span-3">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[12px] font-semibold text-slate-800">Day 3 follow-up email</p>
            <Tag tone="violet">Lead email template</Tag>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
            <div className="mb-2 h-16 overflow-hidden rounded-lg bg-gradient-to-br from-brand via-blue-500 to-violet-500">
              <div className="bg-grid-dark h-full w-full p-3 opacity-90">
                <p className="font-display text-[13px] font-semibold text-white">Your seat is still waiting, Priya</p>
                <p className="text-[9.5px] text-white/80">Full Stack Bootcamp &middot; Next batch starts Monday</p>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-[92%] rounded bg-slate-200" />
              <div className="h-1.5 w-[80%] rounded bg-slate-200" />
              <div className="h-1.5 w-[64%] rounded bg-slate-200" />
            </div>
            <div className="mt-3 inline-flex h-7 items-center rounded-lg bg-brand px-3 text-[10px] font-semibold text-white">Reserve my seat</div>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5 text-[9.5px]">
            <Tag tone="slate">7 days after registration</Tag>
            <Tag tone="slate">Team: Jodhpur</Tag>
            <Tag tone="slate">Course: Full Stack</Tag>
          </div>
        </Pop>

        <Pop delay={0.15} className="rounded-2xl border border-slate-200/80 bg-white p-3.5 lg:col-span-2">
          <p className="mb-2.5 text-[12px] font-semibold text-slate-800">Delivery funnel</p>
          <div className="flex flex-col gap-2.5">
            {funnel.map((f, i) => (
              <div key={f.label}>
                <div className="mb-0.5 flex items-center justify-between text-[10px]">
                  <span className="flex items-center gap-1.5 text-slate-500"><f.icon className="size-3" /> {f.label}</span>
                  <b className="text-slate-700"><Counter to={f.to} /></b>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className={cn('h-full origin-left rounded-full', f.color)}
                    style={{ width: `${f.w}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: EASE }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Pop>
      </div>
    </AppFrame>
  );
}
