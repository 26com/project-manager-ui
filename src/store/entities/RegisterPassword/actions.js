export const REGISTER_PASSWORD_START = "REGISTER_PASSWORD_START";
export const REGISTER_PASSWORD_SUCCESS = "REGISTER_PASSWORD_SUCCESS";

export default {
    registerPasswordStart: () => ({type: REGISTER_PASSWORD_START}),
    registerPasswordSuccess: (data) => ({
        type: REGISTER_PASSWORD_SUCCESS,
        data
    })
};