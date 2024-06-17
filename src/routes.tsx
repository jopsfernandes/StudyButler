import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { SignIn } from './screens/signin.tsx';
import { Dashboard } from './screens/Dashboard.tsx';
import { UserDashboard } from './screens/UserDashboard.tsx';
import {UserSettings} from './screens/UserSettings.tsx';
import Pricing from './screens/Pricing.tsx';
import { UserQuestionExtractor } from './screens/UserQuestionExtractor.tsx';
import { Layout } from './screens/Layout.tsx';



export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<SignIn />}/>
            
            <Route path="/user-dashboard" element={<Layout/>}>
             <Route index element={<UserDashboard />}/>
             <Route path="/user-dashboard/dashboard" element={<Dashboard />}/>
             <Route path="/user-dashboard/pricing" element={<Pricing/>}/>
             <Route path="/user-dashboard/user-question-extractor" element={<UserQuestionExtractor/>}/>
            
            </Route>

          
            <Route path="/user-settings" element={<UserSettings />}/>

            
            

        </>

    ));

