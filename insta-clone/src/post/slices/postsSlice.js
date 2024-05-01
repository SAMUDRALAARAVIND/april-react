import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: { apiStatus: "init", data: [] },
    reducers: {
        setPosts: (state, action) => {
            state.apiStatus = action.payload.apiStatus;
            state.data = action.payload.data;
        }
    }
})
export const { setPosts } = postsSlice.actions;
export default postsSlice;