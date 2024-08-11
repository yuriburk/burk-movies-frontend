'use client'
import Selector, { SelectorProps } from '@/components/common/Selector'
import CarouselCards, {
  CarouselCardsProps
} from '@/components/structures/movies/Cards/CarouselCards'

type CarouselProps = {
  title: string
  selectorProps?: SelectorProps
  cardsProps: CarouselCardsProps
}

const Carousel = ({ title, selectorProps, cardsProps }: CarouselProps) => (
  <div className="flex flex-col justify-center gap-5 p-8">
    <div className="flex flex-wrap items-center gap-5">
      <h2 className="font-medium text-2xl">{title}</h2>
      {selectorProps && (
        <Selector
          options={selectorProps.options}
          selectedOption={selectorProps.selectedOption}
          onSelect={selectorProps.onSelect}
        />
      )}
    </div>
    <CarouselCards movies={cardsProps.movies} onClick={cardsProps.onClick} />
  </div>
)

export default Carousel
