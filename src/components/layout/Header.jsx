'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';
import { site } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/Logo';

const EASE = [0.22, 1, 0.36, 1];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  // Close the mobile menu on navigation and lock the page behind it.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5"
      >
        <motion.nav
          aria-label="Main"
          animate={{
            maxWidth: scrolled ? 980 : 1240,
            paddingTop: scrolled ? 8 : 12,
            paddingBottom: scrolled ? 8 : 12,
          }}
          transition={{ duration: 0.5, ease: EASE }}
          className={cn(
            'flex w-full items-center justify-between gap-4 rounded-full border px-3 pl-5 transition-[background,border-color,box-shadow] duration-500 sm:pl-6',
            scrolled
              ? 'glass border-slate-200/80 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)]'
              : 'border-transparent bg-transparent'
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
            {site.nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    className={cn(
                      'relative z-10 block rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300',
                      active ? 'text-ink-2' : 'text-slate-600 hover:text-ink-2'
                    )}
                  >
                    {hovered === item.href && (
                      <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 -z-10 rounded-full bg-slate-900/[0.06]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild variant="brand" size="default" className="hidden group sm:inline-flex">
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex size-10 items-center justify-center rounded-full bg-slate-900/[0.06] transition hover:bg-slate-900/10 lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 block h-0.5 w-5 rounded bg-ink-2"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                  className="absolute top-[6px] left-0 block h-0.5 w-5 rounded bg-ink-2"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute top-[12px] left-0 block h-0.5 w-5 rounded bg-ink-2"
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pt-28 pb-8 text-white lg:hidden"
          >
            <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-brand/40 blur-[110px]" />
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
              className="relative flex flex-col gap-1"
            >
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-4xl font-semibold tracking-tight',
                      isActive(item.href) ? 'text-white' : 'text-white/60'
                    )}
                  >
                    <span className="font-mono text-sm text-white/30">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
              className="relative mt-auto flex flex-col gap-5"
            >
              <Button asChild variant="brand" size="xl" className="w-full">
                <Link href="/book-demo">
                  Book a Demo <ArrowRight />
                </Link>
              </Button>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail className="size-4" /> {site.contact.email}
                </a>
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="size-4" /> {site.contact.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
