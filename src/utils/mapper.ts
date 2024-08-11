import { Movie } from '@/domain'
import { MovieDetailsResponse, MovieResponse, ShowResponse } from '@/types/api'

export const mapMovie = (movie: MovieResponse & ShowResponse): Movie =>
  ({
    id: movie.id,
    title: movie.title ?? movie.name,
    originalTitle: movie.original_title ?? movie.original_name,
    description: movie.overview,
    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`,
    date: movie.release_date ?? movie.first_air_date,
    popularity: movie.vote_average,
    mediaType: movie.media_type
  }) as Movie

export const mapMovies = (movies: (MovieResponse & ShowResponse)[]): Movie[] =>
  movies.filter((movie) => movie.poster_path).map((movie) => mapMovie(movie))

export const mapMovieDetails = (
  movie: MovieDetailsResponse & ShowResponse
): Movie => ({
  ...mapMovie(movie),
  details: {
    genres: movie.genres.map((genre) => genre.name),
    duration: movie.runtime,
    paragraph: movie.tagline,
    actors: movie.credits.cast.map((actor) => ({
      id: actor.id,
      name: actor.name,
      image: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
      title: actor.character
    })),
    situation: movie.status,
    releaseLanguage: movie.original_language,
    revenue: movie.revenue,
    budget: movie.budget
  }
})
