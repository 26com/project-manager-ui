import { createSlice } from '@reduxjs/toolkit';

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState: {
    loading: false,
    workspaces: [],
    message: '',
  },
  reducers: {
    workspaceGettingStart: (state) => {
      state.loading = true;
    },
    workspaceGettingSuccess: (state, action) => {
      console.log('action ', action);
      state.loading = false;
      state.workspaces = action.payload;
    },
    workspaceCreatingStart: (state) => {
      state.loading = true;
    },
    workspaceCreatingSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
  },
});

export const {
  workspaceGettingStart, workspaceGettingSuccess,
  workspaceCreatingStart, workspaceCreatingSuccess,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
