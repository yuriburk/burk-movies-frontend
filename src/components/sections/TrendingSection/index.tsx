'use client'
import { useState } from 'react'
import { Card, Selector } from '@/components/common'
import { Requests, TrendingEnum, TrendingOption } from '@/types'
import { Movie } from '@/domain/Movie'
import useTrending from '@/hooks/useTrending'

const trendingOptions = Object.keys(TrendingEnum)

type TrendingSectionProps = {
  initialMovies: Requests<Movie[]>
}

const TrendingSection = ({ initialMovies }: TrendingSectionProps) => {
  const [selectedOption, setSelectedOption] = useState<TrendingOption>('Hoje')

  const { data } = useTrending({
    option: TrendingEnum[selectedOption],
    initialMovies
  })

  return (
    <section id="trending" className="flex flex-col justify-center gap-5 p-8">
      <div className="flex items-center gap-5">
        <h2 className="font-medium text-2xl">Tendências</h2>
        <Selector
          options={trendingOptions}
          selectedOption={selectedOption}
          onSelect={(option) => {
            setSelectedOption(option as TrendingOption)
          }}
        />
      </div>
      <div className="flex overflow-x-scroll gap-3">
        {data?.results?.map((t) => (
          <Card
            key={t.id}
            title={t.title}
            image={t.image}
            popularity={t.popularity}
            date={t.date}
          />
        ))}
      </div>
    </section>
  )
}

export default TrendingSection
