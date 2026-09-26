import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '@/types'

export function ServiceCard({
  service,
  index = 0,
  to = '/services',
}: {
  service: Service
  index?: number
  to?: string
}) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-purple-500/10"
      id={service.slug}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white shadow-md shadow-brand-purple-500/25">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-primary">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary">{service.shortDescription}</p>
      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple-600 transition-colors group-hover:gap-2 dark:text-brand-purple-400"
      >
        Learn more
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  )
}
