'use client'
import { useQuery } from '@tanstack/react-query'
import MovieService from '@/services/movie'

const useCinema = () => {
  const { isFetching, data, error } = useQuery({
    queryKey: ['cinema'],
    queryFn: () => MovieService.getCinema()
  })

  return {
    isFetching,
    data,
    error
  }
}

export default useCinema
