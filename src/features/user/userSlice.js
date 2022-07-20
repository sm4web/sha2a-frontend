import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sha2a from "../../API/axios";

const initialState = {
    loggedIn: true, data: null, isLoading: false
};

export const userLogin = createAsyncThunk('user/userLogin', async (values) => {
    return sha2a.post('/login/', values).then((response) => {
        return response.data
    }).catch((error) => {
        return {errorMessage: error.response.data.error}
    })
})

export const userRegister = createAsyncThunk('user/userRegister', async (values) => {
    return sha2a.post('/register/', values).then((response) => {
        return response.data
    }).catch((error) => {
        return {errorMessage: error.response.statusText}
    })
})

export const userUpdate = createAsyncThunk('user/userUpdate', async (values, thunkAPI) => {

    return sha2a.put(`/profile/19/`, values, {
        headers: {
            authorization: `Bearer ${thunkAPI.getState().user.data?.access}`
        }
    }).then((response) => {
        return response.data
    }).catch((error) => {
        return {errorMessage: error.response.statusText}
    })
})

export const userSlice = createSlice({

    name: 'user', initialState, reducers: {

        signOut: (state) => {
            state.data = null;
            state.loggedIn = false;
        }

    }, extraReducers: {
        [userLogin.pending]: (state) => {
            state.isLoading = true

        }, [userLogin.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.loggedIn = true;

        }, [userLogin.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        // register
        [userRegister.pending]: (state) => {
            state.isLoading = true

        }, [userRegister.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.loggedIn = true

        }, [userRegister.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        // user profile update
        [userUpdate.pending]: (state) => {
            state.isLoading = true

        }, [userUpdate.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.loggedIn = true

        }, [userUpdate.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
});

export const {signOut} = userSlice.actions;


export default userSlice.reducer;
