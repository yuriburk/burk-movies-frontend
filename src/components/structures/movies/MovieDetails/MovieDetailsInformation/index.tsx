import { toCurrency } from '@/utils/number'

export type MovieDetailsInformationProps = {
  situation: string
  revenue?: number
  budget?: number
}

export const MovieDetailsInformation = ({
  situation,
  revenue,
  budget
}: MovieDetailsInformationProps) => (
  <div className="flex gap-12">
    <div>
      <h3 className="font-semibold">Situação</h3>
      <p>{situation}</p>
    </div>
    {revenue && revenue > 0 && (
      <div>
        <h3 className="font-semibold">Receita</h3>
        <p>{toCurrency(revenue)}</p>
      </div>
    )}
    {budget && budget > 0 && (
      <div>
        <h3 className="font-semibold">Orçamento</h3>
        <p>{toCurrency(budget)}</p>
      </div>
    )}
  </div>
)
