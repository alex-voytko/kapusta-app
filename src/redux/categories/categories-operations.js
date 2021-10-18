import axios from 'axios';
import categoriesActions from './categories-actions';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const getIncomeCategories = data => async dispatch => {
    dispatch(categoriesActions.incomeCategoriesRequest());
    try {
        await axios.get('/transaction/income-categories');

        dispatch(categoriesActions.incomeCategoriesSuccess(data));
        console.log(data);
    } catch (error) {
        dispatch(categoriesActions.incomeCategoriesError(error.message));
    }
};

const getExpenseCategories = data => async dispatch => {
    dispatch(categoriesActions.expenseCategoriesRequest());
    try {
        await axios.get('transaction/expense-categories');
        dispatch(categoriesActions.expenseCategoriesSuccess(data));
        console.log(data);
    } catch (error) {
        dispatch(categoriesActions.expenseCategoriesError(error.message));
    }
};

export default {
    getIncomeCategories,
    getExpenseCategories,
};
