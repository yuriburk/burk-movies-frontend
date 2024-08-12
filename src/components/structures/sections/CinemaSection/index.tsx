import Image from 'next/image'
import { Movie } from '@/domain/Movie'
import { Carousel } from '@/components/structures'

type CinemaSectionProps = {
  movies: Movie[]
}

const CinemaSection = ({ movies }: CinemaSectionProps) => {
  return (
    <section
      id="cinema"
      className="relative bg-primary-background bg-opacity-80 text-white"
    >
      {movies?.length && (
        <Image
          src={movies[0].backdrop}
          alt="Image"
          width={1300}
          height={300}
          className="absolute -z-10 object-cover h-full"
        />
      )}
      <Carousel
        title="No Cinema"
        cardsProps={{
          movies
        }}
      />
    </section>
  )
}

export default CinemaSection
