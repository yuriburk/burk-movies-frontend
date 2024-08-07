import { navigationLinks } from '@/components/Navigation'
import Desktop from '@/components/Navigation/Desktop'

describe('<Desktop />', () => {
  it('should be able to render the desktop menu navigation', () => {
    cy.desktopViewport().mount(<Desktop navigationLinks={navigationLinks} />)

    navigationLinks.forEach((navigationLink) => {
      cy.get(`a[href="${navigationLink.link}"`).should('exist')
    })
  })
})
