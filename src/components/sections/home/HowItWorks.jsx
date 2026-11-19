'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { ArrowRight, Check, Cable, SlidersHorizontal, Rocket, LineChart } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';

const EASE = [0.22, 1, 0.36, 1];
const AUTO_MS = 6000;

const steps = [
  {
    icon: SlidersHorizontal,
    title: 'Set up your structure',
    text: 'Create teams, categories and courses, define lead sources, and invite admins, counsellors and mentors with the right roles.',
    points: ['Teams for every centre or region', 'Courses grouped by category', 'Role based permissions'],
  },
  {
    icon: Cable,
    title: 'Connect your channels',
    text: 'Point your website forms, WhatsApp, Meta ads and payment gateway at the CRM. Leads start flowing in with full attribution.',
    points: ['Website lead forms with OTP', 'WATI and Meta source mapping', 'Razorpay and email delivery'],
  },
  {
    icon: Rocket,
    title: 'Switch on automation',
    text: 'Turn on round robin assignment, follow-up reminders, drip emails and WhatsApp campaigns. Your team gets a clear daily queue.',
    points: ['Round robin by team and course', 'Overdue and push notifications', 'Scheduled campaigns and retries'],
  },
  {
    icon: LineChart,
    title: 'Measure and grow',
    text: 'Track revenue, conversion, due fees and counsellor performance. Double down on the sources and people that deliver.',
    points: [
      'Revenue, source and status reports',
      'Leaderboards, targets and incentives',
      'Exports for leadership reviews',
    ],
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!inView || !auto) return undefined;
    const t = setTimeout(() => {
      setDirection(1);
      setActive((a) => (a + 1) % steps.length);
    }, AUTO_MS);
    return () => clearTimeout(t);
  }, [inView, auto, active]);

  const select = (i) => {
    setAuto(false);
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  const step = steps[active];

  return (
    <Section id="how-it-works" className="bg-slate-50/70">
      <div className="bg-dots mask-fade-y pointer-events-none absolute inset-0 opacity-40" />
      <SectionHeading
        eyebrow="How it works"
        title="Live in {days}, not months"
        description="A guided setup that mirrors how your admissions team already works."
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
        {/* Stepper */}
        <ol className="relative mb-10 grid grid-cols-4 gap-2">
          <span className="absolute top-5 right-[12.5%] left-[12.5%] h-0.5 rounded bg-slate-200" />
          <motion.span
            className="absolute top-5 left-[12.5%] h-0.5 origin-left rounded bg-gradient-to-r from-brand to-violet-500"
            style={{ width: '75%' }}
            animate={{ scaleX: active / (steps.length - 1) }}
            transition={{ duration: 0.7, ease: EASE }}
          />
          {steps.map((s, i) => {
            const done = i < active;
            const current = i === active;
            return (
              <li key={s.title} className="relative flex flex-col items-center gap-3 text-center">
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-current={current ? 'step' : undefined}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                  className={cn(
                    'relative z-10 flex size-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-500',
                    current
                      ? 'scale-110 border-brand bg-brand text-white shadow-[0_0_0_8px_rgba(25,76,255,0.14)]'
                      : done
                        ? 'border-brand bg-white text-brand'
                        : 'border-slate-300 bg-white text-slate-400 hover:border-slate-400',
                  )}
                >
                  {done ? <Check className="size-4" strokeWidth={3} /> : i + 1}
                </button>
                <span
                  className={cn(
                    'hidden text-[13px] font-medium transition-colors sm:block',
                    current ? 'text-ink-2' : 'text-slate-500',
                  )}
                >
                  {s.title}
                </span>
              </li>
            );
          })}
        </ol>

        {/* Panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.4)] sm:p-12">
          {auto && inView && (
            <motion.span
              key={`bar-${active}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: AUTO_MS / 1000, ease: 'linear' }}
              className="absolute top-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-brand to-violet-500"
            />
          )}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step.title}
              custom={direction}
              variants={{
                enter: (d) => ({ opacity: 0, x: d * 60 }),
                center: { opacity: 1, x: 0 },
                exit: (d) => ({ opacity: 0, x: d * -60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
              className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <p className="font-mono text-xs tracking-widest text-brand uppercase">
                  Step {active + 1} of {steps.length}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink-2">{step.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{step.text}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[15px] text-slate-700">
                      <span className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {active < steps.length - 1 ? (
                    <Button variant="dark" onClick={() => select(active + 1)} className="group">
                      Next step <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button asChild variant="brand" className="group">
                      <Link href="/book-demo">
                        Book your demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center">
                <span
                  className="anim-spin absolute inset-0 rounded-full border border-dashed border-brand/30"
                  style={{ '--dur': '30s' }}
                />
                <span className="absolute inset-6 rounded-full border border-slate-200 bg-slate-50" />
                <span className="absolute inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(25,76,255,0.16),rgba(167,139,250,0.08)_60%,transparent)]" />
                <motion.span
                  key={`icon-${active}`}
                  initial={{ scale: 0.4, rotate: -30, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                  className="relative flex size-28 items-center justify-center rounded-[2rem] bg-brand text-white shadow-[0_30px_60px_-20px_rgba(25,76,255,0.7)]"
                >
                  <step.icon className="size-12" />
                </motion.span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
