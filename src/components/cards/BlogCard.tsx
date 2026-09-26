import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import type { BlogPost } from '@/types'

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const date = new Date(post.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <Badge variant="brand">{post.category}</Badge>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-primary">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between border-t border-subtle pt-4 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" /> {date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" /> {post.readTime}
        </span>
      </div>
      <Link
        to={`/blog/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple-600 transition-colors group-hover:gap-2 dark:text-brand-purple-400"
      >
        Read article
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.article>
  )
}
