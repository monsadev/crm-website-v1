'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Loader2,
  User,
} from 'lucide-react';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { ChoiceGroup, Field } from '@/components/forms/Field';
import { emailOk, phoneOk, submitForm } from '@/lib/submitForm';
import { modules } from '@/data/product';

const EASE = [0.22, 1, 0.36, 1];

const steps = [
  { id: 'you', title: 'About you', icon: User },
  { id: 'org', title: 'Your organisation', icon: Building2 },
  { id: 'slot', title: 'Pick a slot', icon: CalendarDays },
  { id: 'review', title: 'Review', icon: ClipboardCheck },
];

const roles = ['Founder or Director', 'Admissions head', 'Sales manager', 'Counsellor', 'Operations', 'Other'];
const teamSizes = ['1 to 5', '6 to 20', '21 to 50', '50+'];
const leadVolumes = ['Under 500', '500 to 2,000', '2,000 to 10,000', '10,000+'];
const times = ['10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '04:30 PM', '06:00 PM'];

// Next 12 working days (Mon to Sat). Built after mount so the prerendered HTML
// (made at build time) never disagrees with the visitor's real date.
function useDays() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    const out = [];
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    while (out.length < 12) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0) out.push(new Date(d));
    }
    setDays(out);
  }, []);
  return days;
}

const fmtDay = (d) => d.toLocaleDateString('en-IN', { weekday: 'short' });
const fmtDate = (d) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
const fmtLong = (d) =>
  d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

const initial = {
  name: '',
  email: '',
  phone: '',
  role: '',
  company: '',
  website: '',
  team_size: '',
  lead_volume: '',
  interests: [],
  date: null,
  time: '',
  notes: '',
};

export function DemoStepper() {
  const days = useDays();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => {
    const v = e?.target ? e.target.value : e;
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  function validate(i) {
    const e = {};
    if (i === 0) {
      if (!form.name.trim()) e.name = 'Please enter your name';
      if (!emailOk(form.email)) e.email = 'Please enter a valid email';
      if (!phoneOk(form.phone)) e.phone = 'Please enter a valid phone number';
      if (!form.role) e.role = 'Please choose your role';
    }
    if (i === 1) {
      if (!form.company.trim()) e.company = 'Please enter your organisation name';
      if (!form.team_size) e.team_size = 'Please choose your team size';
      if (!form.interests.length) e.interests = 'Pick at least one area you want to see';
    }
    if (i === 2) {
      if (!form.date) e.date = 'Please pick a date';
      if (!form.time) e.time = 'Please pick a time';
    }
    setErrors(e);
    return !Object.keys(e).length;
  }

  function go(next) {
    if (next > step && !validate(step)) return;
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  async function confirm() {
    setSending(true);
    try {
      const r = await submitForm('demo', {
        ...form,
        date: form.date ? fmtLong(form.date) : '',
        interests: form.interests,
      });
      setDone(true);
      if (r.via === 'email') toast.success('Your email app has opened with the booking details.');
    } catch {
      toast.error('We could not send your request. Please try again.');
    } finally {
      setSending(false);
    }
  }

  function reset() {
    setDone(false);
    setForm(initial);
    setStep(0);
  }

  const progress = (step / (steps.length - 1)) * 100;

  return (
    <div className="relative grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_50px_100px_-40px_rgba(15,23,42,0.45)] lg:grid-cols-[300px_1fr]">
      {/* Side stepper */}
      <aside className="relative overflow-hidden bg-ink p-6 text-white sm:p-8">
        <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-50" />
        <motion.div
          className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-brand/50 blur-[90px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative">
          <p className="font-mono text-xs tracking-widest text-sky-300 uppercase">Book a demo</p>
          <p className="mt-2 font-display text-2xl font-semibold">30 minutes, tailored to you</p>

          <ol className="relative mt-8 hidden flex-col gap-1 lg:flex">
            <span className="absolute top-5 bottom-5 left-5 w-px bg-white/10" />
            <motion.span
              className="absolute top-5 left-5 w-px origin-top bg-sky-300"
              style={{ height: 'calc(100% - 2.5rem)' }}
              animate={{ scaleY: progress / 100 }}
              transition={{ duration: 0.6, ease: EASE }}
            />
            {steps.map((s, i) => {
              const on = i === step;
              const past = i < step;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    disabled={i > step}
                    onClick={() => i < step && go(i)}
                    className={cn(
                      'relative flex w-full items-center gap-4 rounded-xl py-2.5 pr-3 text-left transition-colors',
                      on ? 'text-white' : past ? 'text-white/80 hover:text-white' : 'text-white/40',
                    )}
                  >
                    <span
                      className={cn(
                        'relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                        on
                          ? 'border-brand bg-brand shadow-[0_0_0_6px_rgba(25,76,255,0.25)]'
                          : past
                            ? 'border-sky-300/40 bg-sky-300/15 text-sky-300'
                            : 'border-white/15 bg-ink',
                      )}
                    >
                      {past ? <Check className="size-4" strokeWidth={3} /> : <s.icon className="size-4" />}
                    </span>
                    <span>
                      <span className="block text-[11px] text-white/40">Step {i + 1}</span>
                      <span className="block text-[15px] font-medium">{s.title}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Mobile progress */}
          <div className="mt-6 lg:hidden">
            <div className="mb-2 flex justify-between text-xs text-white/60">
              <span>{steps[step].title}</span>
              <span>
                {step + 1} / {steps.length}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-sky-300"
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>
          </div>

          <ul className="mt-10 hidden flex-col gap-3 text-sm text-white/70 lg:flex">
            {[
              'A walkthrough of the modules you pick',
              'Your workflow mapped to the CRM',
              'Answers on setup, migration and pricing',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Panel */}
      <div className="relative flex min-h-[600px] flex-col p-6 sm:p-10">
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={{
                enter: (d) => ({ opacity: 0, x: d * 70, filter: 'blur(6px)' }),
                center: { opacity: 1, x: 0, filter: 'blur(0px)' },
                exit: (d) => ({ opacity: 0, x: d * -70, filter: 'blur(6px)' }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
            >
              {step === 0 && (
                <div className="flex flex-col gap-5">
                  <StepTitle title="Tell us about yourself" text="So we can prepare the right walkthrough." />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="d-name" label="Full name" required error={errors.name}>
                      <Input
                        id="d-name"
                        autoComplete="name"
                        value={form.name}
                        onChange={set('name')}
                        aria-invalid={!!errors.name}
                        placeholder="Your name"
                      />
                    </Field>
                    <Field id="d-email" label="Work email" required error={errors.email}>
                      <Input
                        id="d-email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={set('email')}
                        aria-invalid={!!errors.email}
                        placeholder="you@company.com"
                      />
                    </Field>
                    <Field id="d-phone" label="Phone" required error={errors.phone} className="sm:col-span-2">
                      <Input
                        id="d-phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        aria-invalid={!!errors.phone}
                        placeholder="+91 98765 43210"
                      />
                    </Field>
                  </div>
                  <Field id="d-role" label="Your role" required error={errors.role}>
                    <ChoiceGroup name="Your role" options={roles} value={form.role} onChange={set('role')} />
                  </Field>
                </div>
              )}

              {step === 1 && (
                <div className="flex flex-col gap-5">
                  <StepTitle
                    title="About your organisation"
                    text="This helps us show the setup that fits your scale."
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="d-company" label="Organisation name" required error={errors.company}>
                      <Input
                        id="d-company"
                        autoComplete="organization"
                        value={form.company}
                        onChange={set('company')}
                        aria-invalid={!!errors.company}
                        placeholder="Institute or company"
                      />
                    </Field>
                    <Field id="d-website" label="Website">
                      <Input
                        id="d-website"
                        value={form.website}
                        onChange={set('website')}
                        placeholder="www.example.com"
                      />
                    </Field>
                  </div>
                  <Field id="d-team" label="Sales and counselling team size" required error={errors.team_size}>
                    <ChoiceGroup
                      name="Team size"
                      options={teamSizes}
                      value={form.team_size}
                      onChange={set('team_size')}
                      columns="sm:grid-cols-4"
                    />
                  </Field>
                  <Field id="d-volume" label="Leads per month">
                    <ChoiceGroup
                      name="Leads per month"
                      options={leadVolumes}
                      value={form.lead_volume}
                      onChange={set('lead_volume')}
                      columns="sm:grid-cols-4"
                    />
                  </Field>
                  <Field id="d-interests" label="What would you like to see?" required error={errors.interests}>
                    <ChoiceGroup
                      multiple
                      name="Modules"
                      options={modules.map((m) => ({ label: m.title.split(' and ')[0], value: m.title }))}
                      value={form.interests}
                      onChange={set('interests')}
                      columns="sm:grid-cols-3"
                    />
                  </Field>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <StepTitle title="Pick a date and time" text="All times are in IST. We will confirm by email." />
                  <Field id="d-date" label="Date" required error={errors.date}>
                    <div role="radiogroup" aria-label="Date" className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                      {days.map((d) => {
                        const on = form.date && d.getTime() === form.date.getTime();
                        return (
                          <motion.button
                            key={d.toISOString()}
                            type="button"
                            role="radio"
                            aria-checked={!!on}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => set('date')(d)}
                            className={cn(
                              'flex flex-col items-center rounded-2xl border py-3 transition-all duration-200',
                              on
                                ? 'border-brand bg-brand text-white shadow-[0_12px_28px_-10px_rgba(25,76,255,0.7)]'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300',
                            )}
                          >
                            <span
                              className={cn(
                                'text-[11px] font-medium uppercase',
                                on ? 'text-white/80' : 'text-slate-400',
                              )}
                            >
                              {fmtDay(d)}
                            </span>
                            <span className="font-display text-[15px] font-semibold">{fmtDate(d)}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </Field>
                  <AnimatePresence>
                    {form.date && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <Field
                          id="d-time"
                          label={`Available times on ${fmtDate(form.date)}`}
                          required
                          error={errors.time}
                        >
                          <div role="radiogroup" aria-label="Time" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {times.map((t) => {
                              const on = form.time === t;
                              return (
                                <motion.button
                                  key={t}
                                  type="button"
                                  role="radio"
                                  aria-checked={on}
                                  whileTap={{ scale: 0.96 }}
                                  onClick={() => set('time')(t)}
                                  className={cn(
                                    'inline-flex h-12 items-center justify-center gap-2 rounded-xl border text-[14px] font-medium transition-all duration-200',
                                    on
                                      ? 'border-brand bg-brand/[0.07] text-brand shadow-[0_0_0_3px_rgba(25,76,255,0.12)]'
                                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300',
                                  )}
                                >
                                  <Clock className="size-4" /> {t}
                                </motion.button>
                              );
                            })}
                          </div>
                        </Field>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Field id="d-notes" label="Anything we should know?">
                    <Textarea
                      id="d-notes"
                      value={form.notes}
                      onChange={set('notes')}
                      placeholder="Current tools, number of centres, specific questions"
                      className="min-h-24"
                    />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <StepTitle title="Review and confirm" text="Check the details below, then confirm your demo." />
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {[
                      ['Name', form.name, 0],
                      ['Email', form.email, 0],
                      ['Phone', form.phone, 0],
                      ['Role', form.role, 0],
                      ['Organisation', form.company, 1],
                      ['Team size', form.team_size, 1],
                      ['Leads per month', form.lead_volume || 'Not specified', 1],
                      ['Slot', form.date ? `${fmtLong(form.date)}, ${form.time} IST` : '', 2],
                    ].map(([k, v, s]) => (
                      <div key={k} className="group relative rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                        <dt className="text-xs text-slate-400">{k}</dt>
                        <dd className="mt-0.5 font-medium break-words text-ink-2">{v}</dd>
                        <button
                          type="button"
                          onClick={() => go(s)}
                          className="absolute top-3 right-3 text-xs font-medium text-brand opacity-0 transition group-hover:opacity-100 focus:opacity-100"
                        >
                          Edit
                        </button>
                      </div>
                    ))}
                  </dl>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-400">Modules to cover</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {form.interests.map((i) => (
                        <span key={i} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-100 pt-6">
          <Button
            variant="ghost"
            onClick={() => go(step - 1)}
            disabled={step === 0}
            className={cn(step === 0 && 'invisible')}
          >
            <ArrowLeft /> Back
          </Button>
          {step < steps.length - 1 ? (
            <Button variant="dark" size="lg" onClick={() => go(step + 1)} className="group">
              Continue <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          ) : (
            <Button variant="brand" size="lg" onClick={confirm} disabled={sending} className="group">
              {sending ? (
                <>
                  <Loader2 className="animate-spin" /> Confirming
                </>
              ) : (
                <>
                  Confirm demo <Check />
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      <Dialog open={done} onOpenChange={(o) => !o && reset()}>
        <DialogContent className="sm:max-w-md">
          <div className="relative overflow-hidden p-8 text-center">
            <Confetti />
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 13, delay: 0.15 }}
              className="relative mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_20px_40px_-12px_rgba(16,185,129,0.7)]"
            >
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/50" />
              <Check className="relative size-10" strokeWidth={3} />
            </motion.span>
            <DialogTitle className="relative mt-6 text-2xl">Your demo request is in</DialogTitle>
            <DialogDescription className="relative mt-2 text-[15px]">
              {form.date ? `${fmtLong(form.date)} at ${form.time} IST.` : ''} We will send a calendar invite to{' '}
              {form.email}.
            </DialogDescription>
            <div className="relative mt-7 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Button asChild variant="dark">
                <Link href="/product">Explore the product</Link>
              </Button>
              <Button variant="outline" onClick={reset}>
                Done
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StepTitle({ title, text }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink-2 sm:text-3xl">{title}</h2>
      <p className="mt-1 text-[15px] text-slate-500">{text}</p>
    </div>
  );
}

const confettiColors = ['#194cff', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#f43f5e'];

function Confetti() {
  const pieces = Array.from({ length: 28 }, (_, i) => ({
    x: ((i * 37) % 100) - 50,
    r: (i * 53) % 360,
    d: 0.8 + ((i * 7) % 10) / 12,
    c: confettiColors[i % confettiColors.length],
    delay: (i % 7) * 0.04,
  }));
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-16 flex justify-center">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-2.5 w-1.5 rounded-[2px]"
          style={{ background: p.c }}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          animate={{ opacity: 0, x: p.x * 4.2, y: [0, -120 - (i % 5) * 18, 160], rotate: p.r * 2 }}
          transition={{ duration: 1.6 * p.d + 0.6, delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}
