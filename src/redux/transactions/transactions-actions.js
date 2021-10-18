import { createAction } from '@reduxjs/toolkit';

const addIncomeRequest = createAction('transaction/addIncomeRequest');
const addIncomeSuccess = createAction('transaction/addIncomeSuccess');
const addIncomeError = createAction('transaction/addIncomeError');

const getIncomeRequest = createAction('transaction/getIncomeRequest');
const getIncomeSuccess = createAction('transaction/getIncomeSuccess');
const getIncomeError = createAction('transaction/getIncomeError');

const addExpenseRequest = createAction('transaction/addExpenseRequest');
const addExpenseSuccess = createAction('transaction/addExpenseSuccess');
const addExpenseError = createAction('transaction/addExpenseError');

const getExpenseRequest = createAction('transaction/getExpenseRequest');
const getExpenseSuccess = createAction('transaction/getExpenseSuccess');
const getExpenseError = createAction('transaction/getExpenseError');

const deleteTransactionRequest = createAction(
    'transaction/deleteTransactionRequest',
);
const deleteTransactionSuccess = createAction(
    'transaction/deleteTransactionSuccess',
);
const deleteTransactionError = createAction(
    'transaction/deleteTransactionError',
);

export default {
    addIncomeRequest,
    addIncomeSuccess,
    addIncomeError,
    getIncomeRequest,
    getIncomeSuccess,
    getIncomeError,
    addExpenseRequest,
    addExpenseSuccess,
    addExpenseError,
    getExpenseRequest,
    getExpenseSuccess,
    getExpenseError,
    deleteTransactionRequest,
    deleteTransactionSuccess,
    deleteTransactionError,
};
