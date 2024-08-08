import Button from '.'

describe('<Button />', () => {
  it('should be able to render', () => {
    cy.mount(<Button>Submit</Button>)
      .get('button')
      .contains('Submit')
  })
})
