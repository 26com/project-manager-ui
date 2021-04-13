import { combineReducers } from 'redux';

import login from '../store/entities/Login/reducer'; 
import register from '../store/entities/Register/reducer'; 
import registerPassword from '../store/entities/RegisterPassword/reducer'; 

const rootReducer = combineReducers({login, register, registerPassword});

export default rootReducer;
