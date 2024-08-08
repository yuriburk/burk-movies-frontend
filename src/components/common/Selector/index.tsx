'use client'
type SelectorProps = {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}

const Selector = ({ options, selectedOption, onSelect }: SelectorProps) => {
  const handleSelect = (option: string) => {
    onSelect(option)
  }

  return (
    <div className="flex border-primary border rounded-full cursor-pointer">
      {options.map((option) => (
        <div key={option} className="relative px-5 py-1">
          <span
            className={`font-medium ${option === selectedOption && 'bg-gradient-to-r from-green to-blue bg-clip-text text-transparent'}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </span>
          {option === selectedOption && (
            <div className="absolute bg-primary w-auto h-full inset-0 -z-10 rounded-full" />
          )}
        </div>
      ))}
    </div>
  )
}

export default Selector
