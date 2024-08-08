import { SearchSection, TrendingSection } from '@/components/sections'
import { prefetchTrending } from '@/hooks/useTrending/prefetch'
import { HydrationBoundary } from '@tanstack/react-query'

export default async function Home() {
  const {
    props: { dehydratedTrendingState }
  } = await prefetchTrending()

  return (
    <main className="flex flex-col w-screen h-screen max-container">
      <SearchSection />
      <HydrationBoundary state={dehydratedTrendingState}>
        <TrendingSection />
      </HydrationBoundary>
    </main>
  )
}
