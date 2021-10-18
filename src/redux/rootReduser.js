import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import balanceReducer from './balance/balance-reducer';
import { authReducer } from './auth';
import { categoriesReducer } from './categories';
import { transactionReducer } from './transactions';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'refreshToken', 'sid'],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistAuthReducer,
    balance: balanceReducer,
    categories: categoriesReducer,
    transactions: transactionReducer,
});

export default rootReducer;
