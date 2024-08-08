'use client'
import { useQuery } from '@tanstack/react-query'
import MovieService from '@/services/movie'
import { Requests, TrendingEnum } from '@/types'
import { Movie } from '@/domain/Movie'

type UseTrendingProps = {
  option: TrendingEnum
  initialMovies: Requests<Movie[]>
}

const useTrending = ({ option, initialMovies }: UseTrendingProps) => {
  const { isPending, data, error } = useQuery({
    queryKey: ['trending', option],
    queryFn: () => MovieService.getTrending(option),
    placeholderData: initialMovies
  })

  return { isPending, data, error }
}

export default useTrending
