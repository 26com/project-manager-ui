import clientAPI from '../../../utils/clientAPI';

import actions from './actions';

export const checkToken = (token) => (dispatch) => {

    dispatch(actions.checkTokenStart());

    clientAPI.get('unprotected/emailCheck', {
        params: {
            token
        }
    })
    .then((res) => {
        const email = res.data.email;
        dispatch(actions.checkTokenSuccess({message:"РЕГИСТРАЦИЯ УСПЕШНО ЗАВЕРШЕНА"}));
    })
    .catch(err => {
        console.log("EMAIL НЕ ПОДТВЕРЖДЕН");
        dispatch(actions.registerPasswordSuccess({message:"ИСТЕКЛО ВРЕМЯ ОЖИДАНИЯ, ПОПРОБУЙТЕ СНОВА"}));
    });

};