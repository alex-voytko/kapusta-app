import React from 'react';
import AppBar from '../../components/AppBar';
import AuthForm from '../../components/AuthForm';
import Summary from '../../components/Summary';

const AuthorizationView = () => {
    return (
        <>
            <AuthForm />
            <AppBar />
            <div></div>
            <Summary />
        </>
    );
};

export default AuthorizationView;
