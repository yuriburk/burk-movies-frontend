import { Carousel } from '@/components/common'
import { Movie } from '@/domain/Movie'

type ShowAiringSectionProps = {
  shows: Movie[]
}

const ShowsAiringSection = ({ shows }: ShowAiringSectionProps) => {
  return (
    <section id="shows-airing">
      <Carousel title="Séries No Ar" cardsProps={{ items: shows }} />
    </section>
  )
}

export default ShowsAiringSection
