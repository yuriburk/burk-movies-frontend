import CarouselCard, { CarouselCardProps } from './CarouselCard'

export type CarouselCardsProps = {
  items: (CarouselCardProps & { id: number })[]
}

export const CarouselCards = ({ items }: CarouselCardsProps) => (
  <div className="flex overflow-x-scroll gap-3">
    {items.map((item) => (
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
