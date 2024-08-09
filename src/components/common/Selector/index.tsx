'use client'
import { motion } from 'framer-motion'

export type SelectorProps = {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}

const Selector = ({ options, selectedOption, onSelect }: SelectorProps) => (
  <div className="flex justify-between border-primary-background border rounded-full max-sm:w-full cursor-pointer">
    {options.map((option) => (
      <div
        key={option}
        className="relative flex justify-center max-sm:w-full px-5 py-1"
        onClick={() => onSelect(option)}
      >
        <span
          className={`font-medium ${option === selectedOption && 'bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent'}`}
        >
          {option}
        </span>
        {option === selectedOption && (
          <motion.div
            className="absolute bg-primary-background w-auto h-full inset-0 -z-10 rounded-full"
            layoutId="option"
          />
        )}
      </div>
    ))}
  </div>
)

export default Selector
