import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
import AuthorizationView from './views/AuthorizationView';
import HomeView from './views/HomeView';
import ReportsView from './views/ReportsView';
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const AuthorizationPage = 

const HomePage= () => {}
const ReportsPage = () => { }



const App = () => {
    return (
      <div className="App">
      <Header />

      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path="/AuthorizationPage">
            <AuthorizationPage />
          </Route>

          <Route path="/register">
            <SignupPage />
          </Route>

          <Route path="/transactions">
            <TransactionsPage />
          </Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>

          {/* Временно редирект на страницу транзакций */}
          <Redirect to="/transactions" />
        </Switch>
      </Suspense>
    </div>
  );
}

        
    );
};

export default App;
