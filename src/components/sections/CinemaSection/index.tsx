'use client'
import { Carousel } from '@/components/common'
import useCinema from '@/hooks/useCinema'
import Image from 'next/image'

const CinemaSection = () => {
  const { data, isFetching } = useCinema()

  return (
    <section
      id="cinema"
      className="relative bg-primaryBackground bg-opacity-80 text-white"
    >
      {data?.results.length && (
        <Image
          src={data?.results[0].image}
          alt="Image"
          width={1300}
          height={300}
          className="absolute -z-10 object-cover h-full"
        />
      )}
      <Carousel
        title="No Cinema"
        cardsProps={{ items: data?.results ?? [], isLoading: isFetching }}
      />
    </section>
  )
}

export default CinemaSection
