import axios from 'axios';
import authActions from './auth-actions';
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
    dispatch(authActions.registerRequest());

    try {
        const {
            data: { data },
        } = await axios.post('/auth/register', registrationObject);
        dispatch(authActions.registerSuccess(data));
        noteSuccess('Реєстація пройшла успішно. Увійдіть в свій акаунт.');
    } catch (error) {
        if (error.response?.status === 409) {
            noteError('Такий e-mail вже зареєстрований');
        }
        dispatch(authActions.registerError(error.message));
    }
};
const login = loginObject => async (dispatch, getState) => {
    dispatch(authActions.loginRequest());

    const authToken = getState().auth.token;

    try {
        const { data } = await axios.post('/auth/login', loginObject);
        console.log(axios.post('/auth/login', loginObject));

        token.set(authToken);

        dispatch(authActions.loginSuccess(data));
        noteSuccess('Вітаємо!');
    } catch (error) {
        if (error.response?.status === 403) {
            noteError('Невірна пошта, або пароль');
        }
        dispatch(authActions.loginError(error.message));
    }
};
const resetParams = () => (axios.defaults.params = {});

const logOut = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
        resetParams();

        await axios.post('/auth/logout');
        token.unset();

        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    }
};

const refreshUser = refreshObject => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }
    token.set(persistedToken);
    dispatch(authActions.refreshUserRequest());

    try {
        const { data } = await axios.post('/auth/refresh');
        dispatch(authActions.refreshUserSuccess(data));
    } catch (error) {
        if (error.response.status === 401) {
            dispatch(authActions.logoutSuccess());
        }
        dispatch(authActions.refreshUserError(error.message));
    }
};

const getCurrentUser = () => async (dispatch, getState) => {
    dispatch(authActions.getCurUserRequest());
    const accessToken = getState().auth.token;
    token.set(accessToken);
    try {
        const { data } = await axios.get('/user');
        dispatch(authActions.getCurUserSuccess(data));
    } catch (error) {
        dispatch(authActions.getCurUserError(error.message));
    }
};

export default { token, login, register, logOut, refreshUser, getCurrentUser };
