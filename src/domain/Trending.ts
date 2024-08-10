export enum TrendingEnum {
  'Hoje' = 'day',
  'Nesta Semana' = 'week'
}

export type TrendingOption = keyof typeof TrendingEnum

export class Trending {
  static options = Object.keys(TrendingEnum)
  static getOption = (option: string): TrendingEnum =>
    Object.values(TrendingEnum)?.includes(option as TrendingEnum)
      ? (option as TrendingEnum)
      : TrendingEnum.Hoje
  static getOptionLabel = (option: string) =>
    Object.entries(TrendingEnum).filter(([, value]) => value === option)[0][0]
}
