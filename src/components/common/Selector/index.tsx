'use client'
import { motion } from 'framer-motion'

export type SelectorProps = {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}

const Selector = ({ options, selectedOption, onSelect }: SelectorProps) => {
  const handleSelect = (option: string) => {
    onSelect(option)
  }

  return (
    <div className="flex border-primaryBackground border rounded-full cursor-pointer">
      {options.map((option) => (
        <div key={option} className="relative px-5 py-1">
          <span
            className={`font-medium ${option === selectedOption && 'bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent'}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </span>
          {option === selectedOption && (
            <motion.div
              className="absolute bg-primaryBackground w-auto h-full inset-0 -z-10 rounded-full"
              layoutId="option"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Selector
