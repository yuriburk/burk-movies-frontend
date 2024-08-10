import { AppRouterContextProviderMock } from '../mocks/app-router-context-provider-mock'

/* eslint-disable no-undef */
Cypress.Commands.add('desktopViewport', () => {
  return cy.viewport(1080, 720)
})

Cypress.Commands.add('mountWithAppRouterContext', (children) => {
  return cy.mount(
    <AppRouterContextProviderMock>{children}</AppRouterContextProviderMock>
  )
})
