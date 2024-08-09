'use client'
import { roundPopularity } from '@/utils/number'

type PopularityBadgeProps = {
  popularity: number
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

const PopularityBadge = ({ popularity }: PopularityBadgeProps) => {
  const popularityRounded = roundPopularity(popularity)

  return (
    <div className="flex items-center justify-center relative bg-primaryBackground text-white rounded-full w-9 h-9 p-2">
      <svg viewBox="0 0 36 36" className="absolute h-8 w-8">
        <path
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${popularityRounded}, 100`}
          className={popularityColor(popularityRounded)}
        />
      </svg>
      <div className="flex">
        <p className="text-sm font-semibold">{popularityRounded}</p>
        <div className="flex justify-start items-start text-[0.35rem] font-semibold py-1">
          <p>%</p>
        </div>
      </div>
    </div>
  )
}

export default PopularityBadge
