'use client';

import { motion } from 'motion/react';
import { CheckCheck, Flame, Snowflake, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/Icon';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { Avatar, EASE, Ring, seeded, Tag } from '@/components/mockups/kit';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { bento } from '@/data/product';

function ScoreVisual() {
  return (
    <div className="flex items-center gap-4">
      <Ring value={82} size={72} stroke={8} color="#10b981">
        <span className="font-display text-base">82</span>
      </Ring>
      <div className="flex flex-col gap-1.5">
        <Tag tone="red">
          <Flame className="size-3" /> Hot
        </Tag>
        <Tag tone="amber">
          <Sun className="size-3" /> Warm
        </Tag>
        <Tag tone="blue">
          <Snowflake className="size-3" /> Cold
        </Tag>
      </div>
    </div>
  );
}

function RoundRobinVisual() {
  const people = ['Aarav Mehta', 'Diya Sharma', 'Kabir Singh', 'Meera Joshi'];
  return (
    <div className="relative mx-auto flex size-28 items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-dashed border-slate-300" />
      <div className="anim-spin absolute inset-0" style={{ '--dur': '16s' }}>
        {people.map((p, i) => {
          const a = (i / people.length) * Math.PI * 2;
          return (
            <span
              key={p}
              className="absolute"
              style={{
                left: `${50 + Math.cos(a) * 50}%`,
                top: `${50 + Math.sin(a) * 50}%`,
                transform: 'translate(-50%,-50%)',
              }}
            >
              <span className="anim-spin-rev block" style={{ '--dur': '16s' }}>
                <Avatar name={p} tone={i} />
              </span>
            </span>
          );
        })}
      </div>
      <span className="flex size-10 items-center justify-center rounded-full bg-brand font-display text-xs font-semibold text-white">
        Lead
      </span>
    </div>
  );
}

function EmiVisual() {
  return (
    <div className="flex items-end gap-1.5">
      {[40, 64, 64, 64].map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 * i, ease: EASE }}
          className={cn('w-8 origin-bottom rounded-lg', i === 0 ? 'bg-emerald-500' : 'bg-brand/20')}
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

function WhatsAppVisual() {
  const bubbles = [
    { t: 'Seats are filling fast for Monday!', me: false },
    { t: 'Share fee details please', me: true },
    { t: 'Sent. Pay a token to reserve', me: false },
  ];
  return (
    <div className="flex flex-col gap-2">
      {bubbles.map((b, i) => (
        <motion.div
          key={b.t}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 * i, duration: 0.5, ease: EASE }}
          className={cn(
            'max-w-[78%] rounded-2xl px-3 py-2 text-[12px] shadow-sm',
            b.me
              ? 'self-end rounded-tr-sm bg-[#d9fdd3] text-slate-800'
              : 'self-start rounded-tl-sm bg-white text-slate-700 ring-1 ring-slate-100',
          )}
        >
          {b.t}
          {b.me && <CheckCheck className="ml-1 inline size-3 text-sky-500" />}
        </motion.div>
      ))}
    </div>
  );
}

function QrVisual() {
  const r = seeded(5);
  const cells = Array.from({ length: 49 }, () => r() > 0.5);
  // One animated container instead of 49 individually observed cells.
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className="grid size-20 grid-cols-7 gap-[2px] rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200"
    >
      {cells.map((on, i) => (
        <span key={i} className={cn('aspect-square rounded-[1px]', on ? 'bg-ink-2' : 'bg-transparent')} />
      ))}
    </motion.div>
  );
}

function AuditVisual() {
  const lines = ['Export: revenue report', 'Role permissions updated', 'Login from new device'];
  return (
    <div className="flex flex-col gap-1.5 font-mono text-[11px] text-slate-500">
      {lines.map((l, i) => (
        <motion.p
          key={l}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 * i, duration: 0.5 }}
          className="flex items-center gap-2 rounded-md bg-slate-50 px-2.5 py-1.5"
        >
          <span className="size-1.5 rounded-full bg-emerald-500" /> {l}
        </motion.p>
      ))}
    </div>
  );
}

function TargetsVisual() {
  const rows = [
    ['Aarav', 92],
    ['Diya', 81],
    ['Kabir', 68],
  ];
  return (
    <div className="flex flex-col gap-2.5">
      {rows.map(([n, v], i) => (
        <div key={n} className="flex items-center gap-3 text-[12px]">
          <span className="w-10 text-slate-500">{n}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-brand to-violet-500"
              style={{ width: `${v}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 * i, ease: EASE }}
            />
          </div>
          <span className="w-8 text-right font-semibold text-slate-700">{v}%</span>
        </div>
      ))}
    </div>
  );
}

const visuals = {
  score: ScoreVisual,
  rr: RoundRobinVisual,
  emi: EmiVisual,
  wa: WhatsAppVisual,
  qr: QrVisual,
  audit: AuditVisual,
  targets: TargetsVisual,
};

const spans = {
  sm: 'lg:col-span-1',
  md: 'lg:col-span-2',
  lg: 'lg:col-span-2 lg:row-span-2',
};

export function BentoGrid() {
  return (
    <Section id="highlights" className="bg-slate-50/70">
      <div className="bg-dots mask-fade-y pointer-events-none absolute inset-0 opacity-40" />
      <SectionHeading
        eyebrow="Built for the details"
        title="The small things that make a {big} difference"
        description="Smart defaults and automation in every corner, so your team spends time on conversations rather than admin."
      />

      <Stagger
        className="relative mt-16 grid auto-rows-[minmax(250px,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        {bento.map((b) => {
          const Visual = visuals[b.id];
          return (
            <StaggerItem key={b.id} className={cn(spans[b.size])}>
              <SpotlightCard className="h-full p-7">
                <div className={cn('flex h-full flex-col', b.size === 'lg' && 'justify-between')}>
                  <div>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_10px_24px_-8px_rgba(25,76,255,0.7)]">
                      <Icon name={b.icon} className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink-2">{b.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{b.text}</p>
                  </div>
                  <div className={cn('mt-6', b.size === 'lg' && 'mt-10')}>{Visual && <Visual />}</div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
