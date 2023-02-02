import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sha2a from "../../API/axios";

const initialState = {
    data: null, isLoading: false
};

export const getAllProperties = createAsyncThunk('get-all-properties/getAllProperties', async (values, thunkAPI) => {
    const {access} = thunkAPI.getState().user.data
    return sha2a.get('/property/all/', {
        headers: {
            authorization: `Bearer ${access}`
        }
    }).then((res) => {
        return res.data
    }).catch((error) => {
        console.log(error)
    })
})


export const getProperty = createAsyncThunk('get-property/getProperty', async (values, thunkAPI) => {
    const {access} = thunkAPI.getState().user.data
    return sha2a.get(`/property/${values.id}/`, {
        headers: {
            authorization: `Bearer ${access}`
        }
    }).then((res) => {
        console.log(res)
        values.setData(res.data)
    }).catch((error) => {
        console.log(error)
    })
})


export const getPropertiesSlice = createSlice({
    name: 'get-all-properties', initialState, reducers: {}, extraReducers: {
        [getAllProperties.pending]: (state) => {
            state.isLoading = true
        }, [getAllProperties.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isLoading = false
        }, [getAllProperties.rejected]: (state) => {
            state.isLoading = false
        },
        [getProperty.pending]: (state) => {
            state.isLoading = true
        }, [getProperty.fulfilled]: (state) => {
            state.isLoading = false
        }, [getProperty.rejected]: (state) => {
            state.isLoading = false
        }
    }
});

export const {} = getPropertiesSlice.actions;


export default getPropertiesSlice.reducer;
