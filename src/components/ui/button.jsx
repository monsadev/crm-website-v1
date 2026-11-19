import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        brand:
          'bg-brand text-white shadow-[0_8px_24px_-6px_rgba(25,76,255,0.65),inset_0_1px_0_rgba(255,255,255,0.25)] hover:bg-[#1340e0] hover:shadow-[0_12px_32px_-6px_rgba(25,76,255,0.75),inset_0_1px_0_rgba(255,255,255,0.3)]',
        dark: 'bg-ink-2 text-white shadow-[0_8px_24px_-8px_rgba(2,6,23,0.6)] hover:bg-ink',
        light: 'bg-white text-ink-2 shadow-[0_8px_24px_-8px_rgba(255,255,255,0.35)] hover:bg-slate-100',
        outline: 'border border-slate-300 bg-white/70 text-ink-2 hover:border-slate-400 hover:bg-white',
        'outline-dark': 'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'text-ink-2 hover:bg-slate-100',
        link: 'text-brand underline-offset-4 hover:underline rounded-none',
      },
      size: {
        default: 'h-10 px-5',
        sm: 'h-9 px-4 text-[13px]',
        lg: 'h-12 px-7 text-[15px]',
        xl: 'h-14 px-9 text-base',
        icon: 'size-10',
        'icon-sm': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
