'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowRight, BellRing, CheckCircle2, Play, ShieldCheck, Sparkles, UserPlus, Wallet } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/motion/Magnetic';
import { Reveal } from '@/components/motion/Reveal';
import { SplitHeading } from '@/components/motion/SplitHeading';
import { TiltCard } from '@/components/motion/TiltCard';
import { DashboardMockup } from '@/components/mockups/DashboardMockup';
import { ProductTour } from '@/components/sections/home/ProductTour';

const EASE = [0.22, 1, 0.36, 1];

const trust = ['Round robin assignment', 'WhatsApp automation', 'EMI and invoices', 'Role based access', 'MFA secured'];

// Floating notification that springs in after the product shot, then bobs gently.
function FloatingCard({ className, delay, from = 'left', amplitude = 9, children }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.6, x: from === 'left' ? -40 : 40, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ type: 'spring', stiffness: 160, damping: 16, delay }}
    >
      <motion.div
        animate={{ y: [0, -amplitude, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Toast({ icon: Ico, tone, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2.5 text-left shadow-[0_24px_50px_-18px_rgba(2,6,23,0.4)] backdrop-blur xl:px-4 xl:py-3">
      <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${tone}`}>
        <Ico className="size-4" />
      </span>
      <div>
        <p className="text-[12px] font-semibold whitespace-nowrap text-slate-800">{title}</p>
        <p className="text-[10.5px] whitespace-nowrap text-slate-500">{text}</p>
      </div>
    </div>
  );
}

export function Hero() {
  const [tourOpen, setTourOpen] = useState(false);
  const sectionRef = useRef(null);
  const shotRef = useRef(null);

  // Cursor-following spotlight on the hero backdrop.
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(25,76,255,0.13), transparent 65%)`;

  function onMove(e) {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  // Product shot straightens and grows as it scrolls in, then drifts up slightly.
  const { scrollYProgress } = useScroll({ target: shotRef, offset: ['start 95%', 'start 25%'] });
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [20, 0]), { stiffness: 90, damping: 24 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.9, 1]), { stiffness: 90, damping: 24 });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.55, 1]);

  const { scrollYProgress: outProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const contentY = useTransform(outProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(outProgress, [0, 0.45], [1, 0]);

  return (
    <section ref={sectionRef} onMouseMove={onMove} className="relative isolate overflow-hidden pt-32 pb-10 sm:pt-40">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-80" />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <motion.div
          className="absolute -top-40 left-[8%] size-[34rem] rounded-full bg-brand/25 blur-[130px]"
          animate={{ x: [0, 70, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -top-24 right-[4%] size-[30rem] rounded-full bg-violet-400/25 blur-[130px]"
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-72 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-sky-300/25 blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Light beams */}
        {[18, 50, 82].map((left, i) => (
          <motion.span
            key={left}
            className="absolute top-0 h-[60%] w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent"
            style={{ left: `${left}%` }}
            initial={{ opacity: 0, y: '-60%' }}
            animate={{ opacity: [0, 1, 0], y: ['-60%', '60%'] }}
            transition={{ duration: 6, delay: 1.5 + i * 1.8, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <Link
            href="/product#whatsapp"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-brand/20 bg-white/80 py-1 pr-4 pl-1.5 text-[13px] font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-brand/40"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
              <Sparkles className="size-3" /> New
            </span>
            WhatsApp campaigns, chatbot and lead capture
            <ArrowRight className="size-3.5 text-brand transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <SplitHeading
          as="h1"
          text="Turn every enquiry into an {enrolment}, on autopilot"
          delay={0.35}
          amount={0.2}
          className="mt-7 max-w-5xl text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[1.02] font-semibold text-ink-2"
        />

        <Reveal delay={0.9} duration={0.9} className="mt-7 max-w-2xl">
          <p className="text-[clamp(1.05rem,1.5vw,1.22rem)] leading-relaxed text-slate-600">
            WsCube CRM is the all-in-one admissions and revenue platform. Capture leads, automate WhatsApp, collect
            payments with EMI, run cohorts and issue certificates from one workspace.
          </p>
        </Reveal>

        <Reveal delay={1.05} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Magnetic>
            <Button asChild variant="brand" size="xl" className="group overflow-hidden">
              <Link href="/book-demo">
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Book a Demo
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </Magnetic>
          <Button variant="outline" size="xl" onClick={() => setTourOpen(true)} className="group">
            <span className="relative flex size-6 items-center justify-center rounded-full bg-brand text-white">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand/50" />
              <Play className="relative size-3 fill-current" />
            </span>
            Watch product tour
          </Button>
        </Reveal>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 1.25 } } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-slate-500"
        >
          {trust.map((t) => (
            <motion.li
              key={t}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="inline-flex items-center gap-1.5"
            >
              <CheckCircle2 className="size-4 text-emerald-500" /> {t}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Product shot: narrower on laptops, full width only on large monitors */}
      <motion.div
        ref={shotRef}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.1, ease: EASE }}
        className="relative mx-auto mt-16 w-full max-w-[min(58rem,92vw)] px-3 sm:mt-20 sm:px-8 2xl:max-w-[64rem] min-[1800px]:max-w-6xl"
        style={{ perspective: 1800 }}
      >
        <motion.div style={{ rotateX, scale, opacity, transformOrigin: 'center top' }} className="relative">
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-[3rem] bg-gradient-to-b from-brand/20 via-violet-400/10 to-transparent blur-2xl" />
          <TiltCard max={3}>
            <DashboardMockup />
          </TiltCard>

          {/* Placed on the frame edges so they never cover the KPI cards */}
          <FloatingCard className="absolute top-[42%] -left-10 z-20 hidden xl:block xl:-left-44" delay={1.9} from="left">
            <Toast
              icon={UserPlus}
              tone="bg-blue-100 text-brand"
              title="New lead assigned"
              text="Priya Nair to Kabir Singh"
            />
          </FloatingCard>

          <FloatingCard
            className="absolute top-[60%] -right-10 z-20 hidden xl:block xl:-right-48"
            delay={2.15}
            from="right"
            amplitude={7}
          >
            <Toast
              icon={Wallet}
              tone="bg-emerald-100 text-emerald-600"
              title="Payment received"
              text={'\u20B928,000 via Razorpay'}
            />
          </FloatingCard>

          <FloatingCard
            className="absolute -bottom-12 left-[10%] z-20 hidden xl:block"
            delay={2.4}
            from="left"
            amplitude={8}
          >
            <Toast
              icon={BellRing}
              tone="bg-amber-100 text-amber-600"
              title="Follow-up due in 2 hours"
              text="Confirm EMI plan with Sana"
            />
          </FloatingCard>

          <FloatingCard
            className="absolute top-[24%] -right-8 z-20 hidden xl:block xl:-right-40"
            delay={2.65}
            from="right"
            amplitude={10}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[12px] font-medium whitespace-nowrap text-emerald-700 shadow-[0_24px_50px_-18px_rgba(2,6,23,0.4)]">
              <ShieldCheck className="size-4" /> MFA verified session
            </span>
          </FloatingCard>
        </motion.div>
      </motion.div>

      <ProductTour open={tourOpen} onOpenChange={setTourOpen} />
    </section>
  );
}
