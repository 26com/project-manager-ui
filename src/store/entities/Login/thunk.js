import clientAPI from '../../../utils/clientAPI';

// import actions from './actions';
import { loginStart, loginSuccess } from './slice';

export const login = ({ email, password }) => (dispatch) => {
  dispatch(loginStart());

  clientAPI.post('unprotected/login', {
    email,
    password,
  })
    .then((res) => {
      localStorage.access_token = res.data.token;
      dispatch(loginSuccess());
    })
    .catch(() => {
    //   console.log('INVALID LOGIN OR PASSWORD');
      dispatch(loginSuccess('INVALID LOGIN OR PASSWORD'));
      setTimeout(() => dispatch(loginSuccess(null)), 3000);
    });
};

export const registerGapi = ({ email, name }) => (dispatch) => {
  dispatch(loginStart());

  clientAPI.post('unprotected/registerGapi', {
    email,
    name,
  })
    .then((res) => {
      console.log(res);
      localStorage.access_token = res.data.token;
      console.log('token was update');
      dispatch(loginSuccess());
    });
};
