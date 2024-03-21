import {createBrowserRouter} from 'react-router-dom'
import * as React from 'react'
import { SignIn } from './screens/signin';


export const router = createBrowserRouter(
     [{
          path: '/',
          element: <SignIn/>,
     }]
   );
