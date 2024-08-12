import Link from 'next/link'
import Image from 'next/image'
import { FormattedDate, PopularityBadge } from '@/components/common'
import { Movie } from '@/domain'

export type CarouselCardProps = { movie: Movie }

export const CarouselCard = ({
  movie: { id, title, image, popularity, date, mediaType }
}: CarouselCardProps) => {
  return (
    <Link className="flex flex-col gap-5" href={`/${mediaType}/${id}`}>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={150}
          height={225}
          loading="lazy"
          className="rounded-lg min-w-[150px] h-[225px]"
        />
        <div className="absolute -mt-5 ml-3">
          <div className="h-9 w-9">
            <PopularityBadge popularity={popularity} />
          </div>
        </div>
      </div>
      <div className="text-start">
        <h2 className="font-semibold leading-none">{title}</h2>
        <FormattedDate className="text-slate-500" date={date} format="short" />
      </div>
    </Link>
  )
}

export default CarouselCard
