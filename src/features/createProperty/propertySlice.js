import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sha2a from "../../API/axios";

const initialState = {
    data: null, isLoading: false
};

export const createProperty = createAsyncThunk('create-property/createProperty', async (values, thunkAPI) => {
    const {access} = thunkAPI.getState().user.data
    return sha2a.post('/property/', values, {
        headers: {
            authorization: `Bearer ${access}`
        }
    }).then((res) => {
        console.log(res)
        return res.data
    }).catch((error) => {
        values.setError(error.response.statusText)
    })
})


export const propertySlice = createSlice({
    name: 'create-property', initialState,
    reducers: {},
    extraReducers: {
        [createProperty.pending]: (state) => {
            state.isLoading = true
        }, [createProperty.fulfilled]: (state) => {
            state.isLoading = false
        }, [createProperty.rejected]: (state) => {
            state.isLoading = false
        }
    }
});

export const {} = propertySlice.actions;


export default propertySlice.reducer;
