import Image from 'next/image'
import {
  MovieDetailsPopularity,
  MovieDetailsTitle
} from '@/components/structures'

type MovieBannerDetailsProps = {
  title: string
  image: string
  backdrop: string
  backdropColor: string
  date: string
  genres: string[]
  duration: number
  popularity: number
}

const MovieBannerDetails = ({
  title,
  image,
  backdrop,
  backdropColor,
  date,
  genres,
  duration,
  popularity
}: MovieBannerDetailsProps) => (
  <section
    id="movie-details"
    className="relative"
    style={{ backgroundColor: backdropColor }}
  >
    <Image
      src={backdrop}
      alt="Image"
      width={1300}
      height={300}
      className="absolute -z-10 object-cover h-full w-full"
    />
    <div className="flex w-full gap-10 p-7 lg:px-0 text-white max-container">
      <Image
        id="poster"
        src={image}
        alt={title}
        width={300}
        height={450}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-6">
        <MovieDetailsTitle
          title={title}
          date={date}
          genres={genres}
          duration={duration}
        />
        <MovieDetailsPopularity
          popularity={popularity}
          backdropColor={backdropColor}
        />
      </div>
    </div>
  </section>
)

export default MovieBannerDetails
