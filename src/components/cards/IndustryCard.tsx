import { motion } from 'framer-motion'
import type { Industry } from '@/types'

export function IndustryCard({ industry, index = 0 }: { industry: Industry; index?: number }) {
  const Icon = industry.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald-500/10 text-brand-emerald-500">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-primary">{industry.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary">{industry.description}</p>
      <ul className="mt-4 space-y-1.5">
        {industry.focusAreas.map((area) => (
          <li key={area} className="flex items-start gap-2 text-sm text-secondary">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-purple-500" />
            {area}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
