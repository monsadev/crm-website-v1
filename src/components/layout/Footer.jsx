'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUp, ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

import { site } from '@/config/site';
import { modules } from '@/data/product';
import { Logo } from '@/components/layout/Logo';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const socialIcons = { linkedin: Linkedin, twitter: Twitter, youtube: Youtube, instagram: Instagram };

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-[14px] text-slate-400 transition-colors duration-300 hover:text-white"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid-dark mask-fade-y pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8">
        <Stagger className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <StaggerItem className="max-w-sm">
            <Logo dark />
            <p className="mt-5 text-[15px] leading-relaxed text-slate-400">
              {site.tagline}. Capture leads, convert them, onboard learners and grow revenue from one platform.
            </p>
            <div className="mt-6 flex gap-2.5">
              {site.socials.map((s) => {
                const SocialIcon = socialIcons[s.icon];
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    whileHover={{ y: -4, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand/60 hover:bg-brand hover:text-white"
                  >
                    <SocialIcon className="size-4" />
                  </motion.a>
                );
              })}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h4 className="font-display text-sm font-semibold tracking-wide text-white">Product</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {modules.slice(0, 7).map((m) => (
                <li key={m.id}>
                  <FooterLink href={`/product#${m.id}`}>{m.title}</FooterLink>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="font-display text-sm font-semibold tracking-wide text-white">Company</h4>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/product">Product</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/book-demo">Book a Demo</FooterLink>
              </li>
              {site.legal.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="font-display text-sm font-semibold tracking-wide text-white">Talk to us</h4>
            <ul className="mt-5 flex flex-col gap-4 text-[14px] text-slate-400">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-sky-300" /> {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-sky-300" /> {site.contact.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky-300" /> {site.contact.address}
              </li>
            </ul>
            <Link
              href="/book-demo"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-brand hover:bg-brand"
            >
              Book a Demo
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </StaggerItem>
        </Stagger>

        <Reveal className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[13px] text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. A product by{' '}
            <a
              href={site.parent.url}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
            >
              {site.parent.name}
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {site.legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:bg-brand hover:text-white"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-[0.2em] select-none overflow-hidden text-center"
      >
        <span className="font-display block bg-gradient-to-b from-white/[0.12] to-transparent bg-clip-text text-[clamp(3.5rem,14.5vw,14rem)] leading-none font-bold tracking-tighter whitespace-nowrap text-transparent">
          WsCube CRM
        </span>
      </div>
    </footer>
  );
}
