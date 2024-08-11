'use client'
import { useEffect, useState } from 'react'
import { toLocaleDateString } from '@/utils/dates'

type FormattedDateProps = {
  date: string
  format: 'numeric' | 'short'
  className?: string
}

const FormattedDate = ({ date, format, className }: FormattedDateProps) => {
  const [formattedDate, setFormattedDate] = useState<string>()

  useEffect(
    () => setFormattedDate(toLocaleDateString(date, format)),
    [date, format]
  )

  return <p className={className}>{formattedDate}</p>
}

export default FormattedDate
