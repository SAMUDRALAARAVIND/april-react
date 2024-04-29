const intialState = {

};

/**
 *  {
 *      songId: 48494,
 *      isPlaying: true | false,
 *      movieId: 4894,
 *  }
 * 
 */

export const playerReducer = (state = intialState, action) => {
    if (action.type === "set_song") {
        const { songId, isPlaying, movieId } = action.payload;
        return { songId, isPlaying, movieId }
    }
    if (action.type === "update_play_status") {
        return { ...state, isPlaying: action.payload.isPlaying }
    }
    return state;
}