import { combineReducers } from 'redux';

import login from '../store/entities/Login/reducer'; 

const rootReducer = combineReducers({login});

export default rootReducer;
