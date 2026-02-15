import { createSlice } from '@reduxjs/toolkit';


const loadApplications = () => {
    try {
        const storedApplications = JSON.parse(localStorage.getItem('applications'));
        if(storedApplications === null){
            return []
        }else {
            return storedApplications
        }   
    } catch {
        return []
    }
}
const initialState = {applications:loadApplications()};

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    applicationAdded: (state,action) => {
        state.applications.push(action.payload)
    },
    applicationUpdated: (state,action) => {
        const {id,changes} = action.payload //id tells you which item, changes tells you what to change
        const existing = state.applications.find((app) => app.id === id);
        if (!existing) return;
        Object.assign(existing, changes, { updatedAt: new Date().toISOString() });
        
    },
    applicationDeleted: (state, action) => {
        state.applications = state.applications.filter(application => application.id !== action.payload) //Keep only applications whose id is NOT equal to that id
    },
  },
});

// Action creators are automatically generated and exported
export const { applicationAdded, applicationUpdated, applicationDeleted } = applicationsSlice.actions;

// The reducer function for the whole slice is the default export
export default applicationsSlice.reducer;