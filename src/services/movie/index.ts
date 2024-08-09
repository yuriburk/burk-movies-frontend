import { Movie } from '@/domain/Movie'
import { Requests, TrendingEnum } from '@/types'

class MovieService {
  static async getTrending(
    trendingOption: TrendingEnum
  ): Promise<Requests<Movie[]>> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}/trending?time=${trendingOption}`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
}

export default MovieService
