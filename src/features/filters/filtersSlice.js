import { createSlice } from '@reduxjs/toolkit';

const initialState = {searchText:'',status:'all',sortBy:"updatedAt_desc"};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSearchText: (state,action) => {
        state.searchText = action.payload;
    },
    updateStatus: (state,action) => {
        state.status = action.payload;
    },
    updateSortBy: (state, action) => {
        state.sortBy = action.payload
    },
    resetFilters(){
        return initialState
    }
  },
});
//payload is data we pass while dispatching. lets say we are searching for a text 'google', so action.payload becomes 'google'.
// Action creators are automatically generated and exported
export const { updateSearchText, updateStatus, updateSortBy,resetFilters } = filterSlice.actions;

// The reducer function for the whole slice is the default export
export default filterSlice.reducer;