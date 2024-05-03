import { Tabs } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./styles/connections.scss";
import { FollowersList } from "./FollowersList";
import { FollowingList } from "./FollowingList";
import { SuggestionsList } from "./SuggestionsList";

export const Connections = () => {
    const { tabId } = useParams();
    const navigate = useNavigate();

    return <div className="connections-container">
        <Tabs
            defaultActiveKey={tabId}
            onChange={(key) => {
                navigate(`/connections/${key}`);
            }}
            items={[
                {
                    label: "Followers",
                    key: "followers",
                    children: <FollowersList />
                },
                {
                    label: "Following",
                    key: "following",
                    children: <FollowingList />
                },
                {
                    label: "Suggestions",
                    key: "suggestions",
                    children: <SuggestionsList />
                },
            ]}
        />
        <Outlet />
    </div>;
}