'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/common'
import NavigationIcon from './NavigationIcon'
import { NavigationUser } from './NavigationUser'
import NavigationLinks from './NavigationLinks'

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header>
      <div className="bg-primary-background text-white font-medium fixed w-full z-30 top-0">
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
          <button
            type="button"
            className="fill-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <NavigationIcon />
          </button>
          <Logo id="logo-navigation-mobile" width={25} height={25} />
          <NavigationUser />
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed top-0 flex md:hidden items-center justify-center h-screen w-screen text-white font-semibold bg-primary-background z-10"
            initial={{ translateX: -500 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -800 }}
          >
            <button onClick={() => setMobileOpen(false)}>
              <NavigationLinks className="flex flex-col gap-32" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
