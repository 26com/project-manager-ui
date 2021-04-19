import clientAPI from '../../../utils/clientAPI';

import actions from './actions';

const checkToken = (token) => (dispatch) => {
  dispatch(actions.checkTokenStart());

  clientAPI.get('unprotected/emailCheck', {
    params: {
      token,
    },
  })
    .then(() => {
      dispatch(actions.checkTokenSuccess({ message: 'РЕГИСТРАЦИЯ УСПЕШНО ЗАВЕРШЕНА' }));
    })
    .catch(() => {
      // console.log('EMAIL НЕ ПОДТВЕРЖДЕН');
      dispatch(actions.registerPasswordSuccess({ message: 'ИСТЕКЛО ВРЕМЯ ОЖИДАНИЯ, ПОПРОБУЙТЕ СНОВА' }));
    });
};

export default checkToken;
