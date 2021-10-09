import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
// import AuthorizationView from './views/AuthorizationView';
// import HomeView from './views/HomeView';
// import ReportsView from './views/ReportsView';
import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const AuthorizationView= lazy(() =>
  import("./views/AuthorizationView")
);

const HomeView = lazy(() =>
  import("./views/HomeView")
);
const ReportsView = lazy(() =>
  import("./views/ReportsView")
);
function App ()  {
    return (
        <div>
          

            <Suspense fallback={<p>...Loading</p>}>
                <Switch>
                    <Route exact path="/Home" exact component = {HomeView}>
                        <HomeView />
                    </Route>

                    <Route path="/Authorization">
                        <AuthorizationView />
                    </Route>

                    <Route path="/Reports">
                        <ReportsView />
                    </Route>
                {/* <Redirect to ="/Home">
             <HomeView />
             </Redirect> */}
                </Switch>
            </Suspense>
        </div>
    );
}
export default App;
