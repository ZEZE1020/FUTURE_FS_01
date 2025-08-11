import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Godfrey Ogembo ',
  description:
    'Hello, I am Godfrey Ogembo, a software engineer with a passion for building scalable and efficient applications. I love exploring new technologies and sharing my knowledge with others.',
  keywords: 'Godfrey Ogembo, software engineer, web development, programming',
  href: 'https://astro-erudite.vercel.app',
  author: 'Ogembo Godfrey',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/contact',
    label: 'contact',
  },
  {
    href: '/about',
    label: 'projects',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ZEZE1020',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/ogembo_godfrey',
    label: 'Twitter',
  },
  {
    href: 'mailto:ogembogodfrey75@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/ogembo-godfrey/',
    label: 'LinkedIn',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
