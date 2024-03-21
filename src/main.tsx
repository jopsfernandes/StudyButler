import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { RouterProvider } from 'react-router-dom'
import {router} from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
