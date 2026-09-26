import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { submitContactForm } from '@/lib/api'
import type { ContactFormData, ProjectType } from '@/types'

const projectTypes: ProjectType[] = [
  'Power Apps',
  'Power Automate',
  'SharePoint',
  'Copilot Studio',
  'AI Automation',
  'Power Pages',
  'Training',
  'Other',
]

const initialState: ContactFormData = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
}

type Errors = Partial<Record<keyof ContactFormData, string>>

function validate(data: ContactFormData): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = 'Please enter your name.'
  if (!data.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.projectType) errors.projectType = 'Please select a project type.'
  if (!data.message.trim()) errors.message = 'Please tell us a bit about your project.'
  return errors
}

const inputClasses =
  'w-full rounded-xl border-0 bg-surface-alt px-4 py-3 text-sm text-primary ring-1 ring-inset ring-subtle transition-shadow placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-purple-500'

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const validationErrors = validate(data)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      await submitContactForm(data)
      setStatus('success')
      setData(initialState)
    } catch {
      setStatus('idle')
      setErrors({ message: 'Something went wrong. Please try again in a moment.' })
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-2xl border border-subtle bg-surface p-10 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple-500/10 text-brand-purple-600 dark:text-brand-purple-400">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-primary">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-secondary">
          Thanks for reaching out. We&apos;ll get back to you shortly to talk through your project.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClasses}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className="mt-1.5 text-xs text-red-500">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClasses}
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="mt-1.5 text-xs text-red-500">{errors.email}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-primary">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={data.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputClasses}
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-primary">
            Project Type
          </label>
          <select
            id="projectType"
            value={data.projectType}
            onChange={(e) => update('projectType', e.target.value as ProjectType)}
            className={inputClasses}
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p className="mt-1.5 text-xs text-red-500">{errors.projectType}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={(e) => update('message', e.target.value)}
          className={inputClasses}
          placeholder="Tell us about your project, process, or challenge..."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="mt-1.5 text-xs text-red-500">{errors.message}</p> : null}
      </div>

      <Button
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === 'submitting'}
        icon={
          <AnimatePresence mode="wait" initial={false}>
            {status === 'submitting' ? (
              <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Loader2 className="h-4 w-4 animate-spin" />
              </motion.span>
            ) : (
              <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Send className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        }
      >
        {status === 'submitting' ? 'Sending...' : 'Start a Conversation'}
      </Button>
    </form>
  )
}
