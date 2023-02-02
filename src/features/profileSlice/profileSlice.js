import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sha2a from "../../API/axios";

const initialState = {
    data: null, isLoading: false
};


export const getProfile = createAsyncThunk('get-profile/profileSlice', async (values, thunkAPI) => {
    const {access} = thunkAPI.getState().user.data
    return sha2a.get(`/user/profile/${values.id}/`, {
        headers: {
            authorization: `Bearer ${access}`
        }
    }).then((res) => {
        values.setData(res.data)
    }).catch((error) => {
        console.log(error)
    })
})

export const updateProfile = createAsyncThunk('update-profile/profileSlice', async (values, thunkAPI) => {
    const {access} = thunkAPI.getState().user.data
    return sha2a.put(`/user/profile/${values.id}/`, values.data, {
        headers: {
            authorization: `Bearer ${access}`
        }
    }).then((res) => {
        values.setData(res.data)
    }).catch((error) => {
        console.log(error)
    })
})


export const profileSlice = createSlice({
    name: 'get-profile',
    initialState,
    reducers: {},
    extraReducers: {
        [getProfile.pending]: (state) => {
            state.isLoading = true
        }, [getProfile.fulfilled]: (state) => {
            state.isLoading = false
        }, [getProfile.rejected]: (state) => {
            state.isLoading = false
        }

    }
});

export const {} = profileSlice.actions;


export default profileSlice.reducer;
