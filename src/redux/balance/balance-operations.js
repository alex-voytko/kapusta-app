import axios from 'axios';
import balanceActions from './balance-actions';
// проверить запрос как правильно? бэкенд?

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/api';

const getBalance = () => async dispatch => {
    dispatch(balanceActions.getBalanceRequest());

    try {
        const response = await axios.defaults.get('./transactions/balance');

        dispatch(balanceActions.getBalanceSuccess(response.data.balance));
    } catch (error) {
        dispatch(balanceActions.getBalanceError(error.message));
    }
};

const addBalance = balance => async dispatch => {
    dispatch(balanceActions.addBalanceRequest());

    try {
        const response = await axios.patch('./transactions/balance', {
            balance,
        });

        dispatch(balanceActions.addBalanceSuccess(response.data.balance));
    } catch (error) {
        dispatch(balanceActions.addBalanceError(error.message));
    }
};
const balanceOperetion = {
    getBalance,
    addBalance,
};
export default balanceOperetion;
