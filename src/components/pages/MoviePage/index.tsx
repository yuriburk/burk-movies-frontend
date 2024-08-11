import { MovieBannerDetails } from '@/components/structures/sections'
import { Movie } from '@/domain'

type MoviePageProps = {
  movie: Movie
}

const MoviePage = ({ movie }: MoviePageProps) => {
  return (
    <main>
      {movie?.details ? (
        <MovieBannerDetails
          title={movie.title}
          image={movie.image}
          backdrop={movie.backdrop}
          date={movie.date}
          genres={movie.details.genres}
          duration={movie.details.duration}
        />
      ) : (
        <div className="flex justify-center items-center w-full min-h-[350px]">
          <p>Ops, parece que tem nada desse filme.</p>
        </div>
      )}
    </main>
  )
}

export default MoviePage
