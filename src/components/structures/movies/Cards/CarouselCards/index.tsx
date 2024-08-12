import { Movie } from '@/domain'
import CarouselCard from './CarouselCard'

export type CarouselCardsProps = {
  movies: Movie[]
}

export const CarouselCards = ({ movies }: CarouselCardsProps) => (
  <div className="flex overflow-x-scroll gap-3">
    {movies.map((movie) => (
      <CarouselCard key={movie.id} movie={movie} />
    ))}
  </div>
)

export default CarouselCards
