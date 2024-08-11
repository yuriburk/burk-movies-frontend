export const toLocaleDateString = (date: string, format: 'numeric' | 'short') =>
  new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: format,
    day: 'numeric'
  })

export const minutesDuration = (minutes: number) =>
  new Date(minutes * 60 * 1000).toISOString().slice(11, 16)
