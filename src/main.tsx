import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard.tsx'
import './global.css'
import { SignIn } from './screens/signin.tsx'
import Routes from './Routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SignIn/>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
