import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-subtle pt-14 pb-16 sm:pt-20 sm:pb-20">
      <div className="absolute inset-0 -z-10 grid-fade" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-30%] -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-purple-500/15 blur-[110px]"
        aria-hidden="true"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="brand" className="mb-5">
              {eyebrow}
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 text-balance text-base leading-relaxed text-secondary sm:text-lg"
          >
            {description}
          </motion.p>
          {children}
        </div>
      </Container>
    </section>
  )
}
