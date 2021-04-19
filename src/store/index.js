// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './rootReducer';

// const store = createStore(
//   rootReducer,
//   undefined,
//   applyMiddleware(thunk),
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducer from './rootReducer';

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
