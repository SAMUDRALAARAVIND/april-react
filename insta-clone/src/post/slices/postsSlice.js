import { createSlice } from "@reduxjs/toolkit";

/**
 *  {   apiStatus: "", 
 *      data: [
 *          {
 *              _id: postId,
 *              title: "String",
 *              likesCount: 490,
 *              commentsCount: 393,
 *              content: "String",
 *              imageUrls: [""]
 *          }
 *      ],
 *      comments: {
 *          postId: [ Comment ]
 *      }
 * 
 * }
 */

const postsSlice = createSlice({
    name: "posts",
    initialState: { apiStatus: "init", data: [], comments: {} },
    reducers: {
        setPosts: (state, action) => {
            state.apiStatus = action.payload.apiStatus;
            state.data = action.payload.data;
        },
        addNewPost: (state, action) => {
            state.data.push(action.payload);
        },
        addCommentsForPost: (state, action) => {
            const { postId, comments } = action.payload;
            state.comments[postId] = comments;
        }
    }
})
export const { setPosts, addNewPost, addCommentsForPost } = postsSlice.actions;
export default postsSlice;