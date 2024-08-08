import { mapMovies } from '@/utils/mapper'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const time = searchParams.get('time')

  const result = await fetch(
    `${process.env.MOVIE_API_LINK}/trending/all/${time}?language=pt-BR`,
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
