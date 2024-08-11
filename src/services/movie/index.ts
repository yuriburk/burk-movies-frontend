import { Movie } from '@/domain/Movie'
import { Response } from '@/types/api'

class MovieService {
  static async getCinema(): Promise<Response<Movie[]>> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}movies/cinema`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
  static async getMovieDetails(id: number): Promise<Movie> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}movies/${id}`
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }

    return result.json()
  }
}

export default MovieService
