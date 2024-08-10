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

export type Response<T> = {
  page: number
  results: T
  total_pages: number
  total_results: number
}
