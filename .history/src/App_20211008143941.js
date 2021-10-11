import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
import AuthorizationView from './views/AuthorizationView';
import HomeView from './views/HomeView';
import ReportsView from './views/ReportsView';
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const AuthorizationPage = lazy(() =>
  import("./AuthorizationView/")
);

const HomePage= () => {}
const ReportsPage = () => { }



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
                        <AuthorizationPagePage />
                    </Route>

                    <Route path="/ReportsPage">
                        <ReportsPage />
                    </Route>
                    <Redirect to="/RepotsPage" />
                </Switch>
            </Suspense>
        </div>
    );
}

        
    
export default App;
