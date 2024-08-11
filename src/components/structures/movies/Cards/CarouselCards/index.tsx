import { Movie } from '@/domain'
import CarouselCard from './CarouselCard'

export type CarouselCardsProps = {
  movies: Movie[]
  onClick: (movie: Movie) => void
}

export const CarouselCards = ({ movies, onClick }: CarouselCardsProps) => (
  <div className="flex overflow-x-scroll gap-3">
    {movies.map((movie) => (
      <CarouselCard
        key={movie.id}
        movie={movie}
        onClick={() => onClick(movie)}
      />
    ))}
  </div>
)

export default CarouselCards
