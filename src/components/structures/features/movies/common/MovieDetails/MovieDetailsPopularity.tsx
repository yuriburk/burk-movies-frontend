import Image from 'next/image'
import { PopularityBadge, RoundButton } from '@/components/common'

type MovieDetailsPopularityProps = {
  popularity: number
  backdropColor: string
}

export const MovieDetailsPopularity = ({
  popularity,
  backdropColor
}: MovieDetailsPopularityProps) => (
  <div className="flex items-center gap-3">
    <PopularityBadge popularity={popularity} big />
    <p className="font-semibold">Avaliações dos usuários</p>
    <ul className="flex">
      <li>
        <RoundButton
          className="h-9 w-9"
          style={{ backgroundColor: backdropColor }}
        >
          <Image
            src="https://www.themoviedb.org/assets/2/v8/1f600-f53b445a86235a4ef54899ad2f1a936e3ff6d1dcdaafc9ed63d6a6070491c0a1.svg"
            alt="Rosto sorridente"
            width={28}
            height={28}
          />
        </RoundButton>
      </li>
      <li>
        <RoundButton
          className="h-9 w-9 -ml-3"
          style={{ backgroundColor: backdropColor }}
        >
          <Image
            src="https://www.themoviedb.org/assets/2/v8/1f602-02aff2b2e9beaa4d1db71092ff071d513df2fc918a6ad560a9f2ee5d6a58992c.svg"
            alt="Rosto com lágrimas de alegria"
            width={28}
            height={28}
          />
        </RoundButton>
      </li>
      <li>
        <RoundButton
          className="h-9 w-9 -ml-3"
          style={{ backgroundColor: backdropColor }}
        >
          <Image
            src="https://www.themoviedb.org/assets/2/v8/1f923-658d4b98b84457446f726906ebaf48af74643471a4f98aa4db4124326f0aa552.svg"
            alt="Rosto rindo muito"
            width={28}
            height={28}
          />
        </RoundButton>
      </li>
    </ul>
  </div>
)
