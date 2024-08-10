import {
  SearchSection,
  TrendingSection,
  ShowsAiringSection,
  CinemaSection
} from '@/components/sections'
import MovieService from '@/services/movie'
import { Trending, TrendingEnum } from '@/domain'

export default async function Home({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  const trendingOption = Trending.getOption(searchParams.trending)
  const [trending, cinema, showsAiring] = await Promise.all([
    MovieService.getTrending(trendingOption as TrendingEnum),
    MovieService.getCinema(),
    MovieService.getShowsAiring()
  ])

  return (
    <main className="flex flex-col max-container">
      <SearchSection />
      <TrendingSection
        movies={trending.results}
        selectedOption={trendingOption}
      />
      <CinemaSection movies={cinema.results} />
      <ShowsAiringSection shows={showsAiring.results} />
    </main>
  )
}
