import Desktop from './Desktop'
import { NavigationLink } from '@/types'

const navigationLinks: NavigationLink[] = [
  { title: 'Filmes', link: '/movie' },
  { title: 'Séries', link: '/tv' },
  { title: 'Pessoas', link: '/person' }
]

const Navigation = () => {
  return (
    <header>
      <Desktop navigationLinks={navigationLinks} />
    </header>
  )
}

export default Navigation
