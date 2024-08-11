import { FormattedDate, FormattedMinutes } from '@/components/common'

type MovieDetailsTitleProps = {
  title: string
  date: string
  genres: string[]
  duration: number
}

export const MovieDetailsTitle = ({
  title,
  date,
  genres,
  duration
}: MovieDetailsTitleProps) => (
  <div>
    <h1 className="text-3xl font-bold">{title}</h1>
    <div className="flex gap-3 font-light">
      <FormattedDate date={date} format="numeric" />
      <p>•</p>
      <p>{genres.join(', ')}</p>
      <p>•</p>
      <FormattedMinutes minutes={duration} />
    </div>
  </div>
)
