import Selector from '.'

describe('<Selector />', () => {
  it('should be able to render options and handle selection', () => {
    const mockOnSelect = cy.spy().as('onSelect')
    const options = ['Option 1', 'Option 2', 'Option 3']
    const selectedOption = 'Option 3'

    cy.mount(
      <Selector
        options={options}
        selectedOption={selectedOption}
        onSelect={mockOnSelect}
      />
    )
      .get('span')
      .filter((_, element) => {
        return Cypress.$(element).text().includes('Option')
      })
      .should('have.length', options.length)

    cy.get('span')
      .contains(selectedOption)
      .should('have.class', 'font-medium')
      .should(
        'have.class',
        'bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent'
      )

    cy.get('div')
      .contains('Option 1')
      .click()
      .then(() => {
        expect(mockOnSelect).to.have.been.calledWith('Option 1')
      })
  })
})
