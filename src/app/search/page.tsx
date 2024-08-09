import { HydrationBoundary } from '@tanstack/react-query'
import { SearchListSection } from '@/components/sections'
import { prefetchSearch } from '@/hooks/useSearchTitle/prefetch'

export default async function Page({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  const title = searchParams.title
  const { dehydratedSearchState } = await prefetchSearch(title)

  return (
    <main className="flex flex-col max-container">
      <HydrationBoundary state={dehydratedSearchState}>
        <SearchListSection title={title} />
      </HydrationBoundary>
    </main>
  )
}
