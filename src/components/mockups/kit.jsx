'use client';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

export const EASE = [0.22, 1, 0.36, 1];

// Deterministic pseudo random so server and client render the same markup.
export function seeded(seed = 1) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Smooth cubic bezier path through points (Catmull-Rom to Bezier).
export function smoothPath(points) {
  if (points.length < 2) return '';
  const d = [`M ${points[0][0]} ${points[0][1]}`];
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d.push(`C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0]} ${p2[1]}`);
  }
  return d.join(' ');
}

export function AppFrame({ children, url = 'crm.yourcompany.com/dashboard', className, bodyClassName }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_40px_90px_-30px_rgba(2,6,23,0.45),0_8px_20px_-8px_rgba(2,6,23,0.12)]',
        className
      )}
    >
      <div className="flex h-9 items-center gap-3 border-b border-slate-100 bg-slate-50/90 px-3.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-5 w-full max-w-[260px] items-center justify-center rounded-md bg-white text-[10px] text-slate-400 ring-1 ring-slate-200/80">
          <span className="mr-1 inline-block size-1.5 rounded-full bg-emerald-400" />
          {url}
        </div>
        <span className="w-10" />
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

const avatarTones = [
  'bg-blue-100 text-blue-700',
  'bg-violet-100 text-violet-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-cyan-100 text-cyan-700',
];

export function Avatar({ name, tone = 0, size = 'md', className }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-semibold ring-2 ring-white',
        size === 'sm' ? 'size-5 text-[8px]' : size === 'lg' ? 'size-10 text-sm' : 'size-7 text-[10px]',
        avatarTones[tone % avatarTones.length],
        className
      )}
    >
      {initials}
    </span>
  );
}

const tagTones = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  red: 'bg-rose-50 text-rose-700 ring-rose-100',
  violet: 'bg-violet-50 text-violet-700 ring-violet-100',
  slate: 'bg-slate-100 text-slate-600 ring-slate-200',
};

export function Tag({ children, tone = 'blue', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold ring-1 ring-inset',
        tagTones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

// Circular progress ring with a centered value.
export function Ring({ value = 70, size = 44, stroke = 5, color = '#194cff', track = '#e2e8f0', children, delay = 0 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay, ease: EASE }}
        />
      </svg>
      <span className="absolute text-[10px] font-bold text-slate-700">{children ?? value}</span>
    </span>
  );
}

// Animated area + line chart.
export function AreaChart({ series, width = 400, height = 140, className }) {
  const gid = `g${series[0].color.replace('#', '')}${width}`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={cn('h-full w-full', className)} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={series[0].color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={series[0].color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" x2={width} y1={height * g} y2={height * g} stroke="#e2e8f0" strokeDasharray="3 5" />
      ))}
      {series.map((s, idx) => {
        const pts = s.data.map((v, i) => [(i / (s.data.length - 1)) * width, height - 12 - v * (height - 28)]);
        const line = smoothPath(pts);
        return (
          <g key={idx}>
            {idx === 0 && (
              <motion.path
                d={`${line} L ${width} ${height} L 0 ${height} Z`}
                fill={`url(#${gid})`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            )}
            <motion.path
              d={line}
              fill="none"
              stroke={s.color}
              strokeWidth={s.width ?? 2.2}
              strokeLinecap="round"
              strokeDasharray={s.dashed ? '4 5' : undefined}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: idx * 0.2, ease: EASE }}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function Donut({ parts, size = 96, stroke = 14 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const total = parts.reduce((s, p) => s + p.value, 0);
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={stroke} />
      {parts.map((p, i) => {
        const len = (p.value / total) * c;
        const el = (
          <motion.circle
            key={p.label}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={p.color}
            strokeWidth={stroke}
            strokeDasharray={`${len - 2} ${c - len + 2}`}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 * i, ease: EASE }}
            style={{ transformOrigin: 'center' }}
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

// Small helper: staggered fade-up used inside mockups.
export function Pop({ children, delay = 0, className, y = 14, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Floating chip that bobs gently. Used to decorate hero shots.
// CSS keyframe loop (GPU), so many floating chips cost nothing during scroll.
export function Float({ children, className, delay = 0, amplitude = 10, duration = 5 }) {
  return (
    <div className={cn('anim-bob', className)} style={{ '--amp': `${amplitude}px`, '--dur': `${duration}s`, '--delay': `${delay}s` }}>
      {children}
    </div>
  );
}

export const inr = (n) => `\u20B9${Number(n).toLocaleString('en-IN')}`;
