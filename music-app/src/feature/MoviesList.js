import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const MoviesList = () => {
    const moviesList = useSelector((state) => {
        return state.movies;
    });

    return <div style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: 20 }}>
        {
            moviesList.map(movie => {
                return (
                    <Link key={movie.id} style={{ boxShadow: "2px 2px 4px #e3e3e3" }} to={`/movie/${movie.id}`}>
                        <img src={movie.displayPicture} width={100} />
                        <p>{movie.name}</p>
                        <b>{movie.releaseDate}</b>
                    </Link>
                )
            })
        }
    </div>
}