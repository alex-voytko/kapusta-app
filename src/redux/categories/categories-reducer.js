import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import categoriesActions from './categories-actions';

const getIncomeCategories = createReducer([], {
    [categoriesActions.incomeCategoriesSuccess]: (_, { payload }) =>
        payload.data,
    [categoriesActions.incomeCategoriesError]: (_, { payload }) => payload.data,
});

const getExpenseCategories = createReducer([], {
    [categoriesActions.expenseCategoriesSuccess]: (_, { payload }) =>
        payload.data,
    [categoriesActions.expenseCategoriesError]: (_, { payload }) =>
        payload.data,
});

export default combineReducers({ getIncomeCategories, getExpenseCategories });
