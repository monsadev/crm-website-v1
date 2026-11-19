'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// Moves children vertically as the section scrolls through the viewport.
export function Parallax({ children, className, distance = 80 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
