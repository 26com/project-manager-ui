import { createSlice } from '@reduxjs/toolkit';

const loginingSlice = createSlice({
  name: 'logining',
  initialState: {
    logining: true,
  },
  reducers: {
    loginingSuccess: (state, action) => {
      state.logining = action.data;
    },
  },
});

export const {
  loginingSuccess,
} = loginingSlice.actions;

export default loginingSlice.reducer;
