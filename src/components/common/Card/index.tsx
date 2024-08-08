import Image from 'next/image'

type CardProps = {
  title: string
  image: string
  popularity: number
  date: string
}

export const Card = ({ title, image, popularity, date }: CardProps) => (
  <div>
    <div>
      <Image
        src={image}
        alt={title}
        width={150}
        height={225}
        className="rounded-lg min-w-[150px]"
      />
      <p>{popularity}</p>
    </div>
    <h2 className="font-semibold">{title}</h2>
    <p className="text-slate-500">{date}</p>
  </div>
)

export default Card
