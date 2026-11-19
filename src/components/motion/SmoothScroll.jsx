'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cancelFrame, frame } from 'motion/react';
import Lenis from 'lenis';

// Inertia smooth scrolling for the whole site.
// - Driven by Motion's own frame loop, so Lenis moves the page and Motion's scroll-linked
//   transforms (hero parallax, progress lines) update in the SAME frame. A separate
//   requestAnimationFrame loop would leave those elements one frame behind the page,
//   which reads as a jitter or vibration while scrolling.
// - lerp based (not duration based): each wheel tick nudges the target instead of
//   restarting a long ease, which keeps scrolling responsive.
// - Skipped for reduced motion and touch devices (native touch scrolling is smoother).
// - Pauses while a dialog or the mobile menu locks the page.
// - Elements with data-lenis-prevent keep their own native scroll.
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1,
      smoothWheel: true,
      autoRaf: false,
      anchors: { offset: -96 },
    });
    window.__lenis = lenis;

    const update = (data) => lenis.raf(data.timestamp);
    frame.update(update, true);

    const body = document.body;
    const sync = () => {
      const locked = body.hasAttribute('data-scroll-locked') || body.style.overflow === 'hidden';
      if (locked) lenis.stop();
      else lenis.start();
    };
    const observer = new MutationObserver(sync);
    observer.observe(body, { attributes: true, attributeFilter: ['style', 'data-scroll-locked'] });

    return () => {
      cancelFrame(update);
      observer.disconnect();
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // New page starts at the top.
  useEffect(() => {
    if (!window.location.hash) window.__lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
