import { Outlet } from "react-router-dom"
import { Player } from "./Player";
import "./styles/music-app.scss";
import { Badge } from "antd";

const MusicApp = () => {
    return <div className="app-wrapper">
        <div className="navbar">
            <Badge count={5}>
                <span className="material-icons">favorite</span>
            </Badge>
        </div>
        <div className="outlet-wrapper">
            <Outlet />
        </div>
        <Player />
    </div>
}

export default MusicApp;