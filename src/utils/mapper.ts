import { Movie } from '@/domain/Movie'

export const mapMovies = (movies: Record<string, unknown>[]) =>
  movies
    .filter((movie) => movie.poster_path)
    .map(
      (movie) =>
        ({
          id: movie.id,
          title: movie.title ?? movie.name,
          originalTitle: movie.original_title ?? movie.original_name,
          description: movie.overview,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          date: movie.release_date ?? movie.first_air_date,
          popularity: movie.vote_average
        }) as Movie
    )
