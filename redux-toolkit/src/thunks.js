// A thunk is a javascript function which acts as a middleware for the redux store.

import { actions } from "./actions";

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

export async function asyncIncrement(dispatch, getState) {
    await delay(2000);
    dispatch({ type: actions.inc_count });
    await delay(3000);
    dispatch({ type: actions.inc_count });
}