import {createHashRouter, createRoutesFromElements,Route} from 'react-router-dom'
import { SignIn } from './screens/signin.tsx';
import {Dashboard} from './screens/Dashboard.tsx';
import { Outlet } from 'react-router-dom';




export const router = createHashRouter(
    createRoutesFromElements(
     <>
     <Route  path="/" element={<SignIn/>}>
     </Route>

     <Route path="/dashboard" element={<Dashboard/>}>
     </Route>

  
     
        
     
     
     
        
     </>
     
    ));

     