'use client'
import { useEffect, useState } from 'react'
import { minutesDuration } from '@/utils/dates'

type FormattedMinutesProps = {
  minutes: number
  className?: string
}

const FormattedMinutes = ({ minutes, className }: FormattedMinutesProps) => {
  const [formattedMinutes, setFormattedMinutes] = useState<string>()

  useEffect(() => setFormattedMinutes(minutesDuration(minutes)), [minutes])

  return <p className={className}>{formattedMinutes}</p>
}

export default FormattedMinutes
