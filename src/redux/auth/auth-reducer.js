import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
    email: null,
    id: null,
};

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, { payload }) => ({
        email: payload.data.email,
        verifyToken: payload.data.verifyToken,
    }),
    [authActions.loginSuccess]: (_, { payload }) => ({
        email: payload.userData.email,
        id: payload.userData.id,
    }),
    [authActions.refreshUserSuccess]: (state, { payload }) => ({
        ...state,
        ...payload,
    }),
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurUserSuccess]: (state, { payload }) => ({
        ...state,
        email: payload.email,
    }),
    //полностью обработать action во всех редюсерах
});

const token = createReducer(null, {
    [authActions.registerSuccess]: () => null,
    [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
    [authActions.logoutSuccess]: () => null,
});

const loading = createReducer(false, {
    [authActions.loginSuccess]: () => false,
    //добавить реквесты => true
    [authActions.loginError]: () => false,
    [authActions.logoutSuccess]: () => false,
    [authActions.logoutError]: () => false,
    [authActions.registerSuccess]: () => false,
    [authActions.registerError]: () => false,
    [authActions.refreshUserSuccess]: () => false,
    [authActions.refreshUserError]: () => false,
});

const error = createReducer(null, {
    [authActions.registerError]: (_, { payload }) => payload,
    [authActions.registerRequest]: () => null, //все реквесты в null
    [authActions.loginError]: (_, { payload }) => payload,
    [authActions.logoutError]: (_, { payload }) => payload,
    [authActions.refreshUserError]: (_, { payload }) => payload,
});

const isRegistrated = createReducer(false, {
    [authActions.registerSuccess]: () => true,
});

const isAuthenticated = createReducer(false, {
    [isRegistrated]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.refreshUserSuccess]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.refreshUserError]: () => false,
    [authActions.logoutSuccess]: () => false,
    [authActions.getCurUserSuccess]: () => true,
});

export default combineReducers({
    user,
    token,
    loading,
    isAuthenticated,
    error,
});
