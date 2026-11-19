'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/motion/Reveal';
import { SplitHeading } from '@/components/motion/SplitHeading';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className,
  titleClassName,
  as = 'h2',
}) {
  return (
    <div className={cn('flex flex-col gap-5', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {eyebrow && (
        <Reveal blur={false} direction="up" duration={0.6}>
          <Badge variant={dark ? 'dark' : 'brand'} className="uppercase tracking-[0.14em]">
            <span className={cn('size-1.5 rounded-full', dark ? 'bg-sky-300' : 'bg-brand')} />
            {eyebrow}
          </Badge>
        </Reveal>
      )}
      <SplitHeading
        as={as}
        text={title}
        accentClassName={dark ? 'text-gradient-light' : 'text-gradient'}
        className={cn(
          'max-w-4xl text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.08] font-semibold',
          dark ? 'text-white' : 'text-ink-2',
          titleClassName
        )}
      />
      {description && (
        <Reveal delay={0.15} duration={0.8}>
          <p className={cn('max-w-2xl text-[17px] leading-relaxed', dark ? 'text-slate-300' : 'text-slate-600')}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({ children, className, id, dark = false, containerClassName }) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 py-24 sm:py-32', dark && 'bg-ink text-white', className)}>
      <div className={cn('relative mx-auto w-full max-w-7xl px-5 sm:px-8', containerClassName)}>{children}</div>
    </section>
  );
}
