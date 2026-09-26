import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'gradient-brand text-white shadow-lg shadow-brand-purple-500/25 hover:shadow-xl hover:shadow-brand-teal-500/30',
  secondary: 'bg-surface text-primary ring-1 ring-inset ring-strong hover:ring-brand-purple-400',
  ghost: 'text-primary hover:bg-surface-alt',
}

const sizeStyles: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-shadow duration-300 focus-visible:outline-offset-4 whitespace-nowrap'

const tapMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
}

interface LinkButtonProps extends BaseProps {
  to: string
}

interface AnchorButtonProps extends BaseProps {
  href: string
  external?: boolean
}

interface NativeButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {}

type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', icon, className } = props
  const classes = cn(baseClasses, variantStyles[variant], sizeStyles[size], className)
  const content = (
    <>
      {children}
      {icon}
    </>
  )

  if ('to' in props && props.to) {
    return (
      <motion.div {...tapMotion} className="inline-block">
        <Link to={props.to} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if ('href' in props && props.href) {
    return (
      <motion.div {...tapMotion} className="inline-block">
        <a
          href={props.href}
          className={classes}
          target={props.external ? '_blank' : undefined}
          rel={props.external ? 'noreferrer noopener' : undefined}
        >
          {content}
        </a>
      </motion.div>
    )
  }

  const nativeAttrs: Record<string, unknown> = {}
  const excluded = new Set(['children', 'variant', 'size', 'icon', 'className', 'to', 'href'])
  for (const [key, value] of Object.entries(props)) {
    if (!excluded.has(key)) nativeAttrs[key] = value
  }

  return (
    // Native attrs are pre-filtered above; framer-motion's HTMLMotionProps narrows a few
    // event handler signatures (e.g. onDrag) incompatibly with React's DOM types.
    <motion.button {...tapMotion} className={classes} {...(nativeAttrs as object)}>
      {content}
    </motion.button>
  )
}
