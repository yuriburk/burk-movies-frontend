import { Movie } from '@/domain'
import { Response } from '@/types/api'

class SearchService {
  static async searchTitle(title: string): Promise<Response<Movie[]>> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}search?title=${title}`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
}

export default SearchService
