// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import balanceActions from './balance-actions';
import { authActions } from '../auth';

const balanceReducer = createReducer(0, {
    [balanceActions.getBalanceSuccess]: (_, { payload }) => payload,
    [balanceActions.addBalanceSuccess]: (_, { payload }) => payload,
    [authActions.loginSuccess]: (_, { payload }) => payload.userData.balance,
    [authActions.getCurUserSuccess]: (_, { payload }) => payload.balance,
    // [balanceActions.addIncomeSuccess]: (state, { payload }) =>
    //     state + payload.amount,
    // [balanceActions.addExpenseSuccess]: (state, { payload }) =>
    //     state - payload.amount,
    // [balanceActions.deleteIncomeTransactionSuccess]: (state, { payload }) =>
    //     state - payload.amount,
    // [balanceActions.deleteExpenseTransactionSuccess]: (state, { payload }) =>
    //     state + payload.amount,
});
export default balanceReducer;
