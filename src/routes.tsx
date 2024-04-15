import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { SignIn } from './screens/signin.tsx';
import { Dashboard } from './screens/Dashboard.tsx';
import { UserDashboard } from './screens/UserDashboard.tsx';
import {UserSettings} from './screens/UserSettings.tsx';




export const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<SignIn />}/>
            

            <Route path="/dashboard" element={<Dashboard />}/>
            

            <Route path="/user-dashboard" element={<UserDashboard />}/>

            <Route path="/user-settings" element={<UserSettings />}/>
            

        </>

    ));

