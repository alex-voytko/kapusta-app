/*
const store = {
    auth: {
        token,
        user: {
            email,
        }
        refreshToken,
        sid,
    }
    transactions: {
        incomes,
        expencses
    }
    stats: [{month: 328}]
    balance: 0
    categories: { [''], ['']}
    reports: {}
}
*/
import { configureStore } from '@reduxjs/toolkit';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './rootReduser';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ]
            }
        })
});

const persistor = persistStore(store);

export { store, persistor };
