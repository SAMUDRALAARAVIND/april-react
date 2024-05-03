import { useDispatch, useSelector } from "react-redux";
import { ApiStatus } from "../network/apiStatus";
import { useEffect, useState } from "react";
import { incrementPostsCount, setUserInfo } from "./slices/userInfoSlice";
import endpoints from "../network/endpoints";
import request from "../network/request";
import { Button, Form, Input, Modal } from "antd";
import { createPost } from "./thunks/createpost";
import { addNewPost } from "./slices/postsSlice";

export const Profile = () => {
    const { apiStatus, data } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const showCreatePostModal = () => {
        setShow(!show);
    }

    const createNewPost = async (postInfo) => {
        const payload = { title: postInfo.title, content: postInfo.content, imageUrls: [postInfo.imageUrl] };
        try {
            const httpConfig = {
                url: endpoints.createPost,
                method: "POST",
                data: payload,
            }
            const { success, data } = await request(httpConfig);
            if (success) {
                alert(data.message);
                dispatch(addNewPost(data.post))
                dispatch(incrementPostsCount());
                setShow(!show);
            }
        }
        catch (error) {
            alert("Unable to create post");
        }
    }

    useEffect(() => {
        (async function () {
            dispatch(setUserInfo({ apiStatus: ApiStatus.pending }));
            const httpConfig = {
                url: endpoints.userInfo,
                method: 'GET'
            };
            const { success, data } = await request(httpConfig);
            dispatch(setUserInfo({ apiStatus: success ? ApiStatus.success : ApiStatus.error, data }));
        })();
    }, []);

    if (apiStatus === ApiStatus.init || apiStatus === ApiStatus.pending) {
        return <p>Fetching User Info ...</p>
    }

    return (
        <div className="profile">
            <div className="items">
                <button className="material-icons create-post" onClick={showCreatePostModal}>add</button>
                <div className="item">
                    <b>{data.followers}</b>
                    <span>Followers</span>
                </div>
                <div className="item">
                    <b>{data.following}</b>
                    <span>Following</span>
                </div>
                <div className="item">
                    <b>{data.posts}</b>
                    <span>Posts</span>
                </div>
            </div>
            <div>
                {data.gender === "MALE" ? "He/Him" : "She/Her"}
                <p>{data.name}</p>
                <p>{data.email}</p>
            </div>

            <Modal open={show} footer={null} closable={false}>
                <Form onFinish={createNewPost}>
                    <Form.Item name="title" rules={[{ required: true, message: "Post title is required" }]}>
                        <Input placeholder="Post title" />
                    </Form.Item>
                    <Form.Item name="content" rules={[{ required: true, message: "Content is required" }]}>
                        <Input.TextArea placeholder="Post content" />
                    </Form.Item>
                    <Form.Item name="imageUrl" rules={[{ type: "url", message: "Please enter a valid url" }]} >
                        <Input placeholder="Image Url" />
                    </Form.Item>
                    <Button htmlType="submit">Create Post</Button>
                </Form>
            </Modal>
        </div>
    )
}