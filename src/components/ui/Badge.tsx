import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'brand' | 'neutral' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'brand', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        variant === 'brand' &&
          'bg-brand-purple-500/10 text-brand-purple-600 dark:text-brand-purple-400 ring-1 ring-inset ring-brand-purple-500/20',
        variant === 'neutral' && 'bg-surface-alt text-secondary ring-1 ring-inset ring-subtle',
        variant === 'outline' && 'text-muted ring-1 ring-inset ring-strong',
        className,
      )}
    >
      {children}
    </span>
  )
}
