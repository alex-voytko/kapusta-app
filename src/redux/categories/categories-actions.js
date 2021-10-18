import { createAction } from '@reduxjs/toolkit';

const incomeCategoriesRequest = createAction(
    'categories/incomeCategoriesRequest',
);
const incomeCategoriesSuccess = createAction(
    'categories/incomeCategoriesSuccess',
);
const incomeCategoriesError = createAction('categories/incomeCategoriesError');

const expenseCategoriesRequest = createAction(
    'categories/expenseCategoriesRequest',
);
const expenseCategoriesSuccess = createAction(
    'categories/expenseCategoriesSuccess',
);
const expenseCategoriesError = createAction(
    'categories/expenseCategoriesError',
);

export default {
    incomeCategoriesRequest,
    incomeCategoriesSuccess,
    incomeCategoriesError,
    expenseCategoriesRequest,
    expenseCategoriesSuccess,
    expenseCategoriesError,
};
