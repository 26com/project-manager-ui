import clientAPI from '../../../utils/clientAPI';

import actions from './actions';

export const login = ({ email, password }) => (dispatch) => {

    dispatch(actions.loginStart());

    clientAPI.post('unprotected/login', {
        email,
        password
    })
    .then(res => {
        localStorage.access_token = res.data.token;
        dispatch(actions.loginSuccess());
    })
    .catch(err => {
        console.log("INVALID LOGIN OR PASSWORD");
        dispatch(actions.loginSuccess("INVALID LOGIN OR PASSWORD"));
        setTimeout(() => dispatch(actions.loginSuccess(null)), 3000);
    });

};

export const registerGapi = ({ email, name}) => (dispatch) => {

    dispatch(actions.loginStart());

    clientAPI.post('unprotected/registerGapi', {
        email,
        name
    })
    .then((res) => {
        console.log(res);
        localStorage.access_token = res.data.token;
        console.log('token was update');
        dispatch(actions.loginSuccess());
    });

};
