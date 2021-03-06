import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const refreshUserRequest = createAction('auth/refreshUserRequest');
const refreshUserSuccess = createAction('auth/refreshUserSuccess');
const refreshUserError = createAction('auth/refreshUserError');

const getCurUserRequest = createAction('auth/getCurUserRequest');
const getCurUserSuccess = createAction('auth/getCurUserSuccess');
const getCurUserError = createAction('auth/getCurUserError');

export default {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    refreshUserRequest,
    refreshUserSuccess,
    refreshUserError,
    getCurUserRequest,
    getCurUserSuccess,
    getCurUserError,
};
