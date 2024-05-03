import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name: "userinfo",
    initialState: { apiStatus: "init", data: null },
    reducers: {
        setUserInfo: (state, action) => {
            // action.payload = { apiStatus: "pending", data? }
            state.apiStatus = action.payload.apiStatus;
            state.data = action.payload.data
        },
        incrementPostsCount: (state, action) => {
            state.data.posts += 1;
        }
    }
});

export const { setUserInfo, incrementPostsCount } = userInfoSlice.actions;
export default userInfoSlice;