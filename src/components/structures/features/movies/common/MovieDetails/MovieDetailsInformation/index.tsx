import { toCurrency } from '@/utils/number'

export type MovieDetailsInformationProps = {
  title: string
  situation: string
  revenue: number
  budget: number
}

export const MovieDetailsInformation = ({
  title,
  situation,
  revenue,
  budget
}: MovieDetailsInformationProps) => (
  <div className="flex flex-wrap gap-12">
    <div>
      <h3 className="font-semibold">Título</h3>
      <p>{title}</p>
    </div>
    <div>
      <h3 className="font-semibold">Situação</h3>
      <p>{situation}</p>
    </div>
    {revenue > 0 && (
      <div>
        <h3 className="font-semibold">Receita</h3>
        <p>{toCurrency(revenue)}</p>
      </div>
    )}
    {budget > 0 && (
      <div>
        <h3 className="font-semibold">Orçamento</h3>
        <p>{toCurrency(budget)}</p>
      </div>
    )}
  </div>
)
