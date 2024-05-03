import { ApiStatus } from "../../network/apiStatus";
import endpoints from "../../network/endpoints";
import request from "../../network/request";
import { addPendingConnection, removePendingConnection, updateFollowStatusInSuggestions, updateFollowers, updateSuggestions } from "./connectionsSlice";

export async function fetchFollowers(dispatch) {
    try {
        dispatch(updateFollowers({ apiStatus: ApiStatus.pending }));
        const httpConfig = {
            url: endpoints.followersList,
            method: "GET",
        }
        const { success, data } = await request(httpConfig);
        if (success) {
            dispatch(updateFollowers({ apiStatus: ApiStatus.success, users: data }));
        }
        else {
            throw new Error("Failed to fetch");
        }
    }
    catch (error) {
        alert(error.message);
        dispatch(updateFollowers({ apiStatus: ApiStatus.error }))
    }
}

export async function fetchSuggestions(dispatch) {
    try {
        dispatch(updateSuggestions({ apiStatus: ApiStatus.pending }));
        const httpConfig = {
            url: endpoints.suggestionsList,
            method: "GET",
        }
        const { success, data } = await request(httpConfig);
        if (success) {
            dispatch(updateSuggestions({ apiStatus: ApiStatus.success, users: data.suggestions }));
        }
        else {
            throw new Error("Failed to fetch");
        }
    }
    catch (error) {
        alert(error.message);
        dispatch(updateSuggestions({ apiStatus: ApiStatus.error }))
    }
}


export function updateConnection(userId, isFollowing) {
    return async function (dispatch, getState) {
        try {
            dispatch(addPendingConnection(userId));
            const httpConfig = {
                url: isFollowing ? endpoints.unfollow : endpoints.follow,
                method: "POST",
                data: {
                    userId
                }
            }
            const { success, data } = await request(httpConfig);

            if (success) {
                dispatch(updateFollowStatusInSuggestions({ userId, status: !isFollowing }));
            }
        }
        catch (error) {

        }
        finally {
            dispatch(removePendingConnection(userId))
        }
    }
}