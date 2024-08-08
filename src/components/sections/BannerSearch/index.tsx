'use client'
import Image from 'next/image'
import banner from '../../../../public/images/banner.webp'
import { Search } from '../../common'

const BannerSearch = () => {
  const onSearch = (text: string) => {
    console.log({ text })
  }

  return (
    <section className="max-h-[300px] relative text-white">
      <Image
        src={banner}
        alt="Banner com campo de pesquisa"
        className="max-h-[300px] object-cover"
      />
      <div className="flex flex-col justify-center gap-12 absolute inset-0 py-8 px-10">
        <div>
          <h2 className="text-5xl font-bold">Bem-vindo(a).</h2>
          <h3 className="text-3xl font-medium tracking-wide">
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

export default BannerSearch
