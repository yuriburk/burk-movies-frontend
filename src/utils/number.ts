export const roundPopularity = (popularity: number) =>
  Math.round(popularity * 10)

export const toCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
