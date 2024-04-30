import { actions } from "./actions";

const intialState = {

};

/**
 *  {
 *      songId: 38393,
 *      movieId: 38393,
 *      songIndex: 3,
 *      isPlaying: true | false
 *  }
 * 
 */

export const playerReducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.set_song: {
            return { ...action.payload, isPlaying: true }
        }
        case actions.toggle_play_status: {
            return { ...state, isPlaying: !state.isPlaying }
        }
    }
    return state;
}