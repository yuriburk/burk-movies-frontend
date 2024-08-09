import MovieService from '@/services/movie'
import { TrendingEnum } from '@/types'
import { dehydrate, QueryClient } from '@tanstack/react-query'

export async function prefetchTrending() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['trending', TrendingEnum.Hoje],
    queryFn: async () => MovieService.getTrending(TrendingEnum.Hoje)
  })

  return {
    dehydratedTrendingState: dehydrate(queryClient)
  }
}
