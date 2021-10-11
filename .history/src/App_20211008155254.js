import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
// import AuthorizationView from './views/AuthorizationView';
// import HomeView from './views/HomeView';
// import ReportsView from './views/ReportsView';
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const AuthorizationPage= lazy(() =>
  import("./views/AuthorizationView")
);

const HomePage = lazy(() =>
  import("./views/HomeView")
);
const ReportsPage = lazy(() =>
  import("./views/ReportsView")
);
function App ()  {
    return (
        <div>
            <Header />

            <Suspense fallback={<p>...Loading</p>}>
                <Switch>
                    <Route path="/Home">
                        <HomePage />
                    </Route>

                    <Route path="/Authorization">
                        <AuthorizationPage />
                    </Route>

                    <Route path="/Reports">
                        <ReportsPage />
                    </Route>
                   
                </Switch>
            </Suspense>
        </div>
    );
}
export default App;
