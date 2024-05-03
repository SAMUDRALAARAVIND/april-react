import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./thunks/posts";
import "./styles/posts-list.scss";
import request from "../network/request";
import endpoints from "../network/endpoints";
import { addCommentsForPost } from "./slices/postsSlice";

const Post = ({ postInfo }) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const comments = useSelector(state => state.posts.comments[postInfo._id]);

    const onClickComment = async () => {
        setShowComments(!showComments);
        if (!comments) {
            try {
                const httpConfig = {
                    url: endpoints.commentsList,
                    method: "GET",
                    params: { postId: postInfo._id }
                }
                const { success, data } = await request(httpConfig);
                if (success) {
                    dispatch(addCommentsForPost({ postId: postInfo._id, comments: data.comments }))
                }
            }
            catch (error) {
                alert("Failed to fetch comments");
            }
        }
    }

    return (
        <div className="post" key={postInfo._id}>
            <b className="title">{postInfo.title}</b>
            <p className="content">{postInfo.content}</p>
            <div className="items">
                <div className="item">
                    <span className="material-icons">thumb_up</span>
                    <b>{postInfo.likesCount}</b>
                </div>
                <div className="item">
                    <button className="material-icons" onClick={onClickComment}>chat</button>
                    <b>{postInfo.commentsCount}</b>
                </div>
            </div>
            {
                showComments && <div>
                    {postInfo.commentsCount === 0 ? <h2>No comments</h2> :
                        comments?.map?.(comment => {
                            return <div>
                                <b>{comment.user.name}</b>
                                <p>{comment.message}</p>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    )
}

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
                    return (
                        <Post key={post._id} postInfo={post} />
                    );
                })
            }
        </div>
    );
}