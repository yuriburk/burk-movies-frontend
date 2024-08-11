import { SearchPage } from '@/components/pages'
import { SearchService } from '@/services'

export default async function Page({
  searchParams
}: {
  searchParams: { title?: string }
}) {
  const movies = await SearchService.searchTitle(
    searchParams.title ?? 'Super Mario'
  )

  return <SearchPage movies={movies.results} />
}
