'use client';

import { motion } from 'motion/react';
import { Flame, Phone, Snowflake, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';
import { AppFrame, Avatar, EASE, Ring, Tag } from '@/components/mockups/kit';

const columns = [
  {
    title: 'Assigned',
    tone: 'bg-slate-400',
    leads: [
      { name: 'Rohan Verma', course: 'Data Analytics', score: 46, temp: 'cold', who: 'Aarav Mehta' },
      { name: 'Isha Kapoor', course: 'Digital Marketing', score: 62, temp: 'warm', who: 'Diya Sharma' },
    ],
  },
  {
    title: 'Demo scheduled',
    tone: 'bg-violet-500',
    leads: [
      { name: 'Priya Nair', course: 'Full Stack', score: 78, temp: 'hot', who: 'Kabir Singh', pulse: true },
      { name: 'Arjun Rao', course: 'Cyber Security', score: 55, temp: 'warm', who: 'Meera Joshi' },
    ],
  },
  {
    title: 'Follow-up',
    tone: 'bg-amber-500',
    leads: [
      { name: 'Sana Khan', course: 'Full Stack', score: 71, temp: 'hot', who: 'Aarav Mehta' },
      { name: 'Vikram Das', course: 'Data Analytics', score: 38, temp: 'cold', who: 'Diya Sharma' },
    ],
  },
  {
    title: 'Converted',
    tone: 'bg-emerald-500',
    leads: [
      { name: 'Neha Gupta', course: 'Digital Marketing', score: 94, temp: 'hot', who: 'Kabir Singh', done: true },
      { name: 'Karan Malhotra', course: 'Full Stack', score: 91, temp: 'hot', who: 'Meera Joshi', done: true },
    ],
  },
];

const tempMap = {
  hot: { icon: Flame, label: 'Hot', tone: 'red' },
  warm: { icon: Sun, label: 'Warm', tone: 'amber' },
  cold: { icon: Snowflake, label: 'Cold', tone: 'blue' },
};

function LeadCard({ lead, i, col }) {
  const t = tempMap[lead.temp];
  const TempIcon = t.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.1 * (col * 2 + i), ease: EASE }}
      className={cn(
        'relative rounded-xl border bg-white p-2.5 shadow-[0_6px_16px_-10px_rgba(15,23,42,0.25)]',
        lead.pulse ? 'border-brand/40 ring-4 ring-brand/10' : 'border-slate-200/80'
      )}
    >
      {lead.pulse && (
        <motion.span
          className="absolute -top-1.5 -right-1.5 size-3 rounded-full bg-brand"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      )}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-slate-800">{lead.name}</p>
          <p className="truncate text-[9.5px] text-slate-400">{lead.course}</p>
        </div>
        <Ring value={lead.score} size={28} stroke={3.5} color={lead.score > 70 ? '#10b981' : lead.score > 50 ? '#f59e0b' : '#94a3b8'}>
          <span className="text-[8px]">{lead.score}</span>
        </Ring>
      </div>
      <div className="mt-2 flex items-center justify-between">
        {lead.done ? (
          <Tag tone="green">Enrolled</Tag>
        ) : (
          <Tag tone={t.tone}>
            <TempIcon className="size-2.5" /> {t.label}
          </Tag>
        )}
        <div className="flex items-center gap-1.5 text-slate-300">
          <Phone className="size-3" />
          <Avatar name={lead.who} tone={col + i} size="sm" />
        </div>
      </div>
    </motion.div>
  );
}

export function PipelineMockup({ className }) {
  return (
    <AppFrame url="crm.yourcompany.com/lead-management/leads" className={className}>
      <div className="bg-slate-50/70 p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-semibold text-slate-800">Lead management</p>
            <Tag tone="blue">Round robin on</Tag>
          </div>
          <div className="flex gap-1.5 text-[10px]">
            {['All sources', 'All courses', 'This month'].map((f) => (
              <span key={f} className="rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-500">
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {columns.map((c, ci) => (
            <div key={c.title} className="rounded-2xl bg-slate-100/70 p-2">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="flex items-center gap-1.5 text-[10.5px] font-semibold text-slate-600">
                  <i className={cn('size-2 rounded-full', c.tone)} />
                  {c.title}
                </span>
                <span className="rounded-full bg-white px-1.5 text-[9px] font-semibold text-slate-500">{c.leads.length * 12}</span>
              </div>
              <div className="flex flex-col gap-2">
                {c.leads.map((l, i) => (
                  <LeadCard key={l.name} lead={l} i={i} col={ci} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}
