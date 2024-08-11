import { MovieBannerDetails } from '@/components/structures/sections'
import { Movie } from '@/domain'

type MoviePageProps = {
  movie: Movie
  backdropColor: string
}

const MoviePage = ({ movie, backdropColor }: MoviePageProps) => {
  return (
    <main>
      {movie?.details ? (
        <MovieBannerDetails
          title={movie.title}
          image={movie.image}
          backdrop={movie.backdrop}
          backdropColor={backdropColor}
          date={movie.date}
          genres={movie.details.genres}
          duration={movie.details.duration}
          popularity={movie.popularity}
          description={movie.description}
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
