import Link from 'next/link'
import { Logo } from '@/components/common'
import { NavigationLink } from '@/types'
import NavigationIcon from './NavigationIcon'
import { NavigationUser } from './NavigationUser'

export const navigationLinks: NavigationLink[] = [
  { title: 'Filmes', link: '/movie' },
  { title: 'Séries', link: '/tv' },
  { title: 'Pessoas', link: '/person' }
]

const Navigation = () => {
  return (
    <header>
      <div className="bg-primary-background text-white font-medium">
        <div className="hidden md:flex justify-between items-center h-16 px-10 max-container">
          <div className="flex items-center gap-8">
            <Logo id="logo-navigation-desktop" width={35} height={35} />
            <ul className="flex gap-8">
              {navigationLinks.map((navigationLink) => (
                <li key={navigationLink.title}>
                  <Link href={navigationLink.link}>{navigationLink.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <p className="border border-white px-1 py-0.5 rounded">PT</p>
            <Link href="/">Entrar</Link>
            <Link href="/">Junte-se ao TMDB</Link>
          </div>
        </div>
        <div className="flex md:hidden justify-between items-center h-16 px-5">
          <div className="fill-white">
            <NavigationIcon />
          </div>
          <Logo id="logo-navigation-mobile" width={25} height={25} />
          <NavigationUser />
        </div>
      </div>
    </header>
  )
}

export default Navigation
