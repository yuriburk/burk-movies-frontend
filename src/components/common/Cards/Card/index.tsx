import Image from 'next/image'
import { toLocaleDateString } from '@/utils/dates'
import { PopularityBadge } from '@/components/common'

export type CardProps = {
  title: string
  image: string
  popularity: number
  date: string
}

export const Card = ({ title, image, popularity, date }: CardProps) => (
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
      <p className="text-slate-500">{toLocaleDateString(date)}</p>
    </div>
  </div>
)

export default Card
