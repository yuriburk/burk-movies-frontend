import { toLocaleDateString } from '@/utils/dates'
import Image from 'next/image'

export type SearchCardProps = {
  title: string
  originalTitle: string
  description: string
  image: string
  date: string
}

const SearchCard = ({
  title,
  originalTitle,
  description,
  image,
  date
}: SearchCardProps) => {
  return (
    <div className="flex items-start justify-between gap-5 w-full rounded-lg border border-gray-300 drop-shadow-lg">
      <Image
        src={image}
        alt={title}
        width={135}
        height={170}
        className="rounded-tl-lg rounded-bl-lg"
      />
      <div className="p-3 w-full">
        <h3 className="font-semibold text-lg sm:text-xl">
          {title}
          <span className="hidden sm:inline text-sm text-slate-500 ml-1.5">
            ({originalTitle})
          </span>
        </h3>
        <p className="text-slate-500">{toLocaleDateString(date)}</p>
        <p className="mt-5 overflow-ellipsis overflow-hidden line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SearchCard
