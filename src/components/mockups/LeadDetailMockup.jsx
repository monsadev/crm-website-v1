'use client';

import { motion } from 'motion/react';
import { BellRing, CalendarClock, CheckCircle2, Flame, GraduationCap, MessageSquareText, Phone, UserRoundCheck, Wallet } from 'lucide-react';

import { cn } from '@/lib/utils';
import { AppFrame, Avatar, EASE, Pop, Ring, Tag } from '@/components/mockups/kit';

const timeline = [
  { icon: UserRoundCheck, tone: 'bg-blue-100 text-blue-600', title: 'Lead assigned by round robin', meta: 'to Kabir Singh', time: '10:02 AM' },
  { icon: Phone, tone: 'bg-violet-100 text-violet-600', title: 'Call connected, demo interested', meta: 'Status: Demo interested', time: '10:24 AM' },
  { icon: Flame, tone: 'bg-amber-100 text-amber-600', title: 'Lead score updated +10', meta: 'Temperature moved to Hot', time: '10:24 AM' },
  { icon: GraduationCap, tone: 'bg-emerald-100 text-emerald-600', title: 'Demo attended', meta: 'Full Stack, Batch 12', time: '02:30 PM' },
  { icon: Wallet, tone: 'bg-rose-100 text-rose-600', title: 'Payment link shared', meta: 'EMI plan, 3 instalments', time: '03:05 PM' },
];

export function LeadDetailMockup({ className }) {
  return (
    <AppFrame url="crm.yourcompany.com/lead-management/leads/details" className={className}>
      <div className="grid gap-3 bg-slate-50/70 p-3 sm:p-4 lg:grid-cols-5">
        <Pop className="rounded-2xl border border-slate-200/80 bg-white p-3.5 lg:col-span-2">
          <div className="flex items-start gap-3">
            <Avatar name="Priya Nair" tone={1} size="lg" />
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-slate-800">Priya Nair</p>
              <p className="text-[10px] text-slate-400">+91 98xxx xx210 &middot; Jodhpur</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                <Tag tone="violet">Demo attended</Tag>
                <Tag tone="red"><Flame className="size-2.5" /> Hot</Tag>
              </div>
            </div>
            <Ring value={78} size={46} stroke={5} color="#10b981">
              <span className="text-[11px]">78</span>
            </Ring>
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
            {[
              ['Course', 'Full Stack'],
              ['Source', 'Meta Ads'],
              ['Counsellor', 'Kabir Singh'],
              ['Team', 'Jodhpur'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-slate-50 px-2.5 py-1.5">
                <dt className="text-slate-400">{k}</dt>
                <dd className="font-medium text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            className="mt-3 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-2.5"
          >
            <motion.span
              animate={{ rotate: [0, -12, 12, -8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.2 }}
              className="flex size-8 items-center justify-center rounded-lg bg-white text-amber-600 shadow-sm"
            >
              <BellRing className="size-4" />
            </motion.span>
            <div>
              <p className="text-[10.5px] font-semibold text-amber-800">Follow-up due in 2 hours</p>
              <p className="text-[9.5px] text-amber-700/80">Confirm EMI plan and share the payment link</p>
            </div>
          </motion.div>

          <div className="mt-3 grid grid-cols-3 gap-1.5 text-[10px] font-medium">
            {[
              [Phone, 'Call'],
              [MessageSquareText, 'WhatsApp'],
              [CalendarClock, 'Follow-up'],
            ].map(([Ico, label]) => (
              <span key={label} className="inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white py-1.5 text-slate-600">
                <Ico className="size-3" /> {label}
              </span>
            ))}
          </div>
        </Pop>

        <Pop delay={0.15} className="rounded-2xl border border-slate-200/80 bg-white p-3.5 lg:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-1 rounded-lg bg-slate-100 p-0.5 text-[10px] font-medium">
              {['Timeline', 'Notes', 'Payments'].map((t, i) => (
                <span key={t} className={cn('rounded-md px-2.5 py-1', i === 0 ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500')}>
                  {t}
                </span>
              ))}
            </div>
            <span className="text-[9.5px] text-slate-400">Activity timeline</span>
          </div>
          <ol className="relative flex flex-col gap-3.5 pl-1">
            <span className="absolute top-2 bottom-2 left-[15px] w-px bg-slate-200" />
            {timeline.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 * i + 0.2, ease: EASE }}
                className="relative flex items-start gap-3"
              >
                <span className={cn('z-10 flex size-[26px] shrink-0 items-center justify-center rounded-full ring-4 ring-white', t.tone)}>
                  <t.icon className="size-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium text-slate-800">{t.title}</p>
                  <p className="text-[9.5px] text-slate-400">{t.meta}</p>
                </div>
                <span className="text-[9px] text-slate-400">{t.time}</span>
              </motion.li>
            ))}
          </ol>
          <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-medium text-emerald-700">
            <CheckCircle2 className="size-3.5" /> Every action is saved to the lead history automatically
          </div>
        </Pop>
      </div>
    </AppFrame>
  );
}
