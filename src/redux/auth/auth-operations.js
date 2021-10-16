import axios from 'axios';
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    refreshUserRequest,
    refreshUserSuccess,
    refreshUserError,
} from './auth-actions';
import {
    noteSuccess,
    noteError,
} from '../../components/AuthForm/Natifications.js';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};
const register = registrationObject => async dispatch => {
    dispatch(registerRequest());

    try {
        const {
            data: { data },
        } = await axios.post('/auth/register', registrationObject);
        dispatch(registerSuccess(data));
        noteSuccess('Реєстація пройшла успішно. Увійдіть в свій акаунт.');
    } catch (error) {
        if (error.response?.status === 409) {
            noteError('Такий e-mail вже зареєстрований');
        }
        dispatch(registerError(error.message));
    }
};
const login = loginObject => async (dispatch, getState) => {
    dispatch(loginRequest());

    const authToken = getState().auth.token;

    try {
        const {
            data: { data },
        } = await axios.post('/auth/login', loginObject);

        token.set(authToken);

        dispatch(loginSuccess(data));
        noteSuccess('Вітаємо!');
    } catch (error) {
        if (error.response?.status === 403) {
            noteError('Невірна пошта, або пароль');
        }
        dispatch(loginError(error.message));
    }
};
const resetParams = () => (axios.defaults.params = {});

const logOut = () => async dispatch => {
    dispatch(logoutRequest());

    try {
        resetParams();

        await axios.post('/auth/logout');
        token.unset();

        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutError(error.message));
    }
};

const refreshUser = refreshObject => async (dispatch, getState) => {
    dispatch(refreshUserRequest());

    const {
        auth: { refreshToken: refToken, sid: id },
    } = getState();
    /* const credentials = { sid: id }; */

    /* const tokenId = getState().auth.tokenId;

    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }
    token.set(persistedToken); */
    token.set(refToken);

    dispatch(refreshUserRequest());

    try {
        const { data } = await axios.post('/auth/refresh', refreshObject);

        dispatch(refreshUserSuccess(data));
    } catch (error) {
        if (error.response.status === 401) {
            dispatch(logoutSuccess());
        }
        dispatch(refreshUserError(error.message));
    }
};

export { token, login, register, logOut, refreshUser };
