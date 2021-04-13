import clientAPI from '../../../utils/clientAPI';

import actions from './actions';

export const register = ({ email, name, password }) => (dispatch) => {

    dispatch(actions.registerPasswordStart());

    clientAPI.post('unprotected/register', {
        email,
        name,
        password
    })
    .then((res) => {
        localStorage.access_token = res.data.token;
        dispatch(actions.registerPasswordSuccess({message: null}));
    })
    .catch(err => {
        console.log("ОШИБКА РЕГИСТРАЦИИ");
        dispatch(actions.registerPasswordSuccess("ОШИБКА РЕГИСТРАЦИИ"));
        setTimeout(() => dispatch(actions.registerPasswordSuccess({message: null})), 3000);
    });

};

export const checkToken = (token) => (dispatch) => {

    dispatch(actions.registerPasswordStart());

    clientAPI.get('unprotected/emailCheck', {
        params: {
            token
        }
    })
    .then((res) => {
        const email = res.data.email;
        dispatch(actions.registerPasswordSuccess({email}));
    })
    .catch(err => {
        console.log("EMAIL НЕ ПОДТВЕРЖДЕН");
    dispatch(actions.registerPasswordSuccess({message:"ИСТЕКЛО ВРЕМЯ ОЖИДАНИЯ, ПОПРОБУЙТЕ СНОВА"}));
    });

};