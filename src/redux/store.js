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
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

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

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const store = configureStore({
    reducer: rootReducer,

    middleware,
});

const persistor = persistStore(store);

export { store, persistor };
