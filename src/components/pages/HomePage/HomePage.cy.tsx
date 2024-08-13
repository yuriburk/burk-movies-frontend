import HomePage from '.'
import { TrendingEnum } from '@/domain'
import {
  cinemaMovies,
  serieMovies,
  trendingMovies
} from '../../../../cypress/fixtures/movies'

describe('<HomePage />', () => {
  it.only('should be able to render all sections correctly', () => {
    cy.mountWithAppRouterContext(
      <HomePage
        trending={{
          movies: trendingMovies,
          selectedOption: TrendingEnum.Hoje
        }}
        cinema={{ movies: cinemaMovies }}
        shows={{ movies: serieMovies }}
      />
    )

    cy.get('section')
      .first()
      .should('contain.text', 'Bem-vindo(a).')
      .should(
        'contain.text',
        'Milhões de filmes, séries e pessoas para descobrir. Explore já.'
      )

    cy.get('#trending').should('exist').find('h2').contains('Tendências')

    cy.get('#cinema').should('exist').find('h2').contains('No Cinema')

    cy.get('#serie-airing').should('exist').find('h2').contains('Séries No Ar')
  })

  it('should be able to handle search input correctly', () => {
    cy.mount(
      <HomePage
        trending={{
          movies: trendingMovies,
          selectedOption: TrendingEnum.Hoje
        }}
        cinema={{ movies: cinemaMovies }}
        shows={{ movies: serieMovies }}
      />
    )

    cy.get('input[placeholder="Buscar por um filme, série ou pessoa..."]')
      .type('test search')
      .should('have.value', 'test search')

    cy.get('form').submit()
    cy.get('@onSearch').should('have.been.calledWith', 'test search')
  })

  it('should be able to interact with TrendingSection correctly', () => {
    cy.mount(
      <HomePage
        trending={{
          movies: trendingMovies,
          selectedOption: TrendingEnum.Hoje
        }}
        cinema={{ movies: cinemaMovies }}
        shows={{ movies: serieMovies }}
      />
    )

    cy.get('#trending')
      .find('button')
      .click()
      .then(() => {
        cy.get('@onSelectTrending').should('have.been.called')
      })
  })

  it('should be able to render Carousel with movies in CinemaSection and SerieAiringSection', () => {
    cy.mount(
      <HomePage
        trending={{
          movies: trendingMovies,
          selectedOption: TrendingEnum.Hoje
        }}
        cinema={{ movies: cinemaMovies }}
        shows={{ movies: serieMovies }}
      />
    )

    cy.get('#cinema')
      .find('img')
      .should('have.attr', 'src', cinemaMovies[0].image)

    cy.get('#serie-airing')
      .find('img')
      .should('have.attr', 'src', serieMovies[0].image)
  })
})
