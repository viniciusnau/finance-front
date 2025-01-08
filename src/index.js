import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { getItem } from './utils/persistenceUtils'
import { defaultsHeadersAxios } from './services/api'
import { TOKEN_KEY } from './utils/constants'

const root = ReactDOM.createRoot(document.getElementById('root'))
const token = getItem(TOKEN_KEY)

defaultsHeadersAxios(token || '')

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
reportWebVitals()
