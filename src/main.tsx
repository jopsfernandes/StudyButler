
import ReactDOM from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes.tsx'
import React from 'react'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import { DraggableTopBar } from './components/study-butler-components/DraggableTopBar.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
    <DraggableTopBar/>
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
    </>
    
    
)

