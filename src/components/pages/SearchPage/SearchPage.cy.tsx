import SearchPage from '.'
import { cinemaMovies } from '../../../../cypress/fixtures/movies'

describe('<SearchPage />', () => {
  it.only('should render movie details correctly', () => {
    cy.mountWithAppRouterContext(<SearchPage movies={cinemaMovies} />)

    cy.get('main').should('exist')

    cy.get('input[placeholder="Pesquisar outros filmes e séries..."]').should(
      'exist'
    )

    cy.get('button').contains('Pesquisar').should('exist')

    cy.get('h3').contains(cinemaMovies[0].title)
    cy.get('div').contains(cinemaMovies[0].originalTitle)

    cy.get('img').should('have.attr', 'src', cinemaMovies[0].image)

    cy.get('p').contains(cinemaMovies[0].description)
  })

  it('should be able to display fallback message when movie details are not available', () => {
    cy.mountWithAppRouterContext(<SearchPage movies={[]} />)

    cy.get('main').should('exist')
    cy.get('div')
      .contains('Ops, parece que tem nada desse filme.')
      .should('exist')
  })
})
