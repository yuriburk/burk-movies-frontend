import Card, { CardProps } from './Card'

export type CardsProps = {
  items: (CardProps & { id: number })[]
  isLoading?: boolean
}

export const Cards = ({ items, isLoading }: CardsProps) => (
  <div className="flex overflow-x-scroll gap-3">
    {isLoading
      ? Array.from(Array(10).keys()).map((i) => (
          <div
            key={i}
            className="min-w-[150px] h-[225px] animate-pulse bg-slate-300 rounded-lg"
          ></div>
        ))
      : items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            popularity={item.popularity}
            date={item.date}
          />
        ))}
  </div>
)

export default Cards
