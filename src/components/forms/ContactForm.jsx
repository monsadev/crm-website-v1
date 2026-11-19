'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Loader2, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChoiceGroup, Field } from '@/components/forms/Field';
import { emailOk, phoneOk, submitForm } from '@/lib/submitForm';

const EASE = [0.22, 1, 0.36, 1];
const topics = ['Product question', 'Pricing', 'Partnership', 'Support', 'Other'];
const empty = { name: '', email: '', phone: '', company: '', topic: 'Product question', message: '' };

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const set = (k) => (e) => {
    const v = e?.target ? e.target.value : e;
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!emailOk(form.email)) e.email = 'Please enter a valid email';
    if (form.phone && !phoneOk(form.phone)) e.phone = 'Please enter a valid phone number';
    if (form.message.trim().length < 10) e.message = 'Please add a few more details (at least 10 characters)';
    setErrors(e);
    return !Object.keys(e).length;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const r = await submitForm('contact', form);
      setStatus('done');
      if (r.via === 'email') toast.success('Your email app has opened with the message ready to send.');
    } catch {
      setStatus('idle');
      toast.error('Something went wrong. Please try again or email us directly.');
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.35)] sm:p-10">
      <AnimatePresence mode="wait">
        {status === 'done' ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex min-h-[460px] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0, rotate: -40 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
              className="relative flex size-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_20px_40px_-12px_rgba(16,185,129,0.7)]"
            >
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/50" />
              <CheckCircle2 className="relative size-10" />
            </motion.span>
            <h3 className="mt-6 font-display text-3xl font-semibold text-ink-2">Thanks, {form.name.split(' ')[0]}!</h3>
            <p className="mt-2 max-w-sm text-slate-600">We have your message and will reply to {form.email} within one business day.</p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => {
                setForm(empty);
                setStatus('idle');
              }}
            >
              <RotateCcw /> Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-5">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-2">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-500">Fields marked with * are required.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="c-name" label="Full name" required error={errors.name}>
                <Input id="c-name" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} placeholder="Your name" />
              </Field>
              <Field id="c-email" label="Work email" required error={errors.email}>
                <Input id="c-email" type="email" autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} placeholder="you@company.com" />
              </Field>
              <Field id="c-phone" label="Phone" error={errors.phone}>
                <Input id="c-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} aria-invalid={!!errors.phone} placeholder="+91 98765 43210" />
              </Field>
              <Field id="c-company" label="Organisation">
                <Input id="c-company" autoComplete="organization" value={form.company} onChange={set('company')} placeholder="Institute or company" />
              </Field>
            </div>

            <Field id="c-topic" label="What is it about?">
              <ChoiceGroup name="Topic" options={topics} value={form.topic} onChange={set('topic')} columns="sm:grid-cols-5" />
            </Field>

            <Field id="c-message" label="Message" required error={errors.message}>
              <Textarea id="c-message" value={form.message} onChange={set('message')} aria-invalid={!!errors.message} placeholder="Tell us a little about your team and what you need" />
            </Field>

            <Button type="submit" variant="brand" size="lg" disabled={status === 'sending'} className="group mt-1 w-full sm:w-auto sm:self-start">
              {status === 'sending' ? (
                <>
                  <Loader2 className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send message <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
            <p className="text-xs text-slate-400">
              By sending this form you agree to our <a href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-600">Privacy Policy</a>.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
