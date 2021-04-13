import produce from 'immer';

import * as types from './actions';

const initialState = {
    loading: false,
    message: null
};

export default (state=initialState, action) => {
    const { type, data } = action;
    return produce(state, (draft) => {
        switch(type){
            case types.REGISTER_START: 
                draft.loading = true;
                break;
            case types.REGISTER_SUCCESS:
                draft.loading = false;
                draft.message = data;
                break;
            default: 
                return draft;
        }
    })
};

