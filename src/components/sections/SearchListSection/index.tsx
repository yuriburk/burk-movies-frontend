'use client'
import { Search, SearchCards } from '@/components/common'
import useSearchTitle from '@/hooks/useSearchTitle'
import { useRouter } from 'next/navigation'

type SearchListSectionProps = {
  title: string
}

export const SearchListSection = ({ title }: SearchListSectionProps) => {
  const { data } = useSearchTitle({ title })

  const router = useRouter()

  const onSearch = (text: string) => {
    if (text.length) {
      router.push(`/search?title=${text}`)
    }
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="border-b border-b-slate-300 bg-white fixed w-full z-10 left-0">
        <Search
          placeholder="Pesquisar outros filmes e séries..."
          onSubmit={onSearch}
          buttonClassName="text-base rounded-tr-none rounded-br-none"
        />
      </div>
      <div className="flex w-full p-8 mt-8">
        {data?.results?.length ? (
          <SearchCards items={data?.results} />
        ) : (
          <div className="flex justify-center items-center w-full min-h-[350px]">
            <p>Ops, parece que tem nada com esse nome.</p>
          </div>
        )}
      </div>
    </section>
  )
}
