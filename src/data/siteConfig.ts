import { LinkedInIcon, YoutubeIcon, InstagramIcon } from '@/components/icons/BrandIcons'
import type { NavLink, SocialLink } from '@/types'

export const siteConfig = {
  companyName: 'ElevateCross',
  tagline: 'Microsoft Power Platform & AI Solutions',
  description:
    'A modern Microsoft Power Platform and AI automation studio building business applications, intelligent workflows, and Copilot-powered agents for organizations that want to work smarter.',
  email: 'hello@elevatecross.com',
  phone: '+1 (555) 010-2024',
  address: 'Remote-first, serving clients worldwide',
  logo: '/favicon.svg',
  socialLinks: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com', icon: LinkedInIcon },
    { label: 'YouTube', url: 'https://www.youtube.com', icon: YoutubeIcon },
    { label: 'Instagram', url: 'https://www.instagram.com', icon: InstagramIcon },
  ] satisfies SocialLink[],
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Training', path: '/training' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
]

export const footerLinks = {
  navigation: navLinks,
  services: [
    { label: 'Power Apps', path: '/services#power-apps' },
    { label: 'Power Automate', path: '/services#power-automate' },
    { label: 'SharePoint', path: '/services#sharepoint' },
    { label: 'Copilot Studio', path: '/services#copilot-studio' },
    { label: 'AI Automation', path: '/services#ai-automation' },
    { label: 'Power Pages', path: '/services#power-pages' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
}
