'use client';

import { motion } from 'motion/react';
import { Award, BadgeCheck, Mail, QrCode } from 'lucide-react';

import { cn } from '@/lib/utils';
import { EASE, Float, seeded } from '@/components/mockups/kit';

const N = 21;
const rand = seeded(99);
const finder = (r, c) => {
  const inBox = (r0, c0) => r >= r0 && r < r0 + 7 && c >= c0 && c < c0 + 7;
  const ring = (r0, c0) => {
    const rr = r - r0;
    const cc = c - c0;
    return rr === 0 || rr === 6 || cc === 0 || cc === 6 || (rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4);
  };
  if (inBox(0, 0)) return ring(0, 0);
  if (inBox(0, N - 7)) return ring(0, N - 7);
  if (inBox(N - 7, 0)) return ring(N - 7, 0);
  return null;
};
const cells = Array.from({ length: N * N }, (_, i) => {
  const r = Math.floor(i / N);
  const c = i % N;
  const f = finder(r, c);
  return f === null ? rand() > 0.52 : f;
});

function Qr({ size = 76 }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${N} ${N}`} shapeRendering="crispEdges" aria-hidden="true">
      {cells.map((on, i) =>
        on ? <rect key={i} x={i % N} y={Math.floor(i / N)} width="1" height="1" fill="#0f172a" /> : null
      )}
    </svg>
  );
}

const steps = ['Payment', 'Application form', 'Onboarding profile', 'Certificate'];

export function CertificateMockup({ className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[600px]', className)}>
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative overflow-hidden rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-amber-50 p-6 shadow-[0_40px_80px_-30px_rgba(2,6,23,0.4)]"
      >
        <div className="pointer-events-none absolute inset-2 rounded-2xl border border-amber-300/60" />
        <div className="pointer-events-none absolute inset-3.5 rounded-xl border border-dashed border-amber-300/50" />
        <div className="relative flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg">
            <Award className="size-6" />
          </span>
          <p className="mt-3 text-[10px] font-semibold tracking-[0.35em] text-amber-700 uppercase">Certificate of completion</p>
          <p className="mt-3 font-serif text-[34px] leading-none text-slate-900 italic">Neha Gupta</p>
          <p className="mt-2 max-w-[320px] text-[11px] leading-relaxed text-slate-500">
            has successfully completed the Full Stack Development program with distinction.
          </p>
          <div className="mt-4 flex w-full items-end justify-between gap-4 px-2">
            <div className="text-left">
              <div className="mb-1 h-px w-24 bg-slate-300" />
              <p className="text-[9px] text-slate-400">Program director</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-slate-200">
                <Qr />
              </div>
              <p className="flex items-center gap-1 text-[8.5px] font-medium text-slate-500"><QrCode className="size-2.5" /> Scan to verify</p>
            </div>
            <div className="text-right">
              <div className="mb-1 ml-auto h-px w-24 bg-slate-300" />
              <p className="text-[9px] text-slate-400">Reg. no. WS-2026-0481</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: 'spring', stiffness: 240, damping: 14 }}
          className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-md"
        >
          <BadgeCheck className="size-3" /> Verified
        </motion.div>
      </motion.div>

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } } }}
        className="relative z-10 mx-auto mt-4 flex w-[94%] items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_24px_50px_-26px_rgba(2,6,23,0.35)]"
      >
        {steps.map((s, i) => (
          <motion.li
            key={s}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
            className="flex flex-1 items-center gap-2"
          >
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-white">{i + 1}</span>
            <span className="text-[10px] font-medium text-slate-600">{s}</span>
            {i < steps.length - 1 && <span className="mx-1 h-px flex-1 bg-gradient-to-r from-brand/50 to-slate-200" />}
          </motion.li>
        ))}
      </motion.ol>

      <Float className="absolute -top-4 right-2 z-20 hidden rounded-xl bg-ink-2 px-3 py-2 text-white shadow-xl sm:block" delay={0.4} amplitude={7}>
        <p className="flex items-center gap-1.5 text-[10.5px] font-medium"><Mail className="size-3.5 text-sky-300" /> Sent to learner by email</p>
      </Float>
    </div>
  );
}
