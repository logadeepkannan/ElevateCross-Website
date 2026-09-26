import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/types'

export function CaseStudyCard({ caseStudy, index = 0 }: { caseStudy: CaseStudy; index?: number }) {
  const Icon = caseStudy.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-teal-500/10"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal-500/10 text-brand-teal-600 dark:text-brand-teal-400">
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant="outline">{caseStudy.status}</Badge>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-primary">{caseStudy.title}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
        {caseStudy.category}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-secondary">{caseStudy.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-surface-alt px-2.5 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-subtle"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
