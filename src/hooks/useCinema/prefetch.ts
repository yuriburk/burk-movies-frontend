import MovieService from '@/services/movie'
import { dehydrate, QueryClient } from '@tanstack/react-query'

export async function prefetchCinema() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['cinema'],
    queryFn: async () => MovieService.getCinema()
  })

  return {
    dehydratedCinema: dehydrate(queryClient)
  }
}
