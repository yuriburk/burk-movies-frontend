import { BannerSearch, Trending } from '@/components/sections'

export default function Home() {
  return (
    <main className="flex justify-center w-screen h-screen max-container">
      <BannerSearch />
      <Trending />
    </main>
  )
}
