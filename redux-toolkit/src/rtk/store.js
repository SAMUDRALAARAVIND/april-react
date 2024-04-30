
// slices 

import { configureStore, createSlice } from "@reduxjs/toolkit";

// A slice is part the whole big redux state.
// The combination of all the slices will construct the redux store.

// RTK:  Immer library => detects the changes automatically in a non primitive dataa types
const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        inc: (state, action) => {
            state.count += 1;
        },
        dec: (state, action) => {
            state.count -= 1;
        }
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload.productId);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(pid => pid != action.payload.productId)
        }
    }
});

// {type: "cart/addItem", payload: 20}
export const { dec, inc } = counterSlice.actions;
export const { addItem, removeItem } = cartSlice.actions;

const store = configureStore({
    reducer: {
        a: counterSlice.reducer,
        b: cartSlice.reducer
    }
});

export default store;

// overall state: { a: {count: 0}, b: {cart: []}}