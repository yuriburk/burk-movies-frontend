import CarouselCard, { CarouselCardItem } from './CarouselCard'

type Item = { id: number; mediaType: string } & CarouselCardItem

export type CarouselCardsProps = {
  items: Item[]
  onClick: (item: Item) => void
}

export const CarouselCards = ({ items, onClick }: CarouselCardsProps) => (
  <div className="flex overflow-x-scroll gap-3">
    {items.map((item) => (
      <CarouselCard
        key={item.id}
        title={item.title}
        image={item.image}
        popularity={item.popularity}
        date={item.date}
        onClick={() => onClick(item)}
      />
    ))}
  </div>
)

export default CarouselCards
