import { mapMovieDetails } from '@/utils/mapper'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const result = await fetch(
    `${process.env.MOVIE_API_LINK}tv/${params.id}?language=pt-BR&append_to_response=credits`,
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

  const movie = mapMovieDetails(data)

  return Response.json(movie)
}
