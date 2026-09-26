import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        className ?? 'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow ? (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple-600 dark:text-brand-purple-400">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'text-balance font-bold tracking-tight text-primary',
          titleClassName ?? 'text-3xl sm:text-4xl',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
