import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
import AuthorizationView from './views/AuthorizationView';
import HomeView from './views/HomeView';
import ReportsView from './views/ReportsView';
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const AuthorizationView = 

const HomeView = () => {}
const ReportsView = () => { }



const App = () => {
    return (
        <>
            <AppBar />
            <Container>
                <h1>Hello</h1>
                <AuthorizationView />
            </Container>
        </>
    );
};

export default App;
