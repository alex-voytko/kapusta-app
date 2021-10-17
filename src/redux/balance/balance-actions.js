import { createAction } from '@reduxjs/toolkit';

const getBalanceRequest = createAction('transactions/getBalanceRequest');
const getBalanceSuccess = createAction('transactions/getBalanceSuccess');
const getBalanceError = createAction('transactions/getBalanceError');

const addBalanceRequest = createAction('transactions/addBalanceRequest');
const addBalanceSuccess = createAction('transactions/addBalanceSuccess');
const addBalanceError = createAction('transactions/addBalanceError');

const balanceActions = {
    getBalanceRequest,
    getBalanceSuccess,
    getBalanceError,
    addBalanceRequest,
    addBalanceSuccess,
    addBalanceError,
};
export default balanceActions