'use client'
import {
  SearchBannerSection,
  TrendingSection,
  ShowsAiringSection,
  CinemaSection
} from '@/components/structures/sections'
import { Movie, TrendingEnum } from '@/domain'
import useProgressRouter from '@/hooks/useProgressRouter'

type HomePageProps = {
  trending: {
    movies: Movie[]
    selectedOption: TrendingEnum
  }
  cinema: {
    movies: Movie[]
  }
  shows: { movies: Movie[] }
}

const HomePage = ({ trending, cinema, shows }: HomePageProps) => {
  const { onSearch } = useProgressRouter()

  return (
    <main className="flex flex-col max-container">
      <SearchBannerSection onSearch={onSearch} />
      <TrendingSection
        movies={trending.movies}
        selectedOption={trending.selectedOption}
      />
      <CinemaSection movies={cinema.movies} />
      <ShowsAiringSection movies={shows.movies} />
    </main>
  )
}

export default HomePage