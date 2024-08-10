import Image from 'next/image'
import { FormattedDate, PopularityBadge } from '@/components/common'

export type CarouselCardProps = {
  title: string
  image: string
  popularity: number
  date: string
}

export const CarouselCard = ({
  title,
  image,
  popularity,
  date
}: CarouselCardProps) => {
  return (
    <div className="flex flex-col gap-5">
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
          <PopularityBadge popularity={popularity} />
        </div>
      </div>
      <div>
        <h2 className="font-semibold leading-none">{title}</h2>
        <FormattedDate date={date} />
      </div>
    </div>
  )
}

export default CarouselCard
