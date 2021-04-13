import clientAPI from '../../../utils/clientAPI';

import actions from './actions';

export const register = ({ email }) => (dispatch) => {

    dispatch(actions.registerStart());

    clientAPI.post('unprotected/emailCheck', {
        email
    })
    .then((res) => {
        dispatch(actions.registerSuccess(`ПОДТВЕРЖДЕНИЕ ОТПРАВЛЕНО НА ${email}`));
        setTimeout(() => dispatch(actions.registerSuccess(null)), 3000);
    })
    .catch(err => {
        console.log("EMAIL УЖЕ ЗАРЕГЕСТРИРОВАН");
        dispatch(actions.registerSuccess("EMAIL УЖЕ ЗАРЕГЕСТРИРОВАН"));
        setTimeout(() => dispatch(actions.registerSuccess(null)), 3000);
    });

};

export const registerGapi = ({ email, name}) => (dispatch) => {

    dispatch(actions.registerStart());

    clientAPI.post('unprotected/registerGapi', {
        email,
        name
    })
    .then((res) => {
        console.log(res);
        localStorage.access_token = res.data.token;
        console.log('token was update');
        dispatch(actions.registerSuccess());
    });

};