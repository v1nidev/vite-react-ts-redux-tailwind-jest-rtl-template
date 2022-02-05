import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { AppProviders } from 'global/providers'
import './global/form-reset.css'
import './global/tailwind.css'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
