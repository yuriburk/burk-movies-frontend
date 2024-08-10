import Link from 'next/link'
import { NavigationLink } from '@/types'

export const navigationLinks: NavigationLink[] = [
  { title: 'Filmes', link: '/' },
  { title: 'Séries', link: '/' },
  { title: 'Pessoas', link: '/' }
]

type NavigationLinksProps = {
  className?: string
}

const NavigationLinks = ({ className }: NavigationLinksProps) => (
  <ul className={className}>
    {navigationLinks.map((navigationLink) => (
      <li key={navigationLink.title}>
        <Link href={navigationLink.link}>{navigationLink.title}</Link>
      </li>
    ))}
  </ul>
)

export default NavigationLinks
