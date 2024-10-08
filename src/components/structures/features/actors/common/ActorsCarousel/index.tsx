import { ActorCard } from '@/components/structures'
import { Actor } from '@/domain'

type ActorsCarouselProps = {
  actors: Actor[]
}

const ActorsCarousel = ({ actors }: ActorsCarouselProps) => {
  return (
    <div className="flex items-center overflow-x-scroll overflow-y-hidden gap-3">
      {actors.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </div>
  )
}

export default ActorsCarousel
