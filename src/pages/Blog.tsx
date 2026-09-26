import { useMemo, useState } from 'react'
import { useSEO } from '@/hooks/useSEO'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { BlogCard } from '@/components/cards/BlogCard'
import { cn } from '@/lib/cn'
import { blogPosts, blogCategories } from '@/data/blog'

type CategoryFilter = 'All' | (typeof blogCategories)[number]

export default function Blog() {
  useSEO({
    title: 'Blog',
    description:
      'Insights on Power Platform, SharePoint, automation, AI, Copilot Studio, career growth, and learning resources.',
  })

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts
    return blogPosts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  const filters: CategoryFilter[] = ['All', ...blogCategories]

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on Power Platform, AI, and automation"
        description="Practical write-ups on building with Microsoft Power Platform and AI — architected here to later connect directly to SharePoint or Microsoft Graph as a content source."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  activeCategory === category
                    ? 'gradient-brand text-white shadow-md shadow-brand-purple-500/25'
                    : 'bg-surface-alt text-secondary ring-1 ring-inset ring-subtle hover:text-primary',
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <p className="mt-12 text-center text-sm text-muted">
              No posts in this category yet — check back soon.
            </p>
          ) : null}
        </Container>
      </section>
    </>
  )
}
