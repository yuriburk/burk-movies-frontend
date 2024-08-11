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

  const onMovieClick = (id: number, mediaType: string) => {
    console.log({ mediaType })
    if (mediaType === 'movie') {
      NProgress.start()
      return router.push(`/movie/${id}`)
    }
  }

  return { onSelectTrending, onSearch, onLogoClick, onMovieClick }
}

export default useProgressRouter
