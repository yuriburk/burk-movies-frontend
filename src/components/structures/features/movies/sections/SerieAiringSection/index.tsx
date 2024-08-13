import { Carousel } from '@/components/structures'
import { Movie } from '@/domain/Movie'

type ShowAiringSectionProps = {
  movies: Movie[]
}

const SerieAiringSection = ({ movies }: ShowAiringSectionProps) => {
  return (
    <section id="serie-airing">
      <Carousel
        title="Séries No Ar"
        cardsProps={{
          movies
        }}
      />
    </section>
  )
}

export default SerieAiringSection
