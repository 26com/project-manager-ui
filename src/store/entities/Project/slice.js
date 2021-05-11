import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    loading: false,
    projects: [],
    currentWorkspace: '',
    message: '',
  },
  reducers: {
    projectDeletingStart: (state) => {
      state.loading = true;
    },
    projectDeletingSuccess: (state) => {
      state.loading = false;
    },
    projectGettingStart: (state) => {
      state.loading = true;
    },
    projectGettingSuccess: (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    },
    projectCreatingStart: (state) => {
      state.loading = true;
    },
    projectCreatingSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    projectSetCurrentWorkspace: (state, action) => {
      state.currentWorkspace = action.payload;
    },
  },
});

export const {
  projectDeletingStart, projectDeletingSuccess,
  projectGettingStart, projectGettingSuccess,
  projectCreatingStart, projectCreatingSuccess, projectSetCurrentWorkspace,
} = projectSlice.actions;
export default projectSlice.reducer;
