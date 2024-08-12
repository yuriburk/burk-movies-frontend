type MovieDetailsDescriptionProps = {
  description: string
}

export const MovieDetailsDescription = ({
  description
}: MovieDetailsDescriptionProps) => (
  <div className="flex flex-col gap-1">
    <h3 className="font-semibold text-xl">Sinopse</h3>
    <p className="font-light">{description}</p>
  </div>
)
