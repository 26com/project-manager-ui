import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    loading: false,
    message: '',
  },
  reducers: {
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.message = action.data;
    },
  },
});

export const { registerStart, registerSuccess } = registerSlice.actions;
export default registerSlice.reducer;
