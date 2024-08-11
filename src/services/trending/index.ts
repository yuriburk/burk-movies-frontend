import { Movie } from '@/domain'
import { Response } from '@/types/api'

class TrendingService {
  static async getTrending(trendingOption: string): Promise<Response<Movie[]>> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}trending?time=${trendingOption}`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
}

export default TrendingService
