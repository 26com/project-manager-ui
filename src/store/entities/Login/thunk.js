import clientAPI from '../../../utils/clientAPI';

import actions from './actions';

const login = ({ email, password }) => (dispatch) => {

    dispatch(actions.loginStart());

    clientAPI.get('auth/login', {
        params: {
            email,
            password
        }
    })
    .then(res => {
        dispatch(actions.loginSuccess());
        localStorage.access_token = res.data.token;
    })

};

export default login;