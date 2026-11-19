'use client';

import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

const offsets = {
  up: { y: 36 },
  down: { y: -36 },
  left: { x: 48 },
  right: { x: -48 },
  scale: { scale: 0.92 },
  none: {},
};

// Fade + slide + unblur when the element scrolls into view.
export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
  amount = 0.2,
  blur = true,
  as = 'div',
  ...rest
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, filter: blur ? 'blur(10px)' : 'blur(0px)', ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

// Parent that staggers its <StaggerItem /> children.
export function Stagger({ children, className, stagger = 0.09, delay = 0, once = true, amount = 0.15, as = 'div', ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ children, className, direction = 'up', as = 'div', ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, filter: 'blur(8px)', ...offsets[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: { duration: 0.75, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
