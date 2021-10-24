import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionsActions from './transactions-actions';
import { authActions } from '../auth';

const expensesCat = [
    'Продукты',
    'Алкоголь',
    'Развлечения',
    'Здоровье',
    'Транспорт',
    'Всё для дома',
    'Техника',
    'Коммуналка и связь',
    'Спорт и хобби',
    'Образование',
    'Прочее',
];
const incomesCat = ['З/П', 'Доп. доход'];

const filterForCategories = (transactions, transType) => {
    const categories = transType === 'incomes' ? incomesCat : expensesCat;
    return transactions.filter(trns => categories.includes(trns.category));
};

const incomes = createReducer([], {
    [transactionsActions.addIncomeSuccess]: (state, action) => [
        ...state,
        action.payload,
    ],
    [transactionsActions.getIncomeSuccess]: (_, action) => action.payload,

    [transactionsActions.deleteTransactionSuccess]: (state, action) =>
        state.filter(transaction => transaction.id !== action.payload),
    [authActions.loginSuccess]: (_, { payload }) =>
        filterForCategories(payload.userData.transactions, 'incomes'),
    [authActions.getCurUserSuccess]: (_, { payload }) =>
        filterForCategories(payload.transactions, 'incomes'),
});

const expenses = createReducer([], {
    [transactionsActions.addExpenseSuccess]: (state, action) => [
        ...state,
        action.payload,
    ],
    [transactionsActions.getExpenseSuccess]: (_, action) => action.payload,
    [transactionsActions.deleteTransactionSuccess]: (state, action) =>
        state.filter(transaction => transaction.id !== action.payload),
    [authActions.loginSuccess]: (_, { payload }) =>
        filterForCategories(payload.userData.transactions, 'expenses'),
    [authActions.getCurUserSuccess]: (_, { payload }) =>
        filterForCategories(payload.transactions, 'expenses'),
});

export default combineReducers({
    incomes,
    expenses,  
});
