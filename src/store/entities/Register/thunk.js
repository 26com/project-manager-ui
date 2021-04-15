import clientAPI from '../../../utils/clientAPI';

import actions from './actions';

export const register = (data) => (dispatch) => {

    dispatch(actions.registerStart());

    clientAPI.post('unprotected/register', data)
    .then((res) => {
        dispatch(actions.registerSuccess(`ПОДТВЕРЖДЕНИЕ ОТПРАВЛЕНО НА ${data.email}`));
        setTimeout(() => dispatch(actions.registerSuccess('')), 3000);
    })
    .catch(err => {
        console.log("EMAIL УЖЕ ЗАРЕГЕСТРИРОВАН");
        dispatch(actions.registerSuccess("EMAIL УЖЕ ЗАРЕГЕСТРИРОВАН"));
        setTimeout(() => dispatch(actions.registerSuccess('')), 3000);
    });

};

export const registerGapi = (data) => (dispatch) => {

    dispatch(actions.registerStart());

    clientAPI.post('unprotected/registerGapi', data)
    .then((res) => {
        console.log(res);
        localStorage.access_token = res.data.token;
        console.log('token was update');
        dispatch(actions.registerSuccess());
    });

};

export const checkToken = (token) => (dispatch) => {

    dispatch(actions.registerStart());

    clientAPI.get('unprotected/register', {
        params: {
            token
        }
    })
    .then((res) => {
        localStorage.access_token = res.data.token;
        dispatch(actions.registerSuccess("РЕГИСТРАЦИЯ УСПЕШНО ЗАВЕРШЕНА"));
    })
    .catch(err => {
        console.log("EMAIL НЕ ПОДТВЕРЖДЕН");
        dispatch(actions.registerSuccess("ИСТЕКЛО ВРЕМЯ ОЖИДАНИЯ, ПОПРОБУЙТЕ СНОВА"));
    });

};