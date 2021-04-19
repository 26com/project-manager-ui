import { combineReducers } from 'redux';

import login from './entities/Login/reducer';
import register from './entities/Register/reducer';
import home from './entities/Home/reducer';

const rootReducer = combineReducers({ login, register, home });

export default rootReducer;
