import {
  BookmarkIcon,
  HeartIcon,
  ListsIcon,
  PlayIcon,
  RoundButton
} from '@/components/common'

export const MovieDetailsButtons = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <RoundButton className="h-12 w-12 p-3.5">
          <ListsIcon />
        </RoundButton>
      </li>
      <li>
        <RoundButton className="h-12 w-12 p-3.5">
          <HeartIcon />
        </RoundButton>
      </li>
      <li>
        <RoundButton className="h-12 w-12 p-3.5">
          <BookmarkIcon />
        </RoundButton>
      </li>
      <li>
        <button className="flex">
          <PlayIcon />
          Reproduzir trailer
        </button>
      </li>
    </ul>
  )
}
