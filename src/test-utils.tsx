import { PropsWithChildren, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppProviders } from 'global/providers'

export const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <AppProviders>
      {children}
    </AppProviders>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
