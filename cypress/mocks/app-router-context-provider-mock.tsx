import {
  AppRouterContext,
  AppRouterInstance
} from 'next/dist/shared/lib/app-router-context.shared-runtime'

export type AppRouterContextProviderMockProps = {
  router?: Partial<AppRouterInstance>
  children: React.ReactNode
}

export const AppRouterContextProviderMock = ({
  router,
  children
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: cy.stub(),
    forward: cy.stub(),
    push: cy.stub(),
    replace: cy.stub(),
    refresh: cy.stub(),
    prefetch: cy.stub(),
    ...(router ?? {})
  }
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      {children}
    </AppRouterContext.Provider>
  )
}
