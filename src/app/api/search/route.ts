import { mapMovies } from '@/utils/mapper'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')

  const result = await fetch(
    `${process.env.MOVIE_API_LINK}/search/multi?include_adult=false&language=pt-BR&page=1&query=${title}`,
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
