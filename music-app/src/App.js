import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicApp from "./feature/MusicApp";
import { LikedSongs } from "./feature/LikedSongs";
import { MovieSongs } from "./feature/MovieSongs";
import { MoviesList } from "./feature/MoviesList";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" Component={MusicApp}>
              <Route path="/" Component={MoviesList} />
              <Route path="/movie/:movieId" Component={MovieSongs} />
              <Route path="/likedsongs" Component={LikedSongs} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;


/*
 likedSongs: {399403: true, 484993: true}

    [] => search time complexity: O(n)
    {} => Map => O(1), O(1)

    Actions we do on this slice: 
      add a song into the likedSongs 
      remove a song from the likedsongs.
 playerData: { movieId: 39903, songId: 94400, index: 3}

 actions: 
  moveRight, moveLeft, changeSong

*/