import { Trending } from '@/domain/Trending'

export type TrendingSectionProps = {
  trending: Trending[]
}

const TrendingSection = ({ trending }: TrendingSectionProps) => (
  <section>
    {trending.map((t) => (
      <div key={t.id}>
        <h3>{t.title}</h3>
      </div>
    ))}
  </section>
)

export default TrendingSection
