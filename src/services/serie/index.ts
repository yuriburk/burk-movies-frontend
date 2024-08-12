import { Movie } from '@/domain'
import { Response } from '@/types/api'

class SerieService {
  static async getShowsAiring(): Promise<Response<Movie[]>> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}serie/airing`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
  static async getSerieDetails(id: number): Promise<Movie> {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}serie/${id}`)

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
}

export default SerieService
