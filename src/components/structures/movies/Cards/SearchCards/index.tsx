import SearchCard, { SearchCardProps } from './SearchCard'

type SearchCardsProps = {
  items: (SearchCardProps & { id: number })[]
  isLoading?: boolean
}

const SearchCards = ({ items }: SearchCardsProps) => {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item) => (
        <SearchCard
          key={item.id}
          title={item.title}
          originalTitle={item.originalTitle}
          description={item.description}
          image={item.image}
          date={item.date}
        />
      ))}
    </div>
  )
}

export default SearchCards
