'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BellRing,
  Check,
  Fingerprint,
  KeyRound,
  Laptop,
  Lock,
  ScrollText,
  ShieldCheck,
  Users,
} from 'lucide-react';

import { Counter } from '@/components/motion/Counter';
import { Marquee } from '@/components/motion/Marquee';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SecurityMockup } from '@/components/mockups/SecurityMockup';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Glow } from '@/components/motion/Glow';

const stats = [
  { to: 3, suffix: '', label: 'Sign-in methods', sub: 'App, email or SMS' },
  { to: 1, suffix: '', label: 'Active session', sub: 'Per user, per device' },
  { to: 90, suffix: ' days', label: 'Password rotation', sub: 'Enforced by policy' },
  { to: 100, suffix: '%', label: 'Exports logged', sub: 'With who, when, where' },
];

const pillars = [
  {
    icon: Fingerprint,
    title: 'Multi-factor sign-in',
    text: 'Every account can require a second step. Backup codes keep people in if they lose a phone.',
    chips: ['Authenticator', 'Email OTP', 'SMS'],
  },
  {
    icon: Laptop,
    title: 'Device bound sessions',
    text: 'A session works only on the device that signed in. A new login ends the old one instantly.',
    chips: ['Single session', 'Auto logout'],
  },
  {
    icon: Users,
    title: 'Granular permissions',
    text: 'Module and action level access, scoped by team and course. Sensitive areas are Super Admin only.',
    chips: ['Roles', 'Team scope', 'Course scope'],
  },
  {
    icon: ScrollText,
    title: 'Complete audit trail',
    text: 'Exports, logins, permission changes and deletions are recorded with device and location details.',
    chips: ['Exports', 'Logins', 'Deletes'],
  },
  {
    icon: BellRing,
    title: 'Real-time alerts',
    text: 'Security contacts get an email for off-hours or Sunday logins, failed attempts and permission changes.',
    chips: ['Off-hours', 'Failed login'],
  },
  {
    icon: KeyRound,
    title: 'Password hygiene',
    text: 'Passwords expire on a schedule, and changing one signs the user out everywhere else.',
    chips: ['90 day policy', 'Forced reset'],
  },
];

const strip = [
  'Role based access control',
  'Team level data scoping',
  'Multi-factor authentication',
  'Device bound sessions',
  'Encrypted in transit',
  'Export audit logs',
  'Login alerts',
  'Password expiry',
  'Super Admin only areas',
];

export function SecuritySection() {
  return (
    <section id="security" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="bg-grid-dark mask-fade-y pointer-events-none absolute inset-0 opacity-50" />
      <Glow color="brand" alpha={0.3} motion="drift" dur={16} dx={50} dy={40} className="top-[18%] -left-56 size-[46rem]" />
      <Glow color="violet-dark" alpha={0.22} motion="drift" dur={18} dx={-50} dy={-30} className="-right-56 -bottom-20 size-[42rem]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Intro + live mockup */}
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading
              dark
              align="left"
              eyebrow="Security and control"
              title="Enterprise grade {protection}, zero friction"
              description="Learner records and revenue data deserve serious protection. Security sits in the foundation of WsCube CRM, and it stays out of your team's way."
            />

            <Stagger
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10"
              stagger={0.08}
            >
              {stats.map((s) => (
                <StaggerItem key={s.label} className="bg-ink/90 p-5">
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    <span className="text-gradient-light">
                      <Counter to={s.to} suffix={s.suffix} />
                    </span>
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-white/90">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product#security"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-2 transition hover:bg-slate-100"
              >
                Explore security <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <Lock className="size-4" /> Privacy policy
              </Link>
            </Reveal>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-brand/20 blur-3xl" />
            <SecurityMockup dark />
          </div>
        </div>

        {/* Pillars */}
        <Stagger className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {pillars.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <span className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-brand/0 blur-2xl transition-colors duration-500 group-hover:bg-brand/40" />
                <div className="relative flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                    <p.icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-white/25">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="relative mt-2 text-[14.5px] leading-relaxed text-slate-400">{p.text}</p>
                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11.5px] text-white/75"
                    >
                      <Check className="size-3 text-emerald-400" /> {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Moving trust strip */}
      <Reveal className="relative mt-16">
        <Marquee className="mask-fade-x" duration={38} gap="0.75rem">
          {strip.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium whitespace-nowrap text-white/80"
            >
              <ShieldCheck className="size-4 text-sky-300" /> {s}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
