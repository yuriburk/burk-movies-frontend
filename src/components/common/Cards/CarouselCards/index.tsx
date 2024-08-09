import CarouselCard, { CarouselCardProps } from './CarouselCard'

export type CarouselCardsProps = {
  items: (CarouselCardProps & { id: number })[]
  isLoading?: boolean
}

export const CarouselCards = ({ items, isLoading }: CarouselCardsProps) => (
  <div className="flex overflow-x-scroll gap-3">
    {isLoading
      ? Array.from(Array(10).keys()).map((i) => (
          <div
            key={i}
            className="min-w-[150px] h-[225px] animate-pulse bg-slate-300 rounded-lg"
          ></div>
        ))
      : items.map((item) => (
          <CarouselCard
            key={item.id}
            title={item.title}
            image={item.image}
            popularity={item.popularity}
            date={item.date}
          />
        ))}
  </div>
)

export default CarouselCards
