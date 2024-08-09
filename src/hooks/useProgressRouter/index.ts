import { useRouter } from 'next/navigation'
import NProgress from 'nprogress'

const useProgressRouter = () => {
  const router = useRouter()

  const onSearch = (text: string) => {
    if (text.length) {
      NProgress.start()
      router.push(`/search?title=${text}`)
    }
  }

  return { onSearch }
}

export default useProgressRouter
