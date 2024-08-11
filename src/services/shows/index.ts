import { Movie } from '@/domain'
import { Response } from '@/types/api'

class ShowService {
  static async getShowsAiring(): Promise<Response<Movie[]>> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}shows/airing`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
  static async getShowsDetails(id: number): Promise<Response<Movie[]>> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}shows/details/${id}`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
}

export default ShowService
