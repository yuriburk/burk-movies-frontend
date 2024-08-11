export type Actor = { id: number; name: string; image: string; title: string }

export type MovieDetail = {
  genres: string[]
  duration: number
  actors: Actor[]
  situation: string
  releaseLanguage: string
  revenue: number
  budget: number
}

export type Movie = {
  id: number
  title: string
  originalTitle: string
  mediaType: 'movie' | 'tv'
  description: string
  image: string
  backdrop: string
  date: string
  popularity: number
  details?: MovieDetail
}
