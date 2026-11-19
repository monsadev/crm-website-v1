import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { site } from '@/config/site';

export function Logo({ className, dark = false, href = '/' }) {
  return (
    <Link href={href} aria-label={`${site.name} home`} className={cn('group inline-flex items-center gap-2.5', className)}>
      <span className="relative inline-flex">
        <span className="absolute inset-0 rounded-xl bg-brand/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <Image
          src="/images/logo-mark.svg"
          alt=""
          width={36}
          height={36}
          priority
          className="relative size-9 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
        />
      </span>
      <span className={cn('font-display text-[19px] font-semibold tracking-tight', dark ? 'text-white' : 'text-ink-2')}>
        WsCube <span className={dark ? 'text-sky-300' : 'text-brand'}>CRM</span>
      </span>
    </Link>
  );
}
