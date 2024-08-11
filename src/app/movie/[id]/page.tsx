import { MoviePage } from '@/components/pages'
import { MovieService } from '@/services'

export default async function Page({ params }: { params: { id: number } }) {
  const movie = await MovieService.getMovieDetails(params.id)

  return <MoviePage movie={movie} />
}
