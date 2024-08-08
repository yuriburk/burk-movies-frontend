import { Movie } from '@/domain/Movie'

export const mapMovies = (movies: Record<string, unknown>[]) =>
  movies.map(
    (movie) =>
      ({
        id: movie.id,
        title: movie.title ?? movie.name,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        date: movie.release_date ?? movie.first_air_date,
        popularity: movie.vote_average
      }) as Movie
  )
