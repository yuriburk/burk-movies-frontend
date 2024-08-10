import Link from 'next/link'
import { Logo } from '@/components/common'
import NavigationIcon from './NavigationIcon'
import { NavigationUser } from './NavigationUser'
import NavigationLinks from './NavigationLinks'

const Navigation = () => {
  return (
    <header>
      <div className="bg-primary-background text-white font-medium fixed w-full z-10 top-0">
        <div className="hidden md:flex justify-between items-center h-16 px-10">
          <div className="flex items-center gap-8">
            <Logo id="logo-navigation-desktop" width={35} height={35} />
            <NavigationLinks className="flex gap-8" />
          </div>
          <div className="flex items-center gap-8">
            <p className="border border-white px-1 py-0.5 rounded">PT</p>
            <Link href="/">Entrar</Link>
          </div>
        </div>
        <div className="flex md:hidden justify-between items-center h-16 px-5">
          <button type="button" className="fill-white">
            <NavigationIcon />
          </button>
          <Logo id="logo-navigation-mobile" width={25} height={25} />
          <NavigationUser />
        </div>
      </div>
    </header>
  )
}

export default Navigation
