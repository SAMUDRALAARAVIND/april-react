import { Provider, useDispatch, useSelector } from "react-redux"
import store, { addItem } from "./store";
import { asyncIncrement } from "./thunk";

const Cart = () => {
    const productIds = useSelector(state => state.b.cart);
    const dispatch = useDispatch();

    const addProduct = () => {
        dispatch(addItem({ productId: 3839 }))
    }

    return <div>
        {
            productIds.map(pid => <p key={pid}>{pid}</p>)
        }
        <button onClick={addProduct}>Add Product</button>
    </div>
}

const Counter = () => {
    const count = useSelector(state => state.a.count);
    const dispatch = useDispatch();

    return <div>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(asyncIncrement)}>Async Update count</button>
    </div>
}

export const ReduxToolkit = () => {
    return (
        <Provider store={store}>
            <Counter />
            <Cart />
        </Provider>
    );
}

/**
  ReduxToolkit architecture is same as native redux.

  Advantages of redux toolkit: 
    1. It will only trigger the reducer which we need.
    2. action types (strings) will automatically be created by RTK. we don't need to create action types ourseleves.
    3. It comes with a built in thunk middleware , we don't need to externally setup middleware.
    4. We can do direct mutations in the state, without worrying about copying the data nad returning
    */