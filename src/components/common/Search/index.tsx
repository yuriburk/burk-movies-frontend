'use client'
import { useRef } from 'react'
import { Button } from '@/components/common'

type SearchProps = {
  onSubmit: (text: string) => void
  placeholder?: string
}

const Search = ({ onSubmit, placeholder }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    const text = inputRef.current?.value
    if (text && text?.length > 0) {
      onSubmit(text)
    }
  }

  const onPressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="flex text-slate-600 text-lg font-light bg-white rounded-full h-12 pl-6">
      <input
        ref={inputRef}
        type="search"
        className="bg-transparent outline-none w-full placeholder-slate-300 search"
        placeholder={placeholder}
        onKeyUp={onPressKey}
      />
      <Button className="text-base" onClick={handleSubmit}>
        Pesquisar
      </Button>
    </div>
  )
}

export default Search
