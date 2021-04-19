// import { combineReducers } from 'redux';

// import login from './entities/Login/reducer';
// import register from './entities/Register/reducer';
// import home from './entities/Home/reducer';

// const rootReducer = combineReducers({ login, register, home });

// export default rootReducer;

import login from './entities/Login/slice';
import register from './entities/Register/slice';
import home from './entities/Home/slice';

const rootReducer = { login, register, home };

export default rootReducer;
