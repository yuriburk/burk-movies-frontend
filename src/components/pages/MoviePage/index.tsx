import { MovieDetailSection } from '@/components/structures/sections'
import MovieActorSection from '@/components/structures/sections/MovieActorSection'
import { Movie } from '@/domain'

type MoviePageProps = {
  movie: Movie
  backdropColor: string
}

const MoviePage = ({ movie, backdropColor }: MoviePageProps) => {
  return (
    <main>
      {movie?.details ? (
        <div>
          <MovieDetailSection
            title={movie.title}
            image={movie.image}
            backdrop={movie.backdrop}
            backdropColor={backdropColor}
            date={movie.date}
            genres={movie.details.genres}
            popularity={movie.popularity}
            description={movie.description}
            situation={movie.details.situation}
            revenue={movie.details.revenue}
            budget={movie.details.budget}
            duration={movie.details.duration}
            episodes={movie.details.episodes}
          />
          <MovieActorSection actors={movie.details.actors} />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full min-h-[350px]">
          <p>Ops, parece que tem nada desse filme.</p>
        </div>
      )}
    </main>
  )
}

export default MoviePage
