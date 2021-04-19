import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    message: '',
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.message = action.data;
    },
  },
});

export const { loginStart, loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
