import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { actions } from "./actions";
import { thunk } from "redux-thunk"

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case actions.inc_count: {
            return { count: state.count + 1 };
        }
        case actions.dec_count: {
            return { count: state.count - 1 }
        }
        default: {
            return state;
        }
    }
}

const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case actions.add_item: {
            state.cart.push(action.payload.productId);
            return { cart: [...state.cart] }
        };
        case actions.remove_item: {
            return { cart: state.cart.filter(pid => pid != action.payload.productId) }
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({ a: countReducer, b: cartReducer })
const store = createStore(rootReducer, applyMiddleware(thunk));

// By adding thunk middleware to redux , we can pass functions as arguments to the dispatch method.

// to enable the thunk-middleware to redux store , we can pass an extra argument to the createStore method.

// Overall state : { a: {count: 0} , b: {cart: []}}
export default store;