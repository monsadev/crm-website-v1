'use client';

import { motion } from 'motion/react';
import { AlertTriangle, CalendarDays, Clock, Users } from 'lucide-react';

import { cn } from '@/lib/utils';
import { AppFrame, Avatar, EASE, Pop, Ring, seeded, Tag } from '@/components/mockups/kit';

const learners = [
  { name: 'Neha Gupta', status: 'Active', tone: 'green', progress: 86, att: 94 },
  { name: 'Karan Malhotra', status: 'Active', tone: 'green', progress: 72, att: 88 },
  { name: 'Sana Khan', status: 'Pause', tone: 'amber', progress: 41, att: 52 },
  { name: 'Vikram Das', status: 'Early drop risk', tone: 'red', progress: 18, att: 31, warn: true },
];

const rand = seeded(7);
const heat = Array.from({ length: 35 }, () => rand());

function heatColor(v) {
  if (v > 0.8) return 'bg-brand';
  if (v > 0.55) return 'bg-brand/60';
  if (v > 0.3) return 'bg-brand/30';
  return 'bg-slate-100';
}

export function CohortMockup({ className }) {
  return (
    <AppFrame url="crm.yourcompany.com/cohorts/fee-summary" className={className}>
      <div className="grid gap-3 bg-slate-50/70 p-3 sm:p-4 lg:grid-cols-5">
        <Pop className="rounded-2xl border border-slate-200/80 bg-white p-3.5 lg:col-span-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[13px] font-semibold text-slate-800">Full Stack Batch 12</p>
              <p className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-400">
                <CalendarDays className="size-3" /> Starts 14 Dec <Clock className="ml-1 size-3" /> 7:00 PM to 9:00 PM
              </p>
            </div>
            <Tag tone="green">Running</Tag>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <Ring value={78} size={64} stroke={7}>
              <span className="text-[13px]">78%</span>
            </Ring>
            <div className="text-[10.5px] text-slate-500">
              <p>
                <b className="text-slate-800">39</b> of 50 seats filled
              </p>
              <p className="mt-0.5 flex items-center gap-1">
                <Users className="size-3" /> 3 mentors assigned
              </p>
              <div className="mt-1 flex -space-x-1.5">
                {['Aarav Mehta', 'Diya Sharma', 'Kabir Singh'].map((n, i) => (
                  <Avatar key={n} name={n} tone={i} size="sm" />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 mb-1.5 text-[10px] font-semibold text-slate-600">Attendance, last 5 weeks</p>
          {/* One animated container instead of 35 individually observed cells. */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            className="grid grid-cols-7 gap-1"
          >
            {heat.map((v, i) => (
              <span key={i} className={cn('aspect-square rounded-[5px]', heatColor(v))} />
            ))}
          </motion.div>

          <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
            {[
              ['Received', '\u20B911.4L', 'text-emerald-600'],
              ['Pending', '\u20B93.2L', 'text-amber-600'],
              ['Discount', '\u20B91.1L', 'text-slate-600'],
            ].map(([k, v, c]) => (
              <div key={k} className="rounded-lg bg-slate-50 py-1.5">
                <p className="text-[9px] text-slate-400">{k}</p>
                <p className={cn('text-[11.5px] font-semibold', c)}>{v}</p>
              </div>
            ))}
          </div>
        </Pop>

        <Pop delay={0.15} className="rounded-2xl border border-slate-200/80 bg-white p-3.5 lg:col-span-3">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[12px] font-semibold text-slate-800">Manage learners</p>
            <div className="flex gap-1.5 text-[9.5px]">
              <Tag tone="slate">Migrate</Tag>
              <Tag tone="blue">Gen certificate</Tag>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {learners.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i + 0.25, duration: 0.5, ease: EASE }}
                className={cn(
                  'rounded-xl border p-2.5',
                  l.warn ? 'border-rose-200 bg-rose-50/50' : 'border-slate-100 bg-white',
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Avatar name={l.name} tone={i + 2} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-slate-800">{l.name}</p>
                    <p className="text-[9.5px] text-slate-400">Attendance {l.att}%</p>
                  </div>
                  {l.warn && <AlertTriangle className="size-3.5 text-rose-500" />}
                  <Tag tone={l.tone}>{l.status}</Tag>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className={cn(
                      'h-full origin-left rounded-full',
                      l.progress > 60 ? 'bg-emerald-500' : l.progress > 35 ? 'bg-amber-400' : 'bg-rose-400',
                    )}
                    style={{ width: `${l.progress}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: EASE }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Pop>
      </div>
    </AppFrame>
  );
}
