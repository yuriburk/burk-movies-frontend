import PopularityBadge from '.'
import { roundPopularity } from '@/utils/number'

describe('<PopularityBadge />', () => {
  it('should be able to render correctly with popularity < 2.5', () => {
    const popularity = 2
    cy.mount(<PopularityBadge popularity={popularity} />)
      .get('svg')
      .should('exist')
      .get('path')
      .should(
        'have.attr',
        'stroke-dasharray',
        `${roundPopularity(popularity)}, 100`
      )
      .and('have.class', 'stroke-rose-500')
      .get('p')
      .contains(popularity.toString())
      .get('p')
      .contains('%')
  })

  it('should be able to render correctly with popularity >= 2.5 and < 7.0', () => {
    const popularity = 5
    cy.mount(<PopularityBadge popularity={popularity} />)
      .get('svg')
      .should('exist')
      .get('path')
      .should(
        'have.attr',
        'stroke-dasharray',
        `${roundPopularity(popularity)}, 100`
      )
      .and('have.class', 'stroke-amber-500')
      .get('p')
      .contains(popularity.toString())
      .get('p')
      .contains('%')
  })

  it('should be able to render correctly with popularity >= 7.0', () => {
    const popularity = 8
    cy.mount(<PopularityBadge popularity={popularity} />)
      .get('svg')
      .should('exist')
      .get('path')
      .should(
        'have.attr',
        'stroke-dasharray',
        `${roundPopularity(popularity)}, 100`
      )
      .and('have.class', 'stroke-lime-500')
      .get('p')
      .contains(popularity.toString())
      .get('p')
      .contains('%')
  })

  it('should be able to render with large size when big property is true', () => {
    const popularity = 8
    cy.mount(<PopularityBadge popularity={popularity} big />)
      .get('div')
      .should('have.class', 'w-16 h-16')
      .get('svg')
      .should('have.class', 'h-14 w-14')
  })

  it('should be able to render with default size when big property is not provided', () => {
    const popularity = 8
    cy.mount(<PopularityBadge popularity={popularity} />)
      .get('div')
      .should('have.class', 'w-9 h-9')
      .get('svg')
      .should('have.class', 'h-8 w-8')
  })
})
