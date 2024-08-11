import Image from 'next/image'
import { FormattedDate, FormattedMinutes } from '@/components/common'

type MovieBannerDetailsProps = {
  title: string
  image: string
  backdrop: string
  date: string
  genres: string[]
  duration: number
}

const MovieBannerDetails = ({
  title,
  image,
  backdrop,
  date,
  genres,
  duration
}: MovieBannerDetailsProps) => (
  <section className="relative flex bg-primary-background bg-opacity-80 text-white">
    <Image
      id="poster"
      src={image}
      alt={title}
      width={300}
      height={450}
      className="rounded-lg"
    />
    <Image
      src={backdrop}
      alt="Image"
      width={1300}
      height={300}
      className="absolute -z-10 object-cover h-full w-full"
    />
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex gap-3">
        <FormattedDate date={date} />
        <p>•</p>
        <p>{genres.join(', ')}</p>
        <p>•</p>
        <FormattedMinutes minutes={duration} />
      </div>
    </div>
  </section>
)

export default MovieBannerDetails
