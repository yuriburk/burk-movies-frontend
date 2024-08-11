import Image from 'next/image'
import { FormattedDate, PopularityBadge } from '@/components/common'

export type CarouselCardItem = {
  title: string
  image: string
  popularity: number
  date: string
}

export type CarouselCardProps = CarouselCardItem & {
  onClick: () => void
}

export const CarouselCard = ({
  title,
  image,
  popularity,
  date,
  onClick
}: CarouselCardProps) => {
  return (
    <button className="flex flex-col gap-5" onClick={onClick}>
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
      <div className="text-start">
        <h2 className="font-semibold leading-none">{title}</h2>
        <FormattedDate date={date} className="text-slate-500" />
      </div>
    </button>
  )
}

export default CarouselCard
