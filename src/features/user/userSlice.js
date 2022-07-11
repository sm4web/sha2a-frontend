import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loggedIn: true,
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
        signOut: (state) => {
            state.data = null;
            state.loggedIn = false;
        }
    },
});

export const {signIn, signOut} = counterSlice.actions;


export default counterSlice.reducer;
