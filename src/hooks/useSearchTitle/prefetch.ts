import MovieService from '@/services/movie'
import { dehydrate, QueryClient } from '@tanstack/react-query'

export async function prefetchSearch(title: string) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['search', title],
    queryFn: async () => MovieService.searchTitle(title)
  })

  return {
    dehydratedSearchState: dehydrate(queryClient)
  }
}
