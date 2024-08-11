export type MovieResponse = {
  id: number
  backdrop_path: string
  title: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type ShowResponse = {
  id: number
  backdrop_path: string
  name: string
  original_name: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  original_language: string
  genre_ids: number[]
  popularity: number
  first_air_date: string
  vote_average: number
  vote_count: number
  origin_country: string[]
}

export type Actor = {
  id: number
  name: string
  popularity: number
  profile_path: string
  character: string
}

export type MovieDetailsResponse = {
  id: number
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: { id: number; name: string }[]
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  title: string
  video: false
  vote_average: number
  credits: {
    cast: Actor[]
  }
  recommendations: Response<MovieResponse>
}

export type Response<T> = {
  page: number
  results: T
  total_pages: number
  total_results: number
}
