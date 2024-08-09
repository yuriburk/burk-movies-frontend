import MovieService from '@/services/movie'
import { dehydrate, QueryClient } from '@tanstack/react-query'

export async function prefetchShowsAiring() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['shows-airing'],
    queryFn: async () => MovieService.getShowsAiring()
  })

  return {
    dehydratedShowState: dehydrate(queryClient)
  }
}
