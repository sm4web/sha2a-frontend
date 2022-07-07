import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loggedIn: false,
    data: null
};


export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.data = action.payload
            state.loggedIn = true
        },
        signOut: (state, action) => {
            state.data = null;
            state.loggedIn = false;
        }
    },
});

export const {signIn} = counterSlice.actions;


export default counterSlice.reducer;
