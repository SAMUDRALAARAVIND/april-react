import { useEffect, useRef, useState } from "react";
import "./styles/player.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actions";

const breakTime = (time) => {
    // time = 121 / 60
    let mins = parseInt(time / 60);
    return `${mins}:${time - mins * 60}`
}

// 120 s
// 10 
// width : 10 / 120 * 100 => 100/12

const playerInfoSelector = (state) => {
    const playerInfo = state.player;
    // playerInfo : {songId, movieId, isPlaying, songIndex }
    const movies = state.movies;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == playerInfo.movieId) {
            const songInfo = movies[i].songs.filter(song => song.id === playerInfo.songId)[0];
            return {
                title: songInfo.title,
                fileAddress: songInfo.fileAddress,
                imageUrl: movies[i].displayPicture,
                ...playerInfo
            }
        }
    }

    return null;
}

export const Player = () => {
    const isLiked = false;
    const playerInfo = useSelector(playerInfoSelector);
    const [totalDuration, setTotalDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const dispatch = useDispatch();

    const audioRef = useRef(null);
    const playWidth = (seekTime / totalDuration) * 100 + "%";

    const togglePlay = () => {
        dispatch({ type: actions.toggle_play_status })
    }

    const onTimeUpdate = (e) => {
        setSeekTime(audioRef.current.currentTime);
    }

    useEffect(() => {
        if (playerInfo?.isPlaying) {
            audioRef.current?.play();
        }
        else {
            audioRef.current?.pause();
        }
    }, [playerInfo?.isPlaying, playerInfo?.songId])

    if (!playerInfo) return null;

    return (
        <div className="player-container">
            <div className="left">
                <img src={playerInfo.imageUrl} width={50} />
                <h3>{playerInfo.title}</h3>
                <button style={{ color: isLiked ? 'red' : 'white' }} className="material-icons btn-icon">favorite</button>
            </div>
            <audio
                onCanPlayThrough={() => setTotalDuration(audioRef.current.duration)}
                ref={audioRef} src={"/" + playerInfo.fileAddress}
                onTimeUpdate={onTimeUpdate}
                controls
                className="native-audio"
            />

            <div className="custom-player">
                <div>
                    <button className="material-icons btn-icon">skip_previous</button>
                    <button className="material-icons btn-icon" onClick={togglePlay}>{playerInfo.isPlaying ? 'pause' : 'play_arrow'}</button>
                    <button className="material-icons btn-icon">skip_next</button>
                </div>
                <div className="play-bar">
                    <span>{breakTime(parseInt(seekTime))}</span>
                    <div className="bar">
                        <div className="seek-bar" style={{ width: playWidth }}></div>
                    </div>
                    <span>{breakTime(parseInt(totalDuration))}</span>
                </div>
            </div>
        </div>
    );
}