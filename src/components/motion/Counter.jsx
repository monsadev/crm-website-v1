'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'motion/react';

// Counts up once when visible. Writes straight to the DOM node, so it never
// triggers React re-renders while animating.
export function Counter({ to, duration = 1.8, prefix = '', suffix = '', decimals = 0, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return undefined;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        // Update React's own text node in place so reconciliation stays valid.
        const text = `${prefix}${latest.toFixed(decimals)}${suffix}`;
        if (node.firstChild) node.firstChild.nodeValue = text;
        else node.textContent = text;
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${(0).toFixed(decimals)}${suffix}`}
    </span>
  );
}
