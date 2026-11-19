import Link from 'next/link';
import { ArrowLeft, CalendarCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-5 pt-32 pb-20">
      <div className="bg-grid mask-radial pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div className="pointer-events-none absolute top-20 left-1/2 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" />
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-[clamp(6rem,20vw,11rem)] leading-none font-semibold tracking-tighter text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink-2">This page took a different route</h1>
        <p className="mt-3 text-slate-600">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="dark" size="lg">
            <Link href="/">
              <ArrowLeft /> Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/book-demo">
              <CalendarCheck /> Book a Demo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
