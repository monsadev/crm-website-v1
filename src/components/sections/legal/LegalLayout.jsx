'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'motion/react';
import { Mail } from 'lucide-react';

import { cn } from '@/lib/utils';
import { site } from '@/config/site';
import { Reveal } from '@/components/motion/Reveal';
import { PageHero } from '@/components/sections/PageHero';

// Two column legal page: sticky table of contents with scroll-spy + reading progress.
export function LegalLayout({ eyebrow, title, intro, updated, sections }) {
  const [active, setActive] = useState(sections[0].id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={intro}>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
      </PageHero>

      <section className="px-5 pb-28 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-32">
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">On this page</p>
              <div className="relative">
                <span className="absolute top-0 bottom-0 left-0 w-px bg-slate-200" />
                <motion.span style={{ scaleY: progress }} className="absolute top-0 bottom-0 left-0 w-px origin-top bg-brand" />
                <ul className="flex flex-col">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={cn(
                          'relative block py-2 pl-5 text-[14px] transition-colors duration-300',
                          active === s.id ? 'font-medium text-brand' : 'text-slate-500 hover:text-ink-2'
                        )}
                      >
                        {active === s.id && (
                          <motion.span layoutId="legal-dot" className="absolute top-1/2 -left-[3px] size-[7px] -translate-y-1/2 rounded-full bg-brand" />
                        )}
                        {i + 1}. {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          <div className="min-w-0">
            {sections.map((s, i) => (
              <motion.article
                key={s.id}
                id={s.id}
                onViewportEnter={() => setActive(s.id)}
                viewport={{ amount: 0.5, margin: '-20% 0px -40% 0px' }}
                className="scroll-mt-32 border-b border-slate-100 py-10 first:pt-0 last:border-0"
              >
                <Reveal blur={false} duration={0.6}>
                  <h2 className="flex items-baseline gap-3 font-display text-2xl font-semibold text-ink-2">
                    <span className="font-mono text-sm text-brand">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4 text-[16px] leading-[1.8] text-slate-600">
                    {s.body.map((p, j) =>
                      Array.isArray(p) ? (
                        <ul key={j} className="flex flex-col gap-2 pl-1">
                          {p.map((li) => (
                            <li key={li} className="flex gap-3">
                              <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand" />
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p key={j}>{p}</p>
                      )
                    )}
                  </div>
                </Reveal>
              </motion.article>
            ))}

            <Reveal className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:flex-row sm:items-center">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Mail className="size-5" />
              </span>
              <div className="flex-1">
                <p className="font-display text-lg font-semibold text-ink-2">Questions about this page?</p>
                <p className="text-sm text-slate-500">
                  Write to <a href={`mailto:${site.contact.email}`} className="text-brand hover:underline">{site.contact.email}</a> or use our{' '}
                  <Link href="/contact" className="text-brand hover:underline">contact form</Link>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
