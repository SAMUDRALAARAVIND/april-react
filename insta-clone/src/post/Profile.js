import { useDispatch, useSelector } from "react-redux";
import { ApiStatus } from "../network/apiStatus";
import { useEffect, useState } from "react";
import { setUserInfo } from "./slices/userInfoSlice";
import endpoints from "../network/endpoints";
import request from "../network/request";
import { Button, Form, Input, Modal } from "antd";

export const Profile = () => {
    const { apiStatus, data } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const showCreatePostModal = () => {
        setShow(!show);
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

            {
                show && <Modal open={show} footer={null} closable={false}>
                    <Form>
                        <Form.Item name="title" rules={[{ required: true, message: "Post title is required" }]}>
                            <Input style={{ border: "2px solid blue", color: "red" }} placeholder="Post title" />
                        </Form.Item>
                        <Form.Item name="content" rules={[{ required: true, message: "Content is required" }]}>
                            <Input.TextArea placeholder="Post content" />
                        </Form.Item>
                        <Button htmlType="submit">Create Post</Button>
                    </Form>
                </Modal>
            }
        </div>
    )
}