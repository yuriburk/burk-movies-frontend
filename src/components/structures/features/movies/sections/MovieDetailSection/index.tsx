import Image from 'next/image'
import {
  MovieDetailsPopularity,
  MovieDetailsTitle,
  MovieDetailsButtons,
  MovieDetailsDescription,
  MovieDetailsInformation
} from '@/components/structures'

type MovieDetailSectionProps = {
  title: string
  image: string
  backdrop: string
  backdropColor: string
  date: string
  genres: string[]
  popularity: number
  description: string
  situation: string
  revenue?: number
  budget?: number
  duration?: number
  episodes?: number
}

const MovieDetailSection = ({
  title,
  image,
  backdrop,
  backdropColor,
  date,
  genres,
  popularity,
  description,
  situation,
  revenue,
  budget,
  duration,
  episodes
}: MovieDetailSectionProps) => (
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
          episodes={episodes}
        />
        <MovieDetailsPopularity
          popularity={popularity}
          backdropColor={backdropColor}
        />
        <MovieDetailsButtons />
        <MovieDetailsDescription description={description} />
        <MovieDetailsInformation
          situation={situation}
          revenue={revenue}
          budget={budget}
        />
      </div>
    </div>
  </section>
)

export default MovieDetailSection
