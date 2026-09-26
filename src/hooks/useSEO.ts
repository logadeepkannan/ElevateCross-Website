import { useEffect } from 'react'
import { siteConfig } from '@/data/siteConfig'

interface SEOOptions {
  title: string
  description: string
}

function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/** Sets the document title and description/OG meta tags for the active page. */
export function useSEO({ title, description }: SEOOptions): void {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.companyName}`
    document.title = fullTitle
    setMetaTag('description', description)
    setMetaTag('og:title', fullTitle, 'property')
    setMetaTag('og:description', description, 'property')
    setMetaTag('twitter:title', fullTitle)
    setMetaTag('twitter:description', description)
  }, [title, description])
}
