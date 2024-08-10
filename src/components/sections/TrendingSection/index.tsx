'use client'
import { Carousel } from '@/components/common'
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
        cardsProps={{ items: movies }}
      />
    </section>
  )
}

export default TrendingSection
