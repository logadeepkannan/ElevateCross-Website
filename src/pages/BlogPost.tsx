import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { blogPosts } from '@/data/blog'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  useSEO({
    title: post ? post.title : 'Article Not Found',
    description: post ? post.excerpt : 'This article could not be found.',
  })

  if (!post) return <NotFound />

  const date = new Date(post.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>

          <Reveal className="mt-6">
            <Badge variant="brand">{post.category}</Badge>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 rounded-2xl border border-subtle bg-surface-alt p-6 sm:p-8">
            <p className="text-base leading-relaxed text-secondary">{post.excerpt}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Full article content for this post is coming soon. This blog is architected to pull
              published content directly from SharePoint or Microsoft Graph, so articles can be
              authored and managed there once that integration is connected.
            </p>
          </Reveal>
        </div>
      </Container>
    </article>
  )
}
