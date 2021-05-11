// import { combineReducers } from 'redux';

// import login from './entities/Login/reducer';
// import register from './entities/Register/reducer';
// import home from './entities/Home/reducer';

// const rootReducer = combineReducers({ login, register, home });

// export default rootReducer;

import login from './entities/Login/slice';
import register from './entities/Register/slice';
import home from './entities/Home/slice';
import workspace from './entities/Workspace/slice';
import project from './entities/Project/slice';
import logining from './entities/Logining/slice';

const rootReducer = {
  login, register, home, workspace, project, logining,
};

export default rootReducer;
