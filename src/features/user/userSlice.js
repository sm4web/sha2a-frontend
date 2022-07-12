import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sha2a from "../../API/axios";

const initialState = {
    loggedIn: true, data: null, isLoading: false, error: ""
};

export const userLogin = createAsyncThunk('user/userLogin', async (values) => {

    const res = await sha2a.post('/login', values)
    console.log(res)

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
