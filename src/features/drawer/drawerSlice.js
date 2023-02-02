import {createSlice} from "@reduxjs/toolkit";

const initialState = {opened: false}

export const drawerSlice = createSlice({
    name: 'drawer', initialState, reducers: {
        handleDrawer: (state) => {
            state.opened = !state.opened;
        }
    },
});

export const {handleDrawer} = drawerSlice.actions;


export default drawerSlice.reducer;