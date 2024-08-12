import { mapMovies } from '@/utils/mapper'

export async function GET() {
  const result = await fetch(
    `${process.env.MOVIE_API_LINK}discover/tv?include_adult=false&language=pt-BR&page=1&sort_by=popularity.desc`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.MOVIE_API_TOKEN}`
      }
    }
  )

  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await result.json()

  const movies = {
    ...data,
    results: mapMovies(data.results)
  }

  return Response.json(movies)
}
