'use client'
import { useQuery } from '@tanstack/react-query'
import MovieService from '@/services/movie'

const useShowsAiring = () => {
  const { isFetching, data, error } = useQuery({
    queryKey: ['shows-airing'],
    queryFn: () => MovieService.getShowsAiring()
  })

  return {
    isFetching,
    data,
    error
  }
}

export default useShowsAiring
