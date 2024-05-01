import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name: "userinfo",
    initialState: { apiStatus: "init", data: null },
    reducers: {
        setUserInfo: (state, action) => {
            // action.payload = { apiStatus: "pending", data? }
            state.apiStatus = action.payload.apiStatus;
            state.data = action.payload.data
        }
    }
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice;