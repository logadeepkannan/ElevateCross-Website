import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, User, Share2, Workflow, Database } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'

const conversation = [
  { role: 'user' as const, text: 'What is our current PTO policy?' },
  {
    role: 'agent' as const,
    text: 'Based on the HR policy library in SharePoint, full-time employees accrue PTO monthly. Want me to start a time-off request?',
  },
  { role: 'user' as const, text: 'Yes, submit one for next Friday.' },
  {
    role: 'agent' as const,
    text: 'Done — I started a Power Automate flow to route your request for approval.',
  },
]

const connections = [
  { label: 'SharePoint', icon: Share2 },
  { label: 'Power Automate', icon: Workflow },
  { label: 'Business Data', icon: Database },
]

export function CopilotSection() {
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisibleCount(conversation.length)
      return
    }

    const interval = setInterval(() => {
      setVisibleCount((count) => (count >= conversation.length ? 1 : count + 1))
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div
        className="absolute left-[-10%] top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-teal-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Badge variant="brand" className="mb-5">
              AI &amp; Copilot Studio
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Conversational agents grounded in your business data
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
              Copilot Studio agents connect directly to SharePoint content, Power Automate flows,
              and Dataverse records — so employees and customers can ask questions and trigger real
              workflows without leaving the conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {connections.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium text-secondary ring-1 ring-inset ring-subtle"
                >
                  <item.icon className="h-4 w-4 text-brand-purple-500" />
                  {item.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-2xl border border-subtle bg-surface p-5 shadow-xl shadow-brand-teal-500/5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 border-b border-subtle pb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-brand text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Business Assistant</p>
                  <p className="text-xs text-muted">Copilot Studio · Concept demo</p>
                </div>
              </div>

              <div className="flex min-h-[280px] flex-col justify-end gap-3">
                <AnimatePresence initial={false}>
                  {conversation.slice(0, visibleCount).map((message, index) => (
                    <motion.div
                      key={`${index}-${message.text}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className={`flex items-end gap-2 ${
                        message.role === 'user' ? 'flex-row-reverse self-end' : 'self-start'
                      }`}
                    >
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                          message.role === 'user'
                            ? 'bg-surface-alt text-secondary'
                            : 'gradient-brand text-white'
                        }`}
                      >
                        {message.role === 'user' ? (
                          <User className="h-3.5 w-3.5" />
                        ) : (
                          <Bot className="h-3.5 w-3.5" />
                        )}
                      </div>
                      <div
                        className={`max-w-[240px] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          message.role === 'user'
                            ? 'bg-brand-purple-500 text-white'
                            : 'bg-surface-alt text-primary'
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
