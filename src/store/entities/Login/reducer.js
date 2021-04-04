import produce from 'immer';

import * as types from './actions';

const initialState = {
    loading: false
};

export default (state=initialState, action) => {
    const { type } = action;
    return produce(state, (draft) => {
        switch(type){
            case types.LOGIN_START: 
                draft.loading = true;
                break;
            case types.LOGIN_SUCCESS:
                draft.loading = false;
                break;
            default: 
                return draft;
        }
    })
};

