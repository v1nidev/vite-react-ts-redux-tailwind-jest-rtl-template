import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

export function StoreProvider(props: PropsWithChildren<unknown>) {
  return <Provider store={store} {...props} />
}
