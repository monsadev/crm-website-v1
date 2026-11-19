'use client';

import { MotionConfig } from 'motion/react';
import { Toaster } from 'sonner';

import { SmoothScroll } from '@/components/motion/SmoothScroll';

export function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      {children}
      <Toaster position="top-center" richColors closeButton />
    </MotionConfig>
  );
}
