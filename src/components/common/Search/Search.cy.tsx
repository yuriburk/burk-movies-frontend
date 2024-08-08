import Search from '.'

describe('<Search />', () => {
  it('should be able to render', () => {
    const placeholder = 'Search...'

    cy.mount(<Search onSubmit={() => {}} placeholder={placeholder} />)

    cy.get('input[type="search"]').should('exist')

    cy.get('button').contains('Pesquisar').should('exist')

    cy.get('input[type="search"]').should(
      'have.attr',
      'placeholder',
      placeholder
    )
  })

  it('should be able to call onSubmit with correct value when Search button is clicked', () => {
    const searchText = 'Movie'
    const onSubmit = cy.spy().as('onSubmit')

    cy.mount(<Search onSubmit={onSubmit} placeholder="Search..." />)

    cy.get('input[type="search"]').type(searchText)
    cy.get('button').contains('Pesquisar').click()

    cy.get('@onSubmit').should('have.been.calledWith', searchText)
  })

  it('should be able to call onSubmit with correct value when Enter key is pressed', () => {
    const searchText = 'Movie'
    const onSubmit = cy.spy().as('onSubmit')

    cy.mount(<Search onSubmit={onSubmit} placeholder="Search..." />)

    cy.get('input[type="search"]').type(`${searchText}{enter}`)

    cy.get('@onSubmit').should('have.been.calledWith', searchText)
  })
})
