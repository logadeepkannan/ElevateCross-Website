import { useEffect, useState } from 'react'
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { navLinks } from '@/data/siteConfig'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled || menuOpen
          ? 'glass-panel border-b border-subtle shadow-sm'
          : 'border-b border-transparent',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20" aria-label="Primary">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <RouterNavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-primary' : 'text-secondary hover:text-primary',
                    )
                  }
                >
                  {({ isActive }: { isActive: boolean }) => (
                    <>
                      {link.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-surface-alt"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      ) : null}
                    </>
                  )}
                </RouterNavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button to="/contact" size="md" icon={<ArrowRight className="h-4 w-4" />}>
              Let&apos;s Talk
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-primary ring-1 ring-inset ring-strong"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-subtle glass-panel lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <RouterNavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-lg px-3 py-3 text-base font-medium transition-colors',
                        isActive ? 'bg-surface-alt text-primary' : 'text-secondary hover:text-primary',
                      )
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                </motion.div>
              ))}
              <div className="mt-3">
                <Button to="/contact" className="w-full" icon={<ArrowRight className="h-4 w-4" />}>
                  Let&apos;s Talk
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
