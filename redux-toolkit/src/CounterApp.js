import { useDispatch, useSelector } from "react-redux";
import { actions } from "./actions";

export const CounterApp = () => {
    console.log("counter app rendered")
    const count = useSelector((state) => state.a.count);
    const dispatch = useDispatch();

    return <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: actions.inc_count })}>Increment</button>
        <button onClick={() => dispatch({ type: actions.dec_count })}>Decrement</button>
    </div>
}