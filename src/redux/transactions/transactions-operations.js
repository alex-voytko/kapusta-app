import axios from 'axios';
import transactionsActions from './transactions-actions';

const addIncome = income => dispatch => {
    dispatch(transactionsActions.addIncomeRequest());

    axios
        .post('/transaction/income', income)
        .then(({ data }) =>
            dispatch(transactionsActions.addIncomeSuccess(data)),
        )
        .catch(error =>
            dispatch(transactionsActions.addIncomeError(error.message)),
        );
};

const getIncome = () => dispatch => {
    dispatch(transactionsActions.getIncomeRequest());

    axios
        .get('/transaction/income')
        .then(() => dispatch(transactionsActions.getIncomeSuccess()))
        .catch(error =>
            dispatch(transactionsActions.getIncomeError(error.message)),
        );
};

const addExpense = expense => dispatch => {
    dispatch(transactionsActions.addExpenseRequest());

    axios
        .post('/transaction/income', expense)
        .then(({ data }) =>
            dispatch(transactionsActions.addExpenseSuccess(data)),
        )
        .catch(error =>
            dispatch(transactionsActions.addExpenseError(error.message)),
        );
};

const getExpense = () => dispatch => {
    dispatch(transactionsActions.getExpenseRequest());

    axios
        .get('/transaction/income')
        .then(() => dispatch(transactionsActions.getExpenseSuccess()))
        .catch(error =>
            dispatch(transactionsActions.getExpenseError(error.message)),
        );
};

const deleteTransaction = transID => dispatch => {
    dispatch(transactionsActions.deleteTransactionRequest());

    axios
        .delete('/delete/')
        .then(() =>
            dispatch(transactionsActions.deleteTransactionSuccess(transID)),
        )
        .catch(error =>
            dispatch(transactionsActions.deleteTransactionError(error.message)),
        );
};

export default {
    addIncome,
    getIncome,
    addExpense,
    getExpense,
    deleteTransaction,
};
