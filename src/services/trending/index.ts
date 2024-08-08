import { Trending } from '@/domain/Trending'
import { Requests } from '@/types/Services'

class TrendingService {
  static async getAll(): Promise<Requests<Trending[]>> {
    'use server'
    const result = await fetch(
      `${process.env.API_LINK}/trending/all/day?language=pt-BR`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`
        }
      }
    )

    if (!result.ok) {
      throw new Error('Failed to fetch data')
    }
    return result.json()
  }
}

export default TrendingService
