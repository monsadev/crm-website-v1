'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Compass, Target } from 'lucide-react';
import { Glow } from '@/components/motion/Glow';

import { Icon } from '@/components/Icon';
import { Counter } from '@/components/motion/Counter';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { SplitHeading } from '@/components/motion/SplitHeading';
import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { DashboardMockup } from '@/components/mockups/DashboardMockup';
import { PipelineMockup } from '@/components/mockups/PipelineMockup';
import { modules, timeline, values } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];

function ScrollStatement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] });
  const words =
    'We believe admissions teams should spend their day talking to learners, not chasing spreadsheets. So we built one place where every enquiry, conversation, payment and certificate lives together.'.split(
      ' ',
    );
  return (
    <section ref={ref} className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="font-display text-[clamp(1.6rem,3.6vw,2.9rem)] leading-[1.25] font-medium tracking-tight">
        {words.map((w, i) => {
          const start = i / words.length;
          return (
            <Word key={`${w}-${i}`} word={w} progress={scrollYProgress} range={[start, start + 1 / words.length]} />
          );
        })}
      </p>
    </section>
  );
}

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const accent = ['learners,', 'one', 'place'].includes(word);
  return (
    <motion.span style={{ opacity }} className={accent ? 'font-serif font-normal italic text-gradient' : 'text-ink-2'}>
      {word}{' '}
    </motion.span>
  );
}

function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
      <span className="absolute top-0 bottom-0 left-4 w-px bg-slate-200 sm:left-1/2" />
      <motion.span
        style={{ scaleY }}
        className="absolute top-0 bottom-0 left-[15px] w-[3px] origin-top rounded bg-gradient-to-b from-brand to-violet-500 sm:left-[calc(50%-1px)]"
      />
      <ol className="flex flex-col gap-12">
        {timeline.map((t, i) => {
          const right = i % 2 === 1;
          return (
            <li key={t.title} className="relative grid items-center gap-6 pl-12 sm:grid-cols-2 sm:pl-0">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                className="absolute top-6 left-[7px] z-10 size-5 rounded-full border-4 border-white bg-brand shadow-[0_0_0_4px_rgba(25,76,255,0.18)] sm:left-[calc(50%-10px)]"
              />
              <motion.div
                initial={{ opacity: 0, x: right ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: EASE }}
                className={right ? 'sm:col-start-2 sm:pl-12' : 'sm:pr-12 sm:text-right'}
              >
                <p className="font-mono text-xs tracking-widest text-brand uppercase">{t.year}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink-2">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{t.text}</p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function AboutContent() {
  const collageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: collageRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built by educators, for the people who {grow} education"
        description="WsCube CRM is made by WsCube Tech. We run admissions ourselves, so we built the platform we always wanted: fast for counsellors, clear for managers and trustworthy for finance."
      />

      {/* Collage */}
      <div ref={collageRef} className="relative mx-auto -mt-6 grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-5">
        <motion.div style={{ y: y1 }} className="lg:col-span-3">
          <DashboardMockup compact />
        </motion.div>
        <motion.div style={{ y: y2 }} className="lg:col-span-2 lg:mt-24">
          <PipelineMockup />
        </motion.div>
      </div>

      <ScrollStatement />

      {/* Numbers */}
      <section className="px-5 sm:px-8">
        <Stagger className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: modules.length, suffix: '', label: 'Product modules' },
            { to: 90, suffix: '+', label: 'Screens and workflows' },
            { to: 12, suffix: '+', label: 'Reports and dashboards' },
            { to: 24, suffix: 'x7', label: 'Background automation' },
          ].map((s) => (
            <StaggerItem key={s.label}>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                <p className="font-display text-5xl font-semibold text-gradient">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Mission and vision */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Target,
              label: 'Our mission',
              title: 'Give every learner a great first experience',
              text: 'Fast responses, clear fees, smooth payments and a welcoming onboarding. When the system handles the routine, counsellors can focus on guidance.',
              dark: true,
            },
            {
              icon: Compass,
              label: 'Our vision',
              title: 'The operating system for education businesses',
              text: 'One platform from the first ad click to the final certificate, with the data to make every decision with confidence.',
              dark: false,
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.12} direction={i ? 'left' : 'right'}>
              <div
                className={
                  c.dark
                    ? 'relative h-full overflow-hidden rounded-[2rem] bg-ink p-10 text-white'
                    : 'relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10'
                }
              >
                {c.dark && <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-60" />}
                {c.dark ? (
                  <Glow color="brand" alpha={0.5} className="-top-32 -right-32 size-[26rem]" />
                ) : (
                  <Glow color="violet-light" alpha={0.35} className="-bottom-32 -left-32 size-[26rem]" />
                )}
                <div className="relative">
                  <span
                    className={
                      c.dark
                        ? 'flex size-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300'
                        : 'flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand'
                    }
                  >
                    <c.icon className="size-6" />
                  </span>
                  <p
                    className={
                      c.dark
                        ? 'mt-6 font-mono text-xs tracking-widest text-sky-300 uppercase'
                        : 'mt-6 font-mono text-xs tracking-widest text-brand uppercase'
                    }
                  >
                    {c.label}
                  </p>
                  <h3
                    className={
                      c.dark
                        ? 'mt-2 font-display text-3xl font-semibold'
                        : 'mt-2 font-display text-3xl font-semibold text-ink-2'
                    }
                  >
                    {c.title}
                  </h3>
                  <p
                    className={
                      c.dark
                        ? 'mt-4 text-[16px] leading-relaxed text-slate-300'
                        : 'mt-4 text-[16px] leading-relaxed text-slate-600'
                    }
                  >
                    {c.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50/70">
        <div className="bg-dots mask-fade-y pointer-events-none absolute inset-0 opacity-40" />
        <SectionHeading eyebrow="What we value" title="The principles behind {every} screen" />
        <Stagger className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <SpotlightCard className="h-full p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <Icon name={v.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-2">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{v.text}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Story */}
      <Section>
        <SectionHeading eyebrow="Our story" title="How we got {here}" />
        <Timeline />
      </Section>

      {/* Parent company */}
      <section className="px-5 pb-24 sm:px-8">
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm sm:p-14">
          <SplitHeading
            text="Backed by {WsCube Tech}"
            className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold text-ink-2"
          />
          <p className="max-w-2xl text-[16px] leading-relaxed text-slate-600">
            WsCube Tech is an education company that trains learners online and across its centres. WsCube CRM grew out
            of running that operation every day, and every module is tested on a real admissions floor before it ships.
          </p>
        </Reveal>
      </section>
    </>
  );
}
