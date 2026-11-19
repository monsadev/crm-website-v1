import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-ink-2 shadow-xs transition-all duration-200 outline-none placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-brand focus-visible:ring-4 focus-visible:ring-brand/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-400 aria-invalid:ring-4 aria-invalid:ring-red-100',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
