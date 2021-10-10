const getAuth = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.email;
const getToken = state => state.auth.token;
const getUserID = state => state.auth.user.id;

export { getAuth, getUserName, getToken, getUserID };
