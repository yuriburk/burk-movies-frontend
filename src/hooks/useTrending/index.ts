'use client'
import { useQuery } from '@tanstack/react-query'
import MovieService from '@/services/movie'
import { TrendingEnum } from '@/types'

type UseTrendingProps = {
  option: TrendingEnum
}

const useTrending = ({ option }: UseTrendingProps) => {
  const { isFetching, data, error } = useQuery({
    queryKey: ['trending', option],
    queryFn: () => MovieService.getTrending(option)
  })

  return {
    isFetching,
    data,
    error
  }
}

export default useTrending
