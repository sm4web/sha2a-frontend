import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sha2a from "../../API/axios";

const initialState = {
    loggedIn: false, data: null, isLoading: false
};

export const userLogin = createAsyncThunk('user/userLogin', async (values) => {
    return sha2a.post('user/login/', values).then((response) => {
        values.router('/')
        return response.data
    }).catch((error) => {
        return {errorMessage: error.response.data.error}
    })
})

export const userRegister = createAsyncThunk('user/userRegister', async (values, thunkAPI) => {
    return sha2a.post('user/register/', values).then((regRes) => {
        values.router('/user-verify')
        const password = values.password
        return {...regRes.data, password}
    }).catch((error) => {
        return values.setError(error.response.statusText)
    })
})

export const userVerify = createAsyncThunk('user/userValidation', async (values, thunkAPI) => {
    return sha2a.post('user/validate_otp/', values).then((otpRes) => {
        const {email, password} = thunkAPI.getState().user.data
        return sha2a.post('user/login/', {email, password}).then((loginRes) => {
            values.router('/personal-info?step=2')
            return loginRes.data
        })

    }).catch((error) => {
        values.setError(error.response.data.detail)
    })
})

export const userUpdate = createAsyncThunk('user/userUpdate', async (values, thunkAPI) => {
    const {access, profile_id} = thunkAPI.getState().user.data
    return sha2a.put(`user/profile/${profile_id}/`, values, {
        headers: {
            authorization: `Bearer ${access}`
        }
    }).then((response) => {
        if (response.status === 200) {
            values.router('/')

        }
        // return response.data
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
            state.data = {...state.data, ...action.payload}
            state.loggedIn = true

        }, [userUpdate.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        // user profile update
        [userVerify.pending]: (state) => {
            state.isLoading = true

        },

        [userVerify.fulfilled]: (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.data = action.payload

        },

        [userVerify.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
});

export const {signOut} = userSlice.actions;


export default userSlice.reducer;
