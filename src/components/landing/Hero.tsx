import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="absolute inset-0 -z-10 grid-fade" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-10%] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-purple-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10%] top-[20%] -z-10 h-72 w-72 rounded-full bg-brand-teal-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl"
          >
            Custom software, built the{' '}
            <span className="gradient-brand-text">right way</span> for your business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-secondary sm:text-lg"
          >
            A custom web application or a Microsoft Power Platform solution — we design and build
            it end-to-end, matched to how your business actually works.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
