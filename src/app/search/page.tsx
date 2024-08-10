import { SearchListSection } from '@/components/sections'
import MovieService from '@/services/movie'

export default async function Page({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  const title = searchParams.title
  const movies = await MovieService.searchTitle(title)

  return (
    <main className="flex flex-col max-container">
      <SearchListSection movies={movies.results} />
    </main>
  )
}
