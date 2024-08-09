'use client'
import Selector, { SelectorProps } from '@/components/common/Selector'
import Cards, { CardsProps } from '@/components/common/Cards'

type CarouselProps = {
  title: string
  selectorProps?: SelectorProps
  cardsProps: CardsProps
}

const Carousel = ({
  title,
  selectorProps,
  cardsProps: { items, isLoading }
}: CarouselProps) => (
  <div className="flex flex-col justify-center gap-5 p-8">
    <div className="flex items-center gap-5">
      <h2 className="font-medium text-2xl">{title}</h2>
      {selectorProps && (
        <Selector
          options={selectorProps.options}
          selectedOption={selectorProps.selectedOption}
          onSelect={selectorProps.onSelect}
        />
      )}
    </div>
    <Cards items={items} isLoading={isLoading} />
  </div>
)

export default Carousel
