import produce from 'immer';

import * as types from './actions';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  const { type, data } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.REGISTER_PASSWORD_START:
        draft.loading = true;
        break;
      case types.REGISTER_PASSWORD_SUCCESS:
        draft.loading = false;
        draft.userEmail = data.email;
        draft.message = data.message;
        break;
      default:
        return draft;
    }
  });
};
