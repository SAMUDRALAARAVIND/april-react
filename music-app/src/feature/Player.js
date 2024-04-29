import { useEffect, useRef, useState } from "react";
import "./styles/player.scss";
import { useDispatch, useSelector } from "react-redux";

const breakTime = (time) => {
    // time = 121 / 60
    let mins = parseInt(time / 60);
    return `${mins}:${time - mins * 60}`
}

// 120 s
// 10 
// width : 10 / 120 * 100 => 100/12

export const Player = () => {
    const isLiked = false;
    const playerInfo = useSelector(state => state.player);
    const [totalDuration, setTotalDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const dispatch = useDispatch();

    const songDetails = useSelector(state => {
        const selectedMovie = state.movies.filter(movie => movie.id == playerInfo.movieId)[0];
        if (selectedMovie) {
            return { info: selectedMovie.songs.filter(song => song.id == playerInfo.songId)[0], imageUrl: selectedMovie.displayPicture };
        }
        return null;
    });


    const audioRef = useRef(null);
    const playWidth = (seekTime / totalDuration) * 100 + "%";

    const togglePlay = () => {
        playerInfo.isPlaying ? audioRef.current.pause() : audioRef.current.play();
        dispatch({ type: "update_play_status", payload: { isPlaying: !playerInfo.isPlaying } })
    }

    const onTimeUpdate = (e) => {
        setSeekTime(audioRef.current.currentTime);
    }

    useEffect(() => {
        if (audioRef.current) {
            setTotalDuration(audioRef.current.duration);
        }
    }, []);

    if (!playerInfo.songId || !songDetails) return null;

    return (
        <div className="player-container">
            <div className="left">
                <img src={songDetails.imageUrl} width={50} />
                <h3>{songDetails.info.title}</h3>
                <button style={{ color: isLiked ? 'red' : 'white' }} className="material-icons btn-icon">favorite</button>
            </div>
            <audio ref={audioRef} src={"/" + songDetails.info.fileAddress} onTimeUpdate={onTimeUpdate} controls className="native-audio" />

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