import { ArrowLeft } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export default function NotFound() {
  useSEO({
    title: 'Page Not Found',
    description: 'The page you were looking for could not be found.',
  })

  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-md flex-col items-center text-center">
          <span className="gradient-brand-text text-6xl font-bold">404</span>
          <h1 className="mt-4 text-2xl font-bold text-primary">Page not found</h1>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Button to="/" size="lg" className="mt-7" icon={<ArrowLeft className="h-4 w-4" />}>
            Back to Home
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
