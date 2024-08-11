import { MovieService, ShowService, TrendingService } from '@/services'
import { Trending, TrendingEnum } from '@/domain'
import { HomePage } from '@/components/pages'

export default async function Home({
  searchParams
}: {
  searchParams: { trending?: string }
}) {
  const trendingOption = Trending.getOption(searchParams.trending)
  const [trending, cinema, shows] = await Promise.all([
    TrendingService.getTrending(trendingOption as TrendingEnum),
    MovieService.getCinema(),
    ShowService.getShowsAiring()
  ])

  return (
    <HomePage
      trending={{ movies: trending.results, selectedOption: trendingOption }}
      cinema={{ movies: cinema.results }}
      shows={{ movies: shows.results }}
    />
  )
}
