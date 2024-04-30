import { dec, inc } from "./store";

export async function asyncIncrement(dispatch, getState) {
    await new Promise(r => setTimeout(r, 3000));
    dispatch(inc()); // { type: "counter/inc"}
    await new Promise(r => setTimeout(r, 4000));
    dispatch(dec());
}