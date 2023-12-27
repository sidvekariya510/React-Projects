import './App.css';
import Head from './Head';
import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement } from "./Actions/Action"

function App() {

  const dispatch = useDispatch()

  const value = useSelector((state) => {
    return state
  })

  return (
    <div className="App">
      <Head />
      <h1>{value.INC_DEC.count}</h1>
      <br />

      <button onClick={() => {
        dispatch(Increment())
      }}>Increment</button>
      &nbsp;
      <button onClick={() => {
        dispatch(Decrement())
      }}>Decrement</button>
    </div>
  );
}

export default App;
