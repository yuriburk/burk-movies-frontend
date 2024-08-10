import { SearchPage } from '@/components/pages'
import MovieService from '@/services/movie'

export default async function Page({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  const title = searchParams.title
  const movies = await MovieService.searchTitle(title)

  return <SearchPage movies={movies.results} />
}
