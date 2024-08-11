'use client'
import { Search } from '@/components/common'
import { SearchCards } from '@/components/structures'
import { Movie } from '@/domain'
import useProgressRouter from '@/hooks/useProgressRouter'

type SearchPageProps = {
  movies: Movie[]
}

const SearchPage = ({ movies }: SearchPageProps) => {
  const { onSearch } = useProgressRouter()

  return (
    <main className="flex flex-col max-container">
      <div className="border-b border-b-slate-300 bg-white fixed w-full z-10 left-0">
        <Search
          placeholder="Pesquisar outros filmes e séries..."
          onSubmit={onSearch}
          buttonClassName="text-base rounded-tr-none rounded-br-none"
        />
      </div>
      <div className="flex w-full p-8 mt-8">
        {movies?.length ? (
          <SearchCards items={movies} />
        ) : (
          <div className="flex justify-center items-center w-full min-h-[350px]">
            <p>Ops, parece que tem nada com esse nome.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default SearchPage
