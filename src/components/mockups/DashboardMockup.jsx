'use client';

import { motion } from 'motion/react';
import {
  BarChart3,
  Bell,
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Counter } from '@/components/motion/Counter';
import { AppFrame, Avatar, AreaChart, EASE, Pop, Ring } from '@/components/mockups/kit';

const nav = [LayoutDashboard, Users, Target, GraduationCap, Wallet, BarChart3, MessageCircle, ShieldCheck];

const kpis = [
  { label: 'Fresh leads', to: 1284, delta: '+12.4%', color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Active pipeline', to: 642, delta: '+6.1%', color: 'text-violet-600', bg: 'bg-violet-50' },
  { label: 'Conversions', to: 187, delta: '+18.2%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Revenue', to: 48.2, prefix: '\u20B9', suffix: 'L', decimals: 1, delta: '+22%', color: 'text-amber-600', bg: 'bg-amber-50' },
];

const stages = [
  { label: 'New', v: 100, c: 'bg-slate-300' },
  { label: 'Contacted', v: 78, c: 'bg-blue-300' },
  { label: 'Demo', v: 54, c: 'bg-blue-400' },
  { label: 'Negotiation', v: 33, c: 'bg-brand-2' },
  { label: 'Converted', v: 21, c: 'bg-brand' },
];

const team = [
  { name: 'Aarav Mehta', v: 92, tone: 0 },
  { name: 'Diya Sharma', v: 81, tone: 1 },
  { name: 'Kabir Singh', v: 74, tone: 2 },
  { name: 'Meera Joshi', v: 63, tone: 3 },
];

const current = [0.28, 0.4, 0.34, 0.52, 0.46, 0.64, 0.58, 0.76, 0.7, 0.88];
const previous = [0.2, 0.26, 0.3, 0.33, 0.4, 0.38, 0.5, 0.48, 0.56, 0.62];

export function DashboardMockup({ className, compact = false }) {
  return (
    <AppFrame url="crm.yourcompany.com/dashboard" className={className}>
      <div className="flex bg-slate-50/60">
        <aside className="hidden w-12 shrink-0 flex-col items-center gap-3 border-r border-slate-100 bg-white py-3 sm:flex">
          <img src="/images/logo-mark.svg" alt="" className="mb-1 size-7" />
          {nav.map((Icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              className={cn(
                'flex size-8 items-center justify-center rounded-lg text-slate-400',
                i === 0 && 'bg-brand/10 text-brand'
              )}
            >
              <Icon className="size-4" />
            </motion.span>
          ))}
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <p className="text-[13px] font-semibold text-slate-800">Good morning, Admin</p>
              <p className="text-[10px] text-slate-400">Here is what is happening across your teams today</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="hidden items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-500 sm:inline-flex">
                <Search className="size-3" /> Search leads
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-500">
                <CalendarDays className="size-3" /> This month
              </span>
              <span className="relative inline-flex size-6 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500">
                <Bell className="size-3" />
                <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-rose-500" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {kpis.map((k, i) => (
              <Pop key={k.label} delay={0.08 * i} className="rounded-xl border border-slate-200/80 bg-white p-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">{k.label}</span>
                  <span className={cn('flex size-5 items-center justify-center rounded-md', k.bg, k.color)}>
                    <TrendingUp className="size-3" />
                  </span>
                </div>
                <p className="mt-1 font-display text-lg font-semibold text-slate-800">
                  <Counter to={k.to} prefix={k.prefix} suffix={k.suffix} decimals={k.decimals} />
                </p>
                <span className="text-[9.5px] font-semibold text-emerald-600">{k.delta} vs last month</span>
              </Pop>
            ))}
          </div>

          <div className={cn('mt-2 grid gap-2', compact ? 'grid-cols-1' : 'lg:grid-cols-5')}>
            <Pop delay={0.3} className="rounded-xl border border-slate-200/80 bg-white p-3 lg:col-span-3">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-slate-700">Revenue trend</p>
                <div className="flex items-center gap-2 text-[9px] text-slate-400">
                  <span className="inline-flex items-center gap-1"><i className="size-1.5 rounded-full bg-brand" /> This period</span>
                  <span className="inline-flex items-center gap-1"><i className="size-1.5 rounded-full bg-slate-300" /> Previous</span>
                </div>
              </div>
              <div className="h-28 sm:h-32">
                <AreaChart
                  series={[
                    { data: current, color: '#194cff' },
                    { data: previous, color: '#cbd5e1', dashed: true, width: 1.6 },
                  ]}
                />
              </div>
            </Pop>

            <Pop delay={0.4} className="rounded-xl border border-slate-200/80 bg-white p-3 lg:col-span-2">
              <p className="mb-2 text-[11px] font-semibold text-slate-700">Pipeline by stage</p>
              <div className="flex flex-col gap-1.5">
                {stages.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="w-14 text-[9.5px] text-slate-500">{s.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className={cn('h-full origin-left rounded-full', s.c)}
                        style={{ width: `${s.v}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * i + 0.4, ease: EASE }}
                      />
                    </div>
                    <span className="w-6 text-right text-[9.5px] font-medium text-slate-600">{s.v}%</span>
                  </div>
                ))}
              </div>
            </Pop>
          </div>

          {!compact && (
            <Pop delay={0.5} className="mt-2 rounded-xl border border-slate-200/80 bg-white p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-slate-700">Counsellor leaderboard</p>
                <span className="text-[9.5px] font-medium text-brand">View all</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {team.map((t, i) => (
                  <div key={t.name} className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-1.5">
                    <span className="w-3 text-[10px] font-bold text-slate-400">{i + 1}</span>
                    <Avatar name={t.name} tone={t.tone} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10.5px] font-medium text-slate-700">{t.name}</p>
                      <p className="text-[9px] text-slate-400">Target achieved</p>
                    </div>
                    <Ring value={t.v} size={30} stroke={4} delay={0.1 * i}>
                      <span className="text-[8px]">{t.v}</span>
                    </Ring>
                  </div>
                ))}
              </div>
            </Pop>
          )}
        </div>
      </div>
    </AppFrame>
  );
}
