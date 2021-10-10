import React from 'react';
import AuthForm from '../../components/AuthForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
/* import styles from './AuthorizationView.module.scss'; */

import { refreshUser } from '../../redux/auth/auth-operations';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthorizationView = () => {
    /* const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]) */ return (
        <>
            <div>
                <AuthForm />
                <ToastContainer
                    transition={Zoom}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </>
    );
};

export default AuthorizationView;
