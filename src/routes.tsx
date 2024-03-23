import { createBrowserRouter} from 'react-router-dom'
import { SignIn } from './screens/signin.tsx';


export const router = createBrowserRouter(
     [{
          path: '/',
          element: <SignIn/>
          
     }]);

     