import { useDispatch, useSelector } from "react-redux";
import { updateConnection } from "./redux/thunks";
import { Button } from "antd";
import { pendingConnectionSelector } from "./redux/selectors";

export const User = ({ user }) => {
    const dispatch = useDispatch();
    const pendingConnections = useSelector(pendingConnectionSelector)

    const isFollowing = user.following;
    // isFollowing = false 
    const onClickBtn = () => {
        dispatch(updateConnection(user._id, user.following))
    }

    return (
        <div key={user._id} className="user">
            <p>{user.name}</p>
            <Button
                loading={pendingConnections[user._id]}
                onClick={onClickBtn}
                className="btn"
            >{isFollowing ? "Following" : "Follow"}</Button>
        </div>
    );
}