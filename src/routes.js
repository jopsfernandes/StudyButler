import { Heading1 } from "lucide-react";
import React from "react";

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

const Routes= () => {
     <HashRouter>
          <Switch route>
               <Route exact path="/" Component={() => <h1>oi</h1>}/>
          </Switch>
     </HashRouter>
}

export default Routes;