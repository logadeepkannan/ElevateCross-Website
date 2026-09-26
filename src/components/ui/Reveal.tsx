import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function Reveal({ children, className, delay = 0, y = 24, direction = 'up' }: RevealProps) {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -y }
      : direction === 'right'
        ? { opacity: 0, x: y }
        : direction === 'none'
          ? { opacity: 0 }
          : { opacity: 0, y }

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
