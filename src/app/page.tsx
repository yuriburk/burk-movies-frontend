import { SearchSection, TrendingSection } from '@/components/sections'
import TrendingService from '@/services/trending'

export default async function Home() {
  const trending = await TrendingService.getAll()
  console.log(trending)

  return (
    <main className="flex flex-col w-screen h-screen max-container">
      <SearchSection />
      <TrendingSection trending={trending.results} />
    </main>
  )
}
