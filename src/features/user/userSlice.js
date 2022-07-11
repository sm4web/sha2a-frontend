import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sha2a from "../../API/axios";

const initialState = {
    loggedIn: true, data: null, isLoading: false, error: ""
};

export const userLogin = createAsyncThunk('user/userLogin', () => {

    try {

        const response = sha2a.get('')
        return response

    } catch (error) {

        return error.response.data.message

    }

})

export const userSlice = createSlice({

    name: 'user', initialState, reducers: {
        signIn: (state, action) => {
            state.data = action.payload
            state.loggedIn = true
        }, signOut: (state) => {
            state.data = null;
            state.loggedIn = false;
        }
    }, extraReducers: {
        [userLogin.pending]: (state) => {
            state.isLoading = true
        }, [userLogin.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        }, [userLogin.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
});

export const {signIn, signOut} = userSlice.actions;


export default userSlice.reducer;
