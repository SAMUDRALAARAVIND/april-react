import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./thunks/posts";
import "./styles/posts-list.scss";

export const PostsList = () => {
    const { apiStatus, data } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts);
    }, []);

    if (apiStatus === "pending" || apiStatus === "init") {
        return <p>Fetching Posts....</p>
    }

    return (
        <div className="posts-list">
            {
                data.map(post => {
                    return <div className="post" key={post._id}>
                        <b className="title">{post.title}</b>
                        <p className="content">{post.content}</p>
                        <div className="items">
                            <div className="item">
                                <span className="material-icons">thumb_up</span>
                                <b>{post.likesCount}</b>
                            </div>
                            <div className="item">
                                <span className="material-icons">chat</span>
                                <b>{post.commentsCount}</b>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}