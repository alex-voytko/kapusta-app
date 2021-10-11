import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
import AuthorizationView from './views/AuthorizationView';
import HomeView from './views/HomeView';
import ReportsView from './views/ReportsView';
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
const App = () => {
    return (
        <div>
            <Header />

            <Suspense fallback={<p>...Loading</p>}>
                <Switch>
                    <Route path="/HomePage">
                        <HomePage />
                    </Route>

                    <Route path="/AuthorizationPage">
                        <AuthorizationPage />
                    </Route>

                    <Route path="/ReportsPage">
                        <ReportsPage />
                    </Route>
                   
                </Switch>
            </Suspense>
        </div>
    );
}
export default App;
