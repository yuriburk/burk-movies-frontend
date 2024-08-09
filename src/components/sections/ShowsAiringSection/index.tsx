'use client'
import { Carousel } from '@/components/common'
import useShowsAiring from '@/hooks/useShowsAiring'

const ShowsAiringSection = () => {
  const { data, isFetching } = useShowsAiring()

  return (
    <section id="shows-airing">
      <Carousel
        title="Séries No Ar"
        cardsProps={{ items: data?.results ?? [], isLoading: isFetching }}
      />
    </section>
  )
}

export default ShowsAiringSection
