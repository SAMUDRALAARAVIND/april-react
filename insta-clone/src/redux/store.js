
// redux + react-redux

import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "../post/slices/userInfoSlice";
import postsSlice from "../post/slices/postsSlice";

// @reduxjs/toolkit + react-redux
const store = configureStore({
  reducer: {
    user: userInfoSlice.reducer,
    posts: postsSlice.reducer
  }
});

/**
  globalState = {
    user: {
        apiStatus: "init",
        data: null
    },
    posts: {
      apiStatus: "init", 
      data: []
    }
  }
 */


// Using redux we can acheive global state management.
// We can mutate the state by dispatching some valid actions thereby the reducers listen to the actions and updates the state accordingly.
// Upon state mutation all the subscribers will be informed about the change.
// In react the subscribes are usually React Components which will be re rendered upon state change.


export default store;