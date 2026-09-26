import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/lib/cn'

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn('flex items-center gap-2.5 group', className)}>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl gradient-brand shadow-md shadow-brand-purple-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
        <span className="text-xs font-bold text-white">EC</span>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-primary">
        {siteConfig.companyName}
      </span>
    </Link>
  )
}
