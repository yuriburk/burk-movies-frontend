'use client'
import { TrendingEnum } from '@/domain'
import { useRouter } from 'next/navigation'
import NProgress from 'nprogress'

const useProgressRouter = () => {
  const router = useRouter()

  const onSelectTrending = (option: TrendingEnum) => {
    NProgress.start()
    router.push(`/?trending=${option}`)
  }

  const onSearch = (text: string) => {
    if (text.length) {
      NProgress.start()
      router.push(`/search?title=${text}`)
    }
  }

  const onLogoClick = () => {
    NProgress.start()
    router.push('/')
  }

  return { onSelectTrending, onSearch, onLogoClick }
}

export default useProgressRouter
