import {configureStore} from '@reduxjs/toolkit';
import userSlice from "../features/user/userSlice";
import drawerSlice from "../features/drawer/drawerSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        drawer: drawerSlice
    },
});
