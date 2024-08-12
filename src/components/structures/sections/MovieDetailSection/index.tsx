import Image from 'next/image'
import {
  MovieDetailsPopularity,
  MovieDetailsTitle,
  MovieDetailsButtons
} from '@/components/structures'
import { toCurrency } from '@/utils/number'

type MovieDetailSectionProps = {
  title: string
  image: string
  backdrop: string
  backdropColor: string
  date: string
  genres: string[]
  duration: number
  popularity: number
  description: string
  situation: string
  revenue: number
  budget: number
}

const MovieDetailSection = ({
  title,
  image,
  backdrop,
  backdropColor,
  date,
  genres,
  duration,
  popularity,
  description,
  situation,
  revenue,
  budget
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
        <div className="flex gap-12">
          <div>
            <h3 className="font-semibold">Situação</h3>
            <p>{situation}</p>
          </div>
          <div>
            <h3 className="font-semibold">Receita</h3>
            <p>{revenue > 0 && toCurrency(revenue)}</p>
          </div>
          <div>
            <h3 className="font-semibold">Orçamento</h3>
            <p>{budget > 0 && toCurrency(budget)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default MovieDetailSection
