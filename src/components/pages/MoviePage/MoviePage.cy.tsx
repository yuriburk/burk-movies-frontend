import MoviePage from '.'
import { cinemaMovies } from '../../../../cypress/fixtures/movies'

describe('<MoviePage />', () => {
  it('should render movie details correctly', () => {
    const movie = cinemaMovies[0]
    cy.mountWithAppRouterContext(
      <MoviePage movie={movie} backdropColor="rgb(0, 0, 0, 0.5)" />
    )

    cy.get('main').should('exist')

    cy.get('#movie-details').should('exist')

    cy.get('h1').contains(movie.title)
    cy.get('div').contains(movie.originalTitle)

    cy.get('#poster').should('have.attr', 'src', movie.image)

    cy.get('section#movie-details img')
      .first()
      .should('have.attr', 'src', movie.backdrop)

    cy.get('div').contains(movie.description)
  })

  it('should be able to display fallback message when movie details are not available', () => {
    cy.mountWithAppRouterContext(
      <MoviePage movie={{} as never} backdropColor="#000000" />
    )

    cy.get('main').should('exist')
    cy.get('div')
      .contains('Ops, parece que tem nada desse filme.')
      .should('exist')
  })
})
