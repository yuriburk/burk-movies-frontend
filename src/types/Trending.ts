export enum TrendingEnum {
  'Hoje' = 'day',
  'Nesta Semana' = 'week'
}

export type TrendingOption = keyof typeof TrendingEnum
