import React, { PropsWithChildren } from 'react'
import { StoreProvider } from './ReduxProvider'

export const AppProviders = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  )
}