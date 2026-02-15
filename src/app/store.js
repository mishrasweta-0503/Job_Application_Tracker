import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filters/filtersSlice.js';
import applicationsReducer from '../features/applications/applicationsSlice.js';

export const store = configureStore({
    reducer: {
        filters:filterReducer,
        applications:applicationsReducer
    },
  });
  store.subscribe(() => {
    const result = JSON.stringify(store.getState().applications.applications);
    localStorage.setItem("applications", result)
  })