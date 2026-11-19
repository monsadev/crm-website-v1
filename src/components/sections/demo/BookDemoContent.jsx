'use client';

import { Clock, Sparkles, Video } from 'lucide-react';

import { DemoStepper } from '@/components/forms/DemoStepper';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { Marquee } from '@/components/motion/Marquee';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/sections/PageHero';
import { modules } from '@/data/product';

const perks = [
  { icon: Clock, title: '30 minutes', text: 'Focused on your workflow' },
  { icon: Video, title: 'Live and online', text: 'Ask anything as we go' },
  { icon: Sparkles, title: 'No commitment', text: 'Free, no card needed' },
];

export function BookDemoContent() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title="See WsCube CRM {in action}"
        description="Tell us a little about your team and pick a time. We will tailor the walkthrough to the modules that matter to you."
      >
        <Stagger className="mx-auto mt-2 grid max-w-3xl gap-3 sm:grid-cols-3">
          {perks.map((p) => (
            <StaggerItem key={p.title}>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-left backdrop-blur">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <p.icon className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-[15px] font-semibold text-ink-2">{p.title}</span>
                  <span className="block text-[13px] text-slate-500">{p.text}</span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </PageHero>

      <section className="relative px-3 pb-20 sm:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <DemoStepper />
        </Reveal>
      </section>

      <section className="pb-24">
        <Reveal className="mb-6 text-center">
          <p className="text-[13px] font-medium tracking-[0.18em] text-slate-400 uppercase">Modules you can explore in your demo</p>
        </Reveal>
        <Marquee className="mask-fade-x" duration={50}>
          {modules.map((m) => (
            <span key={m.id} className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[14px] font-medium whitespace-nowrap text-ink-2 shadow-sm">
              <Icon name={m.icon} className="size-4 text-brand" />
              {m.title}
            </span>
          ))}
        </Marquee>
      </section>
    </>
  );
}
