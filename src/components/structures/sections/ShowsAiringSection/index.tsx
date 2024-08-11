import { Carousel } from '@/components/structures'
import { Movie } from '@/domain/Movie'
import useProgressRouter from '@/hooks/useProgressRouter'

type ShowAiringSectionProps = {
  movies: Movie[]
}

const ShowsAiringSection = ({ movies }: ShowAiringSectionProps) => {
  const { onMovieClick } = useProgressRouter()

  return (
    <section id="shows-airing">
      <Carousel
        title="Séries No Ar"
        cardsProps={{
          movies,
          onClick: (item) => onMovieClick(item.id, item.mediaType)
        }}
      />
    </section>
  )
}

export default ShowsAiringSection
