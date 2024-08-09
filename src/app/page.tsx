import { HydrationBoundary } from '@tanstack/react-query'
import {
  SearchSection,
  TrendingSection,
  ShowsAiringSection,
  CinemaSection
} from '@/components/sections'
import { prefetchShowsAiring } from '@/hooks/useShowsAiring/prefetch'
import { prefetchTrending } from '@/hooks/useTrending/prefetch'
import { prefetchCinema } from '@/hooks/useCinema/prefetch'

export default async function Home() {
  const { dehydratedTrendingState } = await prefetchTrending()
  const { dehydratedCinema } = await prefetchCinema()
  const { dehydratedShowState } = await prefetchShowsAiring()

  return (
    <main className="flex flex-col max-container">
      <SearchSection />
      <HydrationBoundary state={dehydratedTrendingState}>
        <TrendingSection />
      </HydrationBoundary>
      <HydrationBoundary state={dehydratedCinema}>
        <CinemaSection />
      </HydrationBoundary>
      <HydrationBoundary state={dehydratedShowState}>
        <ShowsAiringSection />
      </HydrationBoundary>
    </main>
  )
}
