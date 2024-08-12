import Link from 'next/link'
import { FormattedDate } from '@/components/common'
import Image from 'next/image'

export type SearchCardProps = {
  id: number
  title: string
  originalTitle: string
  description: string
  image: string
  date: string
  mediaType: string
}

const SearchCard = ({
  id,
  title,
  originalTitle,
  description,
  image,
  date,
  mediaType
}: SearchCardProps) => {
  return (
    <Link
      className="flex items-start justify-between gap-5 w-full rounded-lg border border-gray-300 drop-shadow-lg"
      href={`/${mediaType}/${id}`}
    >
      <Image
        src={image}
        alt={title}
        width={135}
        height={170}
        loading="lazy"
        className="rounded-tl-lg rounded-bl-lg"
      />
      <div className="p-3 w-full">
        <h3 className="font-semibold text-lg sm:text-xl">
          {title}
          <span className="hidden sm:inline text-sm text-slate-500 ml-1.5">
            ({originalTitle})
          </span>
        </h3>
        <FormattedDate className="text-slate-500" date={date} format="short" />
        <p className="mt-5 overflow-ellipsis overflow-hidden line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  )
}

export default SearchCard
