import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard.tsx'
import './global.css'
import { SignIn } from './screens/signin.tsx'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
