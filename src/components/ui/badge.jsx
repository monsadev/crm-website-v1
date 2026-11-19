import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap [&>svg]:size-3.5',
  {
    variants: {
      variant: {
        default: 'border border-slate-200 bg-white/80 text-slate-700',
        brand: 'border border-brand/15 bg-brand/8 text-brand',
        dark: 'border border-white/15 bg-white/10 text-white/90',
        success: 'border border-emerald-200 bg-emerald-50 text-emerald-700',
        warning: 'border border-amber-200 bg-amber-50 text-amber-700',
        danger: 'border border-red-200 bg-red-50 text-red-600',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

function Badge({ className, variant, ...props }) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
