import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'
import { problemSolutions } from '@/data/process'

export function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = problemSolutions[activeIndex]
  const technologies = active.technology.split('+').map((t) => t.trim())
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tabListRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  // Scrolls only the horizontal tab strip (mobile) into position, never the page —
  // scrollIntoView() would also drag the whole page's vertical scroll to reveal a
  // button that starts off-screen below the fold.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const container = tabListRef.current
    const button = tabRefs.current[activeIndex]
    if (!container || !button) return

    const target =
      button.offsetLeft - container.clientWidth / 2 + button.offsetWidth / 2
    container.scrollTo({ left: target, behavior: 'smooth' })
  }, [activeIndex])

  return (
    <section className="bg-surface-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why It Matters"
          title="From business problem to automated solution"
          description="Every engagement follows the same thread: a real operational problem, the right technology, a working solution, and a measurable benefit for the business."
        />

        <Reveal className="relative mt-14 grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-6">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-14 w-10 bg-gradient-to-r from-surface-alt to-transparent lg:hidden" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-14 w-10 bg-gradient-to-l from-surface-alt to-transparent lg:hidden" />
          <div
            ref={tabListRef}
            className="flex gap-2 overflow-x-auto pb-2 lg:col-span-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {problemSolutions.map((row, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={row.problem}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-current={isActive}
                  className={cn(
                    'flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors lg:shrink',
                    isActive
                      ? 'border-brand-purple-500/30 bg-surface shadow-sm'
                      : 'border-transparent hover:bg-surface/60',
                  )}
                >
                  <span
                    className={cn(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors',
                      isActive ? 'gradient-brand text-white' : 'bg-surface text-muted',
                    )}
                  >
                    <row.icon className="h-4 w-4" />
                  </span>
                  <span
                    className={cn(
                      'text-sm font-medium whitespace-nowrap lg:whitespace-normal',
                      isActive ? 'text-primary' : 'text-secondary',
                    )}
                  >
                    {row.problem}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-subtle bg-surface p-6 shadow-sm sm:p-8 lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Problem</p>
                <h3 className="mt-1.5 text-xl font-semibold text-primary sm:text-2xl">
                  {active.problem}
                </h3>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted sm:block" />
                  <p className="text-base font-medium text-primary">{active.solution}</p>
                </div>

                <div className="mt-6 border-t border-dashed border-subtle pt-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-teal-500/10 px-4 py-2 text-sm font-medium text-brand-teal-600 dark:text-brand-teal-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {active.benefit}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
