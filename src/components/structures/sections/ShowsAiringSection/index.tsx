import { Carousel } from '@/components/common'
import { Movie } from '@/domain/Movie'

type ShowAiringSectionProps = {
  movies: Movie[]
}

const ShowsAiringSection = ({ movies }: ShowAiringSectionProps) => {
  return (
    <section id="shows-airing">
      <Carousel title="Séries No Ar" cardsProps={{ items: movies }} />
    </section>
  )
}

export default ShowsAiringSection
