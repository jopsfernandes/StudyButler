
import ReactDOM from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes.tsx'

ReactDOM.createRoot(document.getElementById('SignIn') as HTMLElement).render(
    <RouterProvider router={router}/>
)

postMessage({ payload: 'removeLoading' }, '*')
