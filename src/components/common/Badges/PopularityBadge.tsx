'use client'
import { roundPopularity } from '@/utils/number'

type PopularityBadgeProps = {
  popularity: number
  big?: boolean
}

const popularityColor = (popularity: number) => {
  if (popularity < 25) {
    return 'stroke-rose-500'
  } else if (popularity < 70) {
    return 'stroke-amber-500'
  } else {
    return 'stroke-lime-500'
  }
}

const PopularityBadge = ({ popularity, big }: PopularityBadgeProps) => {
  const popularityRounded = roundPopularity(popularity)

  return (
    <div
      className={`flex items-center justify-center relative bg-primary-background text-white rounded-full ${big ? 'w-16 h-16' : 'w-9 h-9'} p-2`}
    >
      <svg
        viewBox="0 0 36 36"
        className={`absolute ${big ? 'h-14 w-14' : 'h-8 w-8'}`}
      >
        <path
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="2.5"
          strokeDasharray={`${popularityRounded}, 100`}
          className={popularityColor(popularityRounded)}
        />
      </svg>
      <div className="flex">
        <p className={`${big ? 'text-xl' : 'text-sm'} font-semibold`}>
          {popularityRounded}
        </p>
        <div className="flex justify-start items-start text-[35%] font-semibold py-1">
          <p>%</p>
        </div>
      </div>
    </div>
  )
}

export default PopularityBadge
