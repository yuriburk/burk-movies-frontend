'use client'
import { useQuery } from '@tanstack/react-query'
import MovieService from '@/services/movie'

type UseSearchTitleProps = {
  title: string
}

const useSearchTitle = ({ title }: UseSearchTitleProps) => {
  const { isFetching, data, error } = useQuery({
    queryKey: ['search', title],
    queryFn: () => MovieService.searchTitle(title)
  })

  return {
    isFetching,
    data,
    error
  }
}

export default useSearchTitle
