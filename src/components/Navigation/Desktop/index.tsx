import Link from 'next/link'
import Image from 'next/image'
import { NavigationLink } from '@/types'
import logoDesktop from '../../../../public/images/logo-desktop.png'

type DesktopProps = {
  navigationLinks: NavigationLink[]
}

const Desktop = ({ navigationLinks }: DesktopProps) => {
  return (
    <div className="bg-primary text-white font-medium">
      <div className="flex justify-between items-center h-16 px-10 max-container">
        <div className="flex items-center gap-8">
          <Image
            src={logoDesktop}
            alt="Logo Burk Movies"
            width={130}
            height={45}
          />
          <ul className="flex gap-6">
            {navigationLinks.map((navigationLink) => (
              <li key={navigationLink.title}>
                <Link href={navigationLink.link}>{navigationLink.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <p className="border border-white px-1 py-0.5 rounded">PT</p>
          <Link href="/">Entrar</Link>
          <Link href="/">Junte-se ao TMDB</Link>
        </div>
      </div>
    </div>
  )
}

export default Desktop
