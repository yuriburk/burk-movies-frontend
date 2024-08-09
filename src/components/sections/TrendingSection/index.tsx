'use client'
import { useState } from 'react'
import { Carousel } from '@/components/common'
import { TrendingEnum, TrendingOption } from '@/types'
import useTrending from '@/hooks/useTrending'

const trendingOptions = Object.keys(TrendingEnum)

const TrendingSection = () => {
  const [selectedOption, setSelectedOption] = useState<TrendingOption>('Hoje')

  const { data, isFetching } = useTrending({
    option: TrendingEnum[selectedOption]
  })

  return (
    <section id="trending">
      <Carousel
        title="Tendências"
        selectorProps={{
          options: trendingOptions,
          selectedOption,
          onSelect: (option: string) => {
            setSelectedOption(option as TrendingOption)
          }
        }}
        cardsProps={{ items: data?.results ?? [], isLoading: isFetching }}
      />
    </section>
  )
}

export default TrendingSection
