import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import balanceReducer from './balance/balance-reducer';
import { authReducer } from './auth';
import { balanceReducer } from '../components/Balance/Balance'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistAuthReducer,
    balance: balanceReducer,

});

export default rootReducer;
