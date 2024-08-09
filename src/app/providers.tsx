'use client'
import React from 'react'
import {
  isServer,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import NextTopLoader from 'nextjs-toploader'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

const Providers = ({ children }: React.PropsWithChildren) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NextTopLoader />
      {children}
    </QueryClientProvider>
  )
}

export default Providers
