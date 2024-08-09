import Logo from '.'

describe('<Logo />', () => {
  it('should be able to render', () => {
    cy.mount(<Logo id="logo" width={90} height={90} />)

    cy.get('h1').should('exist').and('have.text', 'Burk Movies')

    cy.get('svg defs linearGradient')
      .should('exist')
      .find('stop')
      .first()
      .should('have.attr', 'stop-color', '#1ed5a9')
      .next()
      .should('have.attr', 'stop-color', '#01b4e4')
  })
})
