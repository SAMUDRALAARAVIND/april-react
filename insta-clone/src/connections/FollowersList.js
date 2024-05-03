import { useDispatch, useSelector } from "react-redux";
import { followersSelector } from "./redux/selectors";
import { Empty, Spin } from "antd";
import { useEffect } from "react";
import { fetchFollowers } from "./redux/thunks";
import { Spinner } from "../components/Spinner";

export const FollowersList = () => {
    const followersInfo = useSelector(followersSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFollowers)
    }, []);

    if (followersInfo.apiStatus === "pending" || followersInfo.apiStatus === "init") {
        return <Spinner />
    }

    const users = followersInfo.users;

    return (
        <div className="followers-container tab">
            {
                users.length === 0 ? <Empty description="You don't have followers" /> :
                    users.map(user => {
                        return <p>{user.name}</p>
                    })
            }
        </div>
    );
}