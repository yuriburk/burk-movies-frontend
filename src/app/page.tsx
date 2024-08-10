import MovieService from '@/services/movie'
import { Trending, TrendingEnum } from '@/domain'
import { HomePage } from '@/components/pages'

export default async function Home({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  const trendingOption = Trending.getOption(searchParams.trending)
  const [trending, cinema, shows] = await Promise.all([
    MovieService.getTrending(trendingOption as TrendingEnum),
    MovieService.getCinema(),
    MovieService.getShowsAiring()
  ])

  return (
    <HomePage
      trending={{ movies: trending.results, selectedOption: trendingOption }}
      cinema={{ movies: cinema.results }}
      shows={{ movies: shows.results }}
    />
  )
}
