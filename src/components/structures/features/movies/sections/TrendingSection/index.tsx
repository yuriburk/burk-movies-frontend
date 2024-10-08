'use client'
import { Carousel } from '@/components/structures'
import useProgressRouter from '@/hooks/useProgressRouter'
import { Movie, Trending, TrendingEnum, TrendingOption } from '@/domain'

type TrendingSectionProps = {
  movies: Movie[]
  selectedOption: TrendingEnum
}

const TrendingSection = ({ movies, selectedOption }: TrendingSectionProps) => {
  const { onSelectTrending } = useProgressRouter()

  return (
    <section id="trending">
      <Carousel
        title="Tendências"
        selectorProps={{
          options: Trending.options,
          selectedOption: Trending.getOptionLabel(selectedOption),
          onSelect: (option: string) =>
            onSelectTrending(TrendingEnum[option as TrendingOption])
        }}
        cardsProps={{
          movies
        }}
      />
    </section>
  )
}

export default TrendingSection
