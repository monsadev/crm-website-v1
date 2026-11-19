'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Mockup } from '@/components/mockups';

const slides = [
  {
    id: 'dashboard',
    title: 'Live dashboards',
    text: 'Revenue, pipeline and counsellor performance update in real time for every role.',
  },
  {
    id: 'pipeline',
    title: 'Lead pipeline',
    text: 'Round robin assigns every lead. Scores, temperature and stages keep priorities clear.',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp automation',
    text: 'Campaigns, chatbot qualification and instant lead capture from replies and ads.',
  },
  {
    id: 'payment',
    title: 'Payments and EMI',
    text: 'Share a secure link, collect with Razorpay and get a GST invoice automatically.',
  },
  {
    id: 'cohort',
    title: 'Cohorts and learners',
    text: 'Track seats, attendance, fees and early drop risk for every batch.',
  },
  {
    id: 'security',
    title: 'Security built in',
    text: 'Multi-factor sign-in, single device sessions and a full audit trail.',
  },
];

const DURATION = 6500;

export function ProductTour({ open, onOpenChange }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (open) {
      setIndex(0);
      setDirection(1);
      setPlaying(true);
    }
  }, [open]);

  useEffect(() => {
    if (!open || !playing) return undefined;
    const t = setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, DURATION);
    return () => clearTimeout(t);
  }, [open, playing, index]);

  const go = (next) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + slides.length) % slides.length);
  };

  const slide = slides[index];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100%-1rem)] sm:max-w-5xl">
        <div className="grid lg:grid-cols-[320px_1fr]">
          <div className="relative flex flex-col justify-between gap-8 bg-ink p-7 text-white">
            <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-50" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-brand/50 blur-[90px]" />
            <div className="relative">
              <p className="font-mono text-xs tracking-widest text-sky-300 uppercase">Product tour</p>
              <DialogTitle className="mt-3 text-3xl leading-tight text-white">A quick look inside</DialogTitle>
              <DialogDescription className="mt-2 text-slate-400">
                Six key areas of the platform, in under a minute.
              </DialogDescription>

              <ol className="mt-7 flex flex-col gap-1">
                {slides.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => go(i)}
                      className={cn(
                        'group relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-3 py-2.5 text-left text-sm transition-colors',
                        i === index ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold transition-colors',
                          i === index
                            ? 'bg-brand text-white'
                            : i < index
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-white/10',
                        )}
                      >
                        {i + 1}
                      </span>
                      {s.title}
                      {i === index && playing && (
                        <motion.span
                          key={`${index}-${playing}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: DURATION / 1000, ease: 'linear' }}
                          className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-sky-300"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => go(index - 1)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/15"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label={playing ? 'Pause' : 'Play'}
                onClick={() => setPlaying((p) => !p)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/15"
              >
                {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => go(index + 1)}
                className="inline-flex size-10 items-center justify-center rounded-full bg-brand transition hover:bg-[#1340e0]"
              >
                <ChevronRight className="size-4" />
              </button>
              <span className="ml-auto font-mono text-xs text-slate-400">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[460px] flex-col bg-slate-50 p-5 sm:p-7">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative mb-4 pr-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl font-semibold text-ink-2">{slide.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{slide.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={{
                    enter: (d) => ({ opacity: 0, x: d * 80, scale: 0.96 }),
                    center: { opacity: 1, x: 0, scale: 1 },
                    exit: (d) => ({ opacity: 0, x: d * -80, scale: 0.96 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  data-lenis-prevent
                  className="max-h-[56vh] overflow-y-auto pb-6"
                >
                  <Mockup name={slide.id} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
