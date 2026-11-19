'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, CalendarCheck, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Glow } from '@/components/motion/Glow';

import { site } from '@/config/site';
import { ContactForm } from '@/components/forms/ContactForm';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/home/FaqSection';

const cards = [
  { icon: Mail, title: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}`, note: 'Replies within one business day' },
  { icon: Phone, title: 'Phone', value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, '')}`, note: site.contact.hours },
  { icon: MapPin, title: 'Office', value: site.contact.address, note: 'Visits by appointment' },
];

export function ContactContent() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us {talk}"
        description="Questions about the product, pricing or a partnership? Our team is happy to help."
      />

      <section className="relative px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="flex flex-col gap-4">
            <Stagger className="flex flex-col gap-4">
              {cards.map((c) => {
                const Wrap = c.href ? 'a' : 'div';
                return (
                  <StaggerItem key={c.title}>
                    <Wrap
                      {...(c.href ? { href: c.href } : {})}
                      className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-26px_rgba(25,76,255,0.45)]"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <c.icon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm text-slate-500">{c.title}</span>
                        <span className="mt-0.5 block font-display text-[17px] font-semibold break-words text-ink-2">{c.value}</span>
                        <span className="mt-1 flex items-center gap-1.5 text-[13px] text-slate-400">
                          <Clock className="size-3.5" /> {c.note}
                        </span>
                      </span>
                      {c.href && <ArrowUpRight className="size-5 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />}
                    </Wrap>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal delay={0.3}>
              <Link
                href="/book-demo"
                className="group relative block overflow-hidden rounded-3xl bg-ink p-7 text-white"
              >
                <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-60" />
                <Glow color="brand" alpha={0.6} motion="breathe" dur={6} className="-top-24 -right-24 size-72" />
                <div className="relative flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                    <CalendarCheck className="size-6" />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-xl font-semibold">Prefer a live walkthrough?</p>
                    <p className="text-sm text-slate-400">Pick a time that suits you, takes under a minute.</p>
                  </div>
                  <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <FaqSection className="bg-slate-50/70" />
    </>
  );
}
