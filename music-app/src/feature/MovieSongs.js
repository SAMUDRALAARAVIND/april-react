import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import "./styles/songsList.scss";

export const MovieSongs = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const { songId, isPlaying } = useSelector(state => state.player);
    const songs = useSelector((state) => {
        return state.movies.filter((movie) => movie.id == movieId)[0].songs
    });

    const setPlayer = (songId, isPlaying) => {
        dispatch({ type: "set_song", payload: { songId, isPlaying: false, movieId } })
    }

    return <div className="songs-list">
        {
            songs.map(song => {
                const isLiked = true;
                return (
                    <div key={song.id} className="song">
                        <p>{song.title}</p>
                        <button
                            className="material-icons"
                            onClick={() => setPlayer(song.id)}
                        >{isPlaying && song.id === songId ? 'pause' : 'play_arrow'}</button>
                        <button className="material-icons" style={{ color: isLiked ? "red" : "blue" }}>favorite</button>
                    </div>
                );
            })
        }
    </div>
}