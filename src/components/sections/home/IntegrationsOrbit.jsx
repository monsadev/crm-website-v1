'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/Icon';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { integrations } from '@/data/product';

const rings = [
  { size: 'size-[48%]', items: [0, 1], duration: 30, reverse: false },
  { size: 'size-[74%]', items: [2, 3, 4], duration: 44, reverse: true },
  { size: 'size-[96%]', items: [5, 6, 7], duration: 60, reverse: false },
];

function Ring({ ring, offset }) {
  return (
    <div
      className={cn(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300',
        ring.size,
      )}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: ring.reverse ? -360 : 360 }}
        transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
      >
        {ring.items.map((idx, i) => {
          const a = (i / ring.items.length) * Math.PI * 2 + offset;
          const item = integrations[idx];
          return (
            <span
              key={item.name}
              className="absolute"
              style={{
                left: `${50 + Math.cos(a) * 50}%`,
                top: `${50 + Math.sin(a) * 50}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Counter-rotate so the chip stays upright. Icon only, so chips never collide; name shows on hover. */}
              <motion.span
                className="group/chip relative flex"
                animate={{ rotate: ring.reverse ? 360 : -360 }}
                transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
              >
                <span
                  tabIndex={0}
                  aria-label={item.name}
                  className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand shadow-[0_12px_30px_-12px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover/chip:scale-110 group-hover/chip:border-brand/40 group-hover/chip:bg-brand group-hover/chip:text-white sm:size-12"
                >
                  <Icon name={item.icon} className="size-5" />
                </span>
                <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 translate-y-1 rounded-lg bg-ink-2 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover/chip:translate-y-0 group-hover/chip:opacity-100 group-focus-within/chip:opacity-100">
                  {item.name}
                </span>
              </motion.span>
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export function IntegrationsOrbit() {
  return (
    <Section id="integrations" className="overflow-hidden">
      <SectionHeading
        eyebrow="Integrations"
        title="Plugged into the {tools} that run your business"
        description="Payments, WhatsApp, ads, email, storage and learning platforms are connected out of the box and kept in sync."
      />

      <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
        <Reveal direction="scale" className="relative mx-auto aspect-square w-full max-w-[min(500px,86vw)]">
          <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-brand/15 via-sky-200/10 to-violet-400/15 blur-2xl" />
          <div className="bg-dots mask-radial absolute inset-0 rounded-full opacity-60" />
          {rings.map((r, i) => (
            <Ring key={i} ring={r} offset={i * 0.9} />
          ))}
          {/* Pulses travelling from the hub to the rings */}
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/30"
              animate={{ scale: [1, 5.2], opacity: [0.6, 0] }}
              transition={{ duration: 4.5, delay: i * 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.7rem] bg-white shadow-[0_30px_60px_-20px_rgba(25,76,255,0.55)] ring-1 ring-slate-200">
            <Image
              src="/images/logo-mark.svg"
              alt="WsCube CRM"
              width={52}
              height={52}
              className="relative size-[52px]"
            />
            <span className="mt-1 text-[10px] font-semibold tracking-wide text-slate-500">CRM HUB</span>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {integrations.map((item) => (
            <StaggerItem key={item.name}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-26px_rgba(25,76,255,0.4)]">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink-2">{item.name}</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
