import { Movie } from '@/domain'

export const trendingMovies: Movie[] = [
  {
    id: 1,
    title: 'Meu Malvado Favorito 4',
    originalTitle: 'Despicable Me 4',
    description:
      'Nesta sequência, o vilão mais amado do planeta retorna e agora Gru, Lucy, Margo, Edith e Agnes dão as boas-vindas a um novo membro da família: Gru Jr., que pretende atormentar seu pai. Enquanto se adapta com o pequeno, Gru enfrenta um novo inimigo, Maxime Le Mal, forçando sua namorada Valentina e a família a fugir do perigo.',
    image:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F84cX5hBdCE6c90GZNEhSTiYYwIl.jpg&w=384&q=75',
    popularity: 7.3,
    date: '2024-06-19',
    mediaType: 'movie',
    backdrop:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw1920_and_h800_multi_faces%2FlgkPzcOSnTvjeMnuFzozRO5HHw1.jpg&w=3840&q=75'
  },
  {
    id: 2,
    title: 'A Missão de Sandy Bochechas',
    originalTitle: 'Saving Bikini Bottom: The Sandy Cheeks Movie',
    description:
      'A Fenda do Biquíni é retirada do oceano, levando a cientista-esquilo Sandy Bochechas e seu amigo Bob Esponja ao Texas para salvar a cidade.',
    image:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Ff2uhFiADjUFDHXpeUlw1lxgywMN.jpg&w=640&q=75',
    popularity: 7.6,
    date: '2024-07-31',
    mediaType: 'movie',
    backdrop:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw1920_and_h800_multi_faces%2Fr7HV1rKdUus2gJNChswMtpjpPft.jpg&w=3840&q=75'
  }
]

export const cinemaMovies: Movie[] = [
  {
    id: 3,
    title: 'Garfield - Fora de Casa',
    originalTitle: 'The Garfield Movie',
    description:
      'Garfield, o mundialmente famoso gato de interior que odeia segundas-feiras e adora lasanha, está prestes a ter uma aventura selvagem ao ar livre! Depois de um reencontro inesperado com seu pai há muito perdido – o desalinhado gato de rua Vic – Garfield e seu amigo canino Odie são forçados a deixar sua vida perfeitamente mimada para se juntarem a Vic em um assalto hilariante e de alto risco.',
    image:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FeJhCZ3pPjNLKxdNezjrQaQsfENP.jpg&w=640&q=75',
    popularity: 7.2,
    date: '2024-04-20',
    mediaType: 'movie',
    backdrop:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw1920_and_h800_multi_faces%2F1wP1phHo2CROOqzv7Azs0MT5esU.jpg&w=3840&q=75',
    details: {
      genres: ['Animação', 'Aventura', 'Comédia'],
      situation: 'Lançado',
      revenue: 500000000,
      budget: 80000000,
      duration: 90,
      releaseLanguage: 'English',
      actors: [
        {
          id: 1,
          name: 'Chris Pratt',
          title: 'Garfield (voice)',
          image:
            'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F83o3koL82jt30EJ0rz4Bnzrt2dd.jpg&w=384&q=75'
        },
        {
          id: 2,
          name: 'Samuel L. Jackson',
          title: 'Vic (voice)',
          image:
            'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FAiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg&w=384&q=75'
        },
        {
          id: 3,
          name: 'Cecily Strong',
          title: 'Marge Malone (voice)',
          image:
            'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fg1WbsojbgQAB72UfUJnNWPaB4b5.jpg&w=384&q=75'
        }
      ]
    }
  }
]

export const serieMovies: Movie[] = [
  {
    id: 4,
    title: 'Os Simpsons',
    originalTitle: 'The Simpsons',
    description: 'Returning Series',
    image:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F29DgU8r0acAM719FVYQ25Iqwdqk.jpg&w=384&q=75',
    popularity: 9.0,
    date: '2023-03-01',
    mediaType: 'serie',
    backdrop:
      'https://movies.burk.dev/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw1920_and_h800_multi_faces%2FpxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg&w=3840&q=75'
  }
]
