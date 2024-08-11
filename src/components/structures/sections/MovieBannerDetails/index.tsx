import Image from 'next/image'
import {
  MovieDetailsPopularity,
  MovieDetailsTitle,
  MovieDetailsButtons
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
  description: string
}

const MovieBannerDetails = ({
  title,
  image,
  backdrop,
  backdropColor,
  date,
  genres,
  duration,
  popularity,
  description
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
      className="absolute -z-10 max-sm:h-[250px] object-cover h-full w-full"
    />
    <div className="flex max-sm:flex-col w-full gap-10 p-7 text-white max-container">
      <Image
        id="poster"
        src={image}
        alt={title}
        width={300}
        height={450}
        className="rounded-lg h-[450px] max-sm:h-[200px] max-sm:w-[150px] "
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
        <MovieDetailsButtons />
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-xl">Sinopse</h3>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </div>
  </section>
)

export default MovieBannerDetails
