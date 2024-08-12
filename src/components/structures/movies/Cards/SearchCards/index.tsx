import { Movie } from '@/domain'
import SearchCard from './SearchCard'

type SearchCardsProps = {
  movies: Movie[]
}

const SearchCards = ({ movies }: SearchCardsProps) => {
  return (
    <div className="flex flex-col gap-5">
      {movies.map((movie) => (
        <SearchCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          originalTitle={movie.originalTitle}
          description={movie.description}
          image={movie.image}
          date={movie.date}
          mediaType={movie.mediaType}
        />
      ))}
    </div>
  )
}

export default SearchCards
