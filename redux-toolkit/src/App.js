
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import store from './store';
import { CounterApp } from './CounterApp';
import { actions } from './actions';
import { CartApp } from './CartApp';
import { asyncIncrement } from './thunks';
// redux-thunk, redux-saga
const Counter2 = () => {
  console.log("counter 2 rendered")
  const dispatch = useDispatch();

  const addItem = async () => {
    dispatch(asyncIncrement);
  }

  const incCount = () => {
    dispatch({ type: actions.inc_count })
  }

  return <div style={{ border: "2px solid blue", padding: 20 }}>
    <button onClick={incCount}>Increment Count</button>
    <button onClick={addItem}>Add Product</button>
  </div>
}

function App() {
  return (
    <Provider store={store}>
      <CounterApp />
      <Counter2 />
      <CartApp />
    </Provider>
  );
}

export default App;
