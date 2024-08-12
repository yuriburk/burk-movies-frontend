import Vibrant from 'node-vibrant'
import { MoviePage } from '@/components/pages'
import { SerieService } from '@/services'

export default async function Page({ params }: { params: { id: number } }) {
  const movie = await SerieService.getSerieDetails(params.id)
  const { DarkVibrant } = await Vibrant.from(movie.image).getSwatches()

  return (
    <MoviePage
      movie={movie}
      backdropColor={`rgb(${DarkVibrant?.rgb[0]},${DarkVibrant?.rgb[1]},${DarkVibrant?.rgb[2]},0.8)`}
    />
  )
}
