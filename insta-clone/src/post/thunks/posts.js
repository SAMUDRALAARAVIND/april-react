import endpoints from "../../network/endpoints";
import request from "../../network/request";
import { setPosts } from "../slices/postsSlice";

export async function fetchPosts(dispatch, getState) {
    const httpConfig = {
        url: endpoints.postsList,
        method: "GET"
    };
    dispatch(setPosts({ apiStatus: "pending" }))
    const { success, data } = await request(httpConfig);
    dispatch(setPosts({ apiStatus: success ? "success" : "error", data }))
}