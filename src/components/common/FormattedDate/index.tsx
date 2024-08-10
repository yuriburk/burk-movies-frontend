'use client'
import { useEffect, useState } from 'react'
import { toLocaleDateString } from '@/utils/dates'

type FormattedDateProps = {
  date: string
}

const FormattedDate = ({ date }: FormattedDateProps) => {
  const [formattedDate, setFormattedDate] = useState<string>()

  useEffect(() => setFormattedDate(toLocaleDateString(date)), [date])

  return <p className="text-slate-500">{formattedDate}</p>
}

export default FormattedDate
