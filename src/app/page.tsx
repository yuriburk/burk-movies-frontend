import { SearchSection, TrendingSection } from '@/components/sections'
import MovieService from '@/services/movie'
import { TrendingEnum } from '@/types'

export default async function Home() {
  const trending = await MovieService.getTrending(TrendingEnum.Hoje)

  return (
    <main className="flex flex-col w-screen h-screen max-container">
      <SearchSection />
      <TrendingSection initialMovies={trending} />
    </main>
  )
}
