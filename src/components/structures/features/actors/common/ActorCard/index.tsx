import Image from 'next/image'
import { Actor } from '@/domain'

type ActorCardProps = {
  actor: Actor
}

const ActorCard = ({ actor }: ActorCardProps) => {
  return (
    <div className="flex flex-col border border-slate-300 drop-shadow w-[138px] rounded-lg">
      <Image
        src={actor.image}
        alt={actor.name}
        width={138}
        height={175}
        className="max-w-[138px] max-h-[175px] rounded-t-lg object-cover object-top"
      />
      <div className="p-3 h-28 rounded-b-lg">
        <h1 className="font-semibold">{actor.name}</h1>
        <p className="font-light">{actor.title}</p>
      </div>
    </div>
  )
}

export default ActorCard
