export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export default {
    loginStart: () => ({type: LOGIN_START}),
    loginSuccess: (data) => ({
        type: LOGIN_SUCCESS,
        data
    })
};