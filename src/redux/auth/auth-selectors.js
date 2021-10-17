const getAuth = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;
const getUserID = state => state.auth.user.id;

export default { getAuth, getUserEmail, getToken, getUserID };
