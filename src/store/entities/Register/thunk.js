import clientAPI from '../../../utils/clientAPI';

// import actions from './actions';
import { registerStart, registerSuccess } from './slice';

export const register = (data) => (dispatch) => {
  dispatch(registerStart());

  clientAPI.post('unprotected/register', data)
    .then(() => {
      dispatch(registerSuccess(`ПОДТВЕРЖДЕНИЕ ОТПРАВЛЕНО НА ${data.email}`));
      setTimeout(() => dispatch(registerSuccess('')), 3000);
    })
    .catch(() => {
    //   console.log('EMAIL УЖЕ ЗАРЕГЕСТРИРОВАН');
      dispatch(registerSuccess('EMAIL УЖЕ ЗАРЕГЕСТРИРОВАН'));
      setTimeout(() => dispatch(registerSuccess('')), 3000);
    });
};

export const registerGapi = (data) => (dispatch) => {
  dispatch(registerStart());

  clientAPI.post('unprotected/registerGapi', data)
    .then((res) => {
    //   console.log(res);
      localStorage.access_token = res.data.token;
      //   console.log('token was update');
      dispatch(registerSuccess());
    });
};

export const checkToken = (token) => (dispatch) => {
  dispatch(registerStart());

  clientAPI.get('unprotected/register', {
    params: {
      token,
    },
  })
    .then((res) => {
      localStorage.access_token = res.data.token;
      dispatch(registerSuccess('РЕГИСТРАЦИЯ УСПЕШНО ЗАВЕРШЕНА'));
    })
    .catch(() => {
    //   console.log('EMAIL НЕ ПОДТВЕРЖДЕН');
      dispatch(registerSuccess('ИСТЕКЛО ВРЕМЯ ОЖИДАНИЯ, ПОПРОБУЙТЕ СНОВА'));
    });
};
