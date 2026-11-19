'use client';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1];

// "Run your {admissions funnel} in one place" -> words in {braces} become
// the serif italic gradient accent. Each word rises out of a mask.
function parse(text) {
  const out = [];
  const re = /\{([^}]+)\}|([^\s{]+)/g;
  let m;
  while ((m = re.exec(text))) {
    // "tight" = no space before this token (e.g. a comma right after an accent word)
    const tight = m.index > 0 && !/\s/.test(text[m.index - 1]) && out.length > 0;
    if (m[1]) m[1].split(/\s+/).forEach((w, i) => out.push({ word: w, accent: true, tight: i === 0 && tight }));
    else out.push({ word: m[2], accent: false, tight });
  }
  return out;
}

export function SplitHeading({
  text,
  as: Tag = 'h2',
  className,
  accentClassName = 'text-gradient',
  delay = 0,
  stagger = 0.055,
  once = true,
  amount = 0.5,
}) {
  const words = parse(text);
  const plain = words.map((w, i) => (i && !w.tight ? ' ' : '') + w.word).join('');

  return (
    <Tag className={cn('font-display', className)} aria-label={plain}>
      <motion.span
        aria-hidden="true"
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {words.map((w, i) => (
          <span
            key={`${w.word}-${i}`}
            className="inline-block overflow-hidden pt-[0.08em] pb-[0.18em] -mb-[0.18em] align-bottom"
          >
            <motion.span
              className={cn(
                'inline-block will-change-transform',
                w.accent && cn('font-serif font-normal italic tracking-normal', accentClassName),
              )}
              variants={{
                hidden: { y: '115%', rotate: 5, opacity: 0 },
                visible: { y: '0%', rotate: 0, opacity: 1, transition: { duration: 0.85, ease: EASE } },
              }}
            >
              {w.word}
            </motion.span>
            {i < words.length - 1 && !words[i + 1].tight ? '\u00A0' : ''}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
