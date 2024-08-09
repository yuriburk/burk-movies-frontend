'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Search } from '@/components/common'
import banner from '../../../../public/images/banner.webp'

const SearchSection = () => {
  const router = useRouter()
  const onSearch = (text: string) => {
    if (text.length) {
      router.push(`/search?title=${text}`)
    }
  }

  return (
    <section className="flex flex-wrap max-h-[300px] relative text-white">
      <Image
        src={banner}
        alt="Banner com campo de pesquisa"
        className="h-[300px] object-cover"
      />
      <div className="flex flex-col justify-center gap-8 md:gap-12 absolute inset-0 py-8 px-3 md:px-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">Bem-vindo(a).</h2>
          <h3 className="text-xl md:text-3xl font-medium tracking-wide">
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h3>
        </div>
        <Search
          placeholder="Buscar por um filme, série ou pessoa..."
          onSubmit={onSearch}
        />
      </div>
    </section>
  )
}

export default SearchSection
