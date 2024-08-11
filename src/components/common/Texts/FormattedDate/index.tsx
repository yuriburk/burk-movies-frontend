'use client'
import { useEffect, useState } from 'react'
import { toLocaleDateString } from '@/utils/dates'

type FormattedDateProps = {
  date: string
  className?: string
}

const FormattedDate = ({ date, className }: FormattedDateProps) => {
  const [formattedDate, setFormattedDate] = useState<string>()

  useEffect(() => setFormattedDate(toLocaleDateString(date)), [date])

  return <p className={className}>{formattedDate}</p>
}

export default FormattedDate
