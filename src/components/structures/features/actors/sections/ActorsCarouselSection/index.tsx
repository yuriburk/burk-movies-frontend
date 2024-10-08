import { ActorsCarousel } from '@/components/structures'
import { Actor } from '@/domain'

type ActorsCarouselSectionProps = {
  actors: Actor[]
}

const ActorsCarouselSection = ({ actors }: ActorsCarouselSectionProps) => (
  <section id="movie-actors" className="flex flex-col gap-5 p-7 max-container">
    <h3 className="text-2xl font-medium">Elenco principal</h3>
    <ActorsCarousel actors={actors} />
  </section>
)

export default ActorsCarouselSection
