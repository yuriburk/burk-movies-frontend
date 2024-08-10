import { navigationLinks } from './NavigationLinks'
import Navigation from '.'

describe('<Navigation />', () => {
  it('should be able to render the desktop menu navigation', () => {
    cy.desktopViewport().mount(<Navigation />)

    navigationLinks.forEach((navigationLink) => {
      cy.get(`a[href="${navigationLink.link}"`).should('exist')
    })
  })
})
